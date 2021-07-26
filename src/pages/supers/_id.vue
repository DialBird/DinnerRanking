<template>
  <div class="container mx-auto my-8">
    <nuxt-link
      to="/supers"
      class="text-blue-600 hover:text-blue-800 hover:underline"
      >Back</nuxt-link
    >
    <p class="text-lg font-bold mb-4">{{ id }}</p>
    {{ sup }}
    <form @submit.prevent="onSubmit">
      <input
        v-model="form.name"
        type="text"
        class="
          appearance-none
          border
          rounded
          w-96
          py-2
          px-3
          text-gray-700
          leading-tight
        "
      />
      <button
        type="submit"
        class="
          bg-blue-500
          hover:bg-blue-700
          text-white
          font-bold
          py-2
          px-4
          rounded
        "
      >
        Submit
      </button>
    </form>
    <button
      class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      @click="onDelete"
    >
      Delete
    </button>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useRoute,
  useRouter,
  watch,
} from '@nuxtjs/composition-api'
import {
  useMutation,
  useQuery,
  useQueryLoading,
  useResult,
} from '@vue/apollo-composable'
import {
  DeleteSuperDocument,
  GetSuperDocument,
  UpdateSuperDocument,
} from '@/generated/graphqlOperations'

export default defineComponent({
  name: 'SuperPage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const id = computed(() => route.value.params.id)
    const { result, refetch } = useQuery(GetSuperDocument, {
      id: Number(id.value),
    })
    const { mutate: updateSuper } = useMutation(UpdateSuperDocument)
    const { mutate: deleteSuper } = useMutation(DeleteSuperDocument)
    const loading = useQueryLoading()
    const sup = useResult(result, null, (data) => data?.supers_by_pk)

    const form = ref({
      name: sup.value?.name,
    })

    watch(loading, (val) => {
      if (val) return

      if (sup.value) {
        form.value.name = sup.value.name
      } else {
        router.push('/supers')
      }
    })

    const onSubmit = async () => {
      await updateSuper({ id: Number(id.value), name: form.value.name || '' })
      refetch()
    }
    const onDelete = async () => {
      await deleteSuper({ id: Number(id.value) })
      router.push('/supers')
    }

    return { form, id, onDelete, onSubmit, sup }
  },
})
</script>

<style lang="scss" scoped>
</style>
