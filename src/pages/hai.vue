<template>
  <div>
    <p>hai {{ loading }}</p>
    <li v-for="sup in result.supers" :key="sup.id">{{ sup.name }}</li>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { MyQueryDocument } from '@/generated/graphqlOperations'
import { useQuery, useQueryLoading } from '@vue/apollo-composable'

export default defineComponent({
  name: 'HaiPage',
  setup() {
    const { result } = useQuery(MyQueryDocument)
    const loading = useQueryLoading()

    return { loading, result }
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
