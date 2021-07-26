<template>
  <div class="container mx-auto my-8">
    <p class="text-lg font-bold mb-4">Supers</p>
    <p v-if="loading">loading</p>
    <template v-else>
      <li v-for="sup in supers" :key="sup.id">
        <nuxt-link
          :to="`/supers/${sup.id}`"
          class="text-blue-600 hover:text-blue-800 hover:underline"
        >
          {{ sup.id }}: {{ sup.name }}
        </nuxt-link>
      </li>
      <form @submit.prevent="onSubmit">
        <div>
          <label class="block mb-4">New Super</label>
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
        </div>
      </form>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import {
  GetSupersDocument,
  InsertSuperDocument,
} from '@/generated/graphqlOperations'
import {
  useMutation,
  useQuery,
  useQueryLoading,
  useResult,
} from '@vue/apollo-composable'

export default defineComponent({
  name: 'SupersPage',
  setup() {
    const { result, refetch } = useQuery(GetSupersDocument)
    const { mutate: insertSuper } = useMutation(InsertSuperDocument)
    const loading = useQueryLoading()
    const supers = useResult(result, [], (data) => data?.supers)

    const form = ref({
      name: '',
    })

    const onSubmit = async () => {
      await insertSuper({ name: form.value.name })
      form.value.name = ''
      refetch()
    }

    return { form, loading, onSubmit, supers }
  },
})
</script>

<style lang="scss" scoped>
</style>
