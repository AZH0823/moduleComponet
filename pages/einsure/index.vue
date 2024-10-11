<script setup>
import newsSection from '~/components/newsSection.vue';
import bannerSection from '~/components/bannerSection.vue';
import { usePageObject } from '~/composables/useIndex';

const route = useRoute();
console.log(`index: `, route)
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