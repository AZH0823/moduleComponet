<script setup>
import useHttp  from '~/composables/useHttp'
import newsSection from '~/components/newsSection.vue';
const fetchData = async () => {
  try {
    const domain = '/news/list'
    const map = await useHttp.get(domain);
    console.log(`page get data: `, map);
  } catch (error) {
    console.error(error);
  }
};
onMounted(async()=>{
  const domain = '/news/list'
  data.value = await useHttp.get(domain);
  console.log(`onMounted page get data: `, data.result);
})

const data = ref([])

</script>

<template>
  <div class="bg-w-ramp">
    Page: 
    <button @click="fetchData">click</button>
    <newsSection :title="'最新消息'" :data="data"/>
  </div>
</template>

<style lang="scss" scoped>
.bg-w-ramp{
  background: linear-gradient(0deg, var(--white), var(--white));
}
</style>
