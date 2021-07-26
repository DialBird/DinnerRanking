<template>
  <div class="container mx-auto my-8">
    <p class="text-lg font-bold mb-4">{{ id }}</p>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  useRoute,
  useRouter,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'SuperPage',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const id = computed(() => route.value.params.id)

    onMounted(() => {
      router.push('/supers')
    })

    return { id }
  },
})
</script>

<style lang="scss" scoped>
</style>
