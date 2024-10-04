<script setup lang="ts">
import { ref, watch, toRefs } from 'vue';

// 正確使用 defineProps 來定義 props
const props = toRefs(withDefaults(defineProps<{
  title: string,
  data: any
}>(), {
  title: '默認標題',
}))

// 或者使用 computed
const datalist = computed(() => props.data);

</script>

<template>
  <div id="news" class="bg-cover bg-white w-full flex flex-col text-center mx-auto">
    <span class="text-3xl text-text-dark mt-16 font-bold mx-auto">{{ title }}</span>
      <div
        v-for="(item, index) in datalist.result"
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
          item.dateStart
        }}</span>
        <nuxt-link
          v-if="!item.link && !item.specialCase"
          :to="{ path: '/news/' + item.id }"
          class="
            col-span-2
            font-bold
            text-einsure-darkest
            link
            md:col-span-9
            md:font-normal
          "
        >{{ item.title ? item.title.replace(/\s+/g, '') : '' }}</nuxt-link>
        <nuxt-link
          v-if="item.specialCase"
          :to="{ path: '/news/' + item.specialCase }"
          class="
            col-span-2
            font-bold
            text-einsure-darkest
            link
            md:col-span-9
            md:font-normal
          "
        >{{ item.title ? item.title.replace(/\s+/g, '') : '' }}</nuxt-link>
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
          {{ item.title ? item.title.replace(/\s+/g, '') : '' }}</a>
      </div>
  </div>
</template>

<style scoped></style>
