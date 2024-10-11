<script setup>
// import newsSection from '~/components/newsSection.vue';
// import { useRouter, useRoute } from 'vue-router'

// const route = useRoute()
// console.log(`use: `, route.path )

// import { usePageObject } from '~/composables/useIndex.js'
// const { pageObject, error } = await usePageObject(route)
</script>

<template>
  <div>
    <newsSection :title="'最新消息'" :data="data"/>
  </div>
</template>

<style lang="scss" scoped>
.bg-w-ramp{
  background: linear-gradient(0deg, var(--white), var(--white));
}
</style>
