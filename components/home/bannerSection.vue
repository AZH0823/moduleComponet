<script setup lang="ts">
import { defineProps } from 'vue'
import swiper from '@/components/global/swiper.vue';

defineProps({
  bannerImage: {
    type: Array,
    default: () => []
  },
  isHomePage: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div  v-if="bannerImage">
    <swiper :bannerImage="bannerImage"/>
  </div>
</template>

<style scoped></style>
