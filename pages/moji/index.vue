<script setup>
import bannerSection from '~/components/home/bannerSection.vue';
import newsSection from '~/components/home/newsSection.vue';
import { usePageObject } from '~/composables/useIndex';

const route = useRoute();
const { pageObject, newsList } = await usePageObject(route); // 獲取響應式數據
onMounted(()=>{
  console.log(`index pageObject: `, newsList)
})
</script>

<template>
  <div class="bg-w-ramp">
    <template v-if="pageObject && pageObject.bannerImage">
      <banner-section :banner-image="pageObject.bannerImage || []" :critical="true" :is-home-page="true" />
    </template>
    <newsSection :title="'最新消息'" :data="newsList"/>
  </div>
</template>

<style lang="scss" scoped>
.bg-w-ramp{
  background: linear-gradient(0deg, var(--white), var(--white));
}
</style>