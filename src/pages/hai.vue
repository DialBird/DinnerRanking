<template>
<div>
<p>hai</p>
<li v-for="sup in supers" :key="sup.id">{{ sup.name}}</li>
</div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api"
import gql from 'graphql-tag'

export default defineComponent({
  name: "HaiPage",
  setup() {},
  apollo: {
    supers: gql`
      query getSupers {
        supers {
          id
          name
        }
      }
    `
  },
})
</script>

<style lang="scss" scoped>
</style>
