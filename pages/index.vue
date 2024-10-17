<script setup>
import bannerSection from '~/components/home/bannerSection.vue';
import selectbarSection from '~/components/home/selectbarSection.vue';
import featureSection from '~/components/home/featureSection.vue';
import newsSection from '~/components/home/newsSection.vue';
import { usePageObject } from '~/composables/useIndex';
const route = useRoute();
const { pageObject, newsList } = await usePageObject(route); // 獲取響應式數據
</script>

<template>
  <div>
    <bannerSection :banner-image="pageObject.bannerImage || []" :critical="true" :is-home-page="true" />
    <selectbarSection />
    <featureSection :h1="pageObject.h1" />
    <newsSection :title="'最新消息'" :data="newsList"/>
  </div>
</template>

<style lang="scss" scoped>
</style>
