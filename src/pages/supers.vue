<template>
  <div class="container mx-auto my-8">
    <p>Hai</p>
    <li v-for="sup in result.supers" :key="sup.id">{{ sup.name }}</li>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import {
  MyQueryDocument,
  InsertSupersDocument,
} from '@/generated/graphqlOperations'
import { useMutation, useQuery, useQueryLoading } from '@vue/apollo-composable'

export default defineComponent({
  name: 'HaiPage',
  setup() {
    const { result, refetch } = useQuery(MyQueryDocument)
    const { mutate: insertSuper } = useMutation(InsertSupersDocument)
    const loading = useQueryLoading()

    const form = ref({
      name: '',
    })

    const onSubmit = async () => {
      await insertSuper({ name: form.value.name })
      refetch()
    }

    return { form, loading, onSubmit, result }
  },
  data() {
    return {
      supers: [],
    }
  },
})
</script>

<style lang="scss" scoped>
</style>
