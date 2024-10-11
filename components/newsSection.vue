<script setup lang="ts">
import { ref, watch, toRefs } from 'vue';
import { useDateFormat } from '@vueuse/core'

// 正確使用 defineProps 來定義 props
const props = withDefaults(defineProps<{
  title: string,
  data: any
}>(), {
  title: '默認標題',
})

// 格式化日期的 computed
const formattedDates = computed(() => {
  if(props.data){
    return props.data.map((item: any) => ({
      ...item,
      formattedDate: useDateFormat(item?.dateStart, 'YYYY-MM-DD').value || '',
    }))
  } else return [{}]
})
</script>

<template>
  <div id="news" class="bg-cover bg-white w-full flex flex-col text-center mx-auto">
    <span class="text-3xl text-text-dark mt-16 font-bold mx-auto">最新消息</span>
    <div
      class="
        m-auto
        text-left
        py-8
        px-main
        bg-white
        flex flex-col
        gap-4
        md:w-2/3
        max-w-[1160px]
        card
      "
    >
      <div
        v-for="(item, index) in props.data"
        v-show="index < 5"
        :key="`news-${index}-${item.id}`"
        class="
          text-left
          border-b-2 border-light-grey
          grid
          w-full
          pb-5
          grid-cols-3
          md:grid-cols-12
          items-center
          place-self-start
          md:text-left
        "
      >
        <span class="text-text-light col-span-1 md:col-span-3 text-md">{{
          formattedDates[index].formattedDate
        }}</span>
        <nuxt-link
          v-if="!item.link && !item.specialCase"
          event=""
          :to="{ path: '/news/' + item.id }"
          class="
            col-span-2
            font-bold
            text-einsure-darkest
            link
            md:col-span-9
            md:font-normal
          "
        >{{ item.title.replace(' ', '') }}</nuxt-link>
        <nuxt-link
          v-if="item.specialCase"
          event=""
          :to="{ path: '/news/' + item.specialCase }"
          class="
            col-span-2
            font-bold
            text-einsure-darkest
            link
            md:col-span-9
            md:font-normal
          "
        >{{ item.title.replace(' ', '') }}</nuxt-link>
        <a
          v-if="item.link"
          :href="item.link"
          class="
            col-span-2
            font-bold
            text-einsure-darkest
            link
            md:col-span-9
            md:font-normal
          "
        >
          {{ item.title.replace(' ', '') }}</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
a{
  text-decoration: none;
}
.px-main{
  padding-left: 5%;
  padding-right: 5%;
}
.card{
  background-color: var(--card);
}
</style>
