<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  bannerImage: {
    type: Array,
    default: () => []
  },
  isHomePage: {
    type: Boolean,
    default: false
  }
})
const bannerImages = computed(() => {
  return props.bannerImage
})
</script>

<template>
  <div>
    Component: bannerSection <pre>{{ bannerImages }}</pre>
  </div>
</template>

<style scoped></style>
