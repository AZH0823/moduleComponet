<script setup lang="ts">
import { useRoute } from 'vue-router'
definePageMeta({
  layout: 'error'
})

const route = useRoute()
const slug = route.params.slug
</script>

<template>
  <div class="mx-auto flex flex-wrap items-center p-4 h-[100vh]">
    <div class="w-full p-4 text-center ">
      <div class="text-[12px] font-semibold">404-Page: {{ slug }}</div>
    </div>
    <div class="w-full p-4 text-center">
      <div class="mb-4 text-3xl font-medium">噢不！找不到這個頁面 😮</div>
      <div class="mb-8 text-lg">您可能輸入了錯誤的網址或頁面已被刪除。</div>
      <NuxtLink to="/" class="rounded border border-white px-4 py-2 hover:bg-gray-50 hover:bg-opacity-10 active:bg-opacity-20">回首頁</NuxtLink>
    </div>
  </div>
</template>

<style scoped></style>
