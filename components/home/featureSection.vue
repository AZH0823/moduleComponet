<template>
  <div class="flex flex-col w-11/12 m-auto mb-10 text-center md:w-full">
    <h1 class="text-3xl text-text-dark font-bold mx-auto">{{ h1 }}</h1>
    <div class="md:w-8/12 relative mx-auto box-content max-w-[1160px]">
      <div id="tabmenu" class="block md-flex justify-center w-full hidden py-4  text-text-dark text-xl" />
      <p class="firstpageunderline absolute hidden md:block" />
    </div>
    <swiper
      v-bind="swiperOption"
      @slideChange="onSlideChange"
      class="swiper w-11/12 m-auto md:w-8/12 productSwiper max-w-[1160px]"
    >
    <swiperSlide
        v-for="(product, index) in selectCase"
        :key="`hot-insurance-${product.title}-${index}`"
      >
      
        <div class="flex justify-between my-5 md:my-0 item-center">
          <div
            class="
              border-b-8 border-einsure-dark border-b-solid
              w-full
              pb-2
              md::pb-0
              cursor-pointer
              text-text-dark text-xl
              md:hidden
              block
            "
          >
            {{ product.name }}
          </div>
        </div>
        <div
          class="
            flex flex-col xl:flex-row
            w-full
            shadow-md
            border border-lighter-grey border-solid
            cardShadow
            mb-10
          "
        >
          <nuxt-img
            :src="product.src"
            :alt="product.alt"
            class="vaccination m-auto mt-8 xl:m-0"
            width="486"
            height="389"
            loading="lazy"
          />
          <div
            class="
              text-center
              w-10/12
              m-auto
              max-w-sm
              flex flex-col
              items-left
              md:p-5
              md:max-w-md
            "
          >
            <h2 class="text-lg my-5 font-bold ">{{ product.title }}</h2>
            <div class="mb-5 flex text-justify leading-5">
              <div class="w-1 h-5 flex-shrink-0 bg-einsure-dark mr-1" />
              {{ product.point_one }}
            </div>
            <div class="mb-5 flex text-justify leading-5">
              <div class="w-1 h-5 flex-shrink-0 bg-einsure-dark mr-1" />
              {{ product.point_two }}
            </div>
            <div class="mb-5 flex text-justify leading-5">
              <div class="w-1 h-5 flex-shrink-0 bg-einsure-dark mr-1" />
              {{ product.point_three }}
            </div>
            <button
              class="
                more_btn
                col-span-3
                px-6
                text-white text-xl
                border-einsure-orange
                rounded
                m-auto
                mb-10
                xl:mt-5
                hover:text-einsure-orange
              "
              style="width: 160px; height: 50px"
              @click="clickurl(product)"
            >
              {{ product.situation }}
            </button>
          </div>
        </div>
      </swiperSlide>
      <div
        slot="button-prev"
        class="swiper-button-prev text-lighter-grey"
      />
      <div
        slot="button-next"
        class="swiper-button-next text-lighter-grey"
      />
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const router = useRouter();
const props = defineProps({
  h1: {
    type: String,
    default: ''
  }
})
const swiperOption = ref({
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  slidesPerView: '1',
  spaceBetween: 0,
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '#tabmenu',
    clickable: true,
    renderBullet(index, className) {
      const tabarr = ['寵物險', '機車險', '旅平險/不便險']
      return `<span class="${className} py-2">${tabarr[index]}</span>`
    }
  },
  modules: [Pagination, EffectFade, Navigation, Autoplay]
})
const onSlideChange = (swiper) => {
  const tabmenu = document.querySelectorAll('#tabmenu span');
  const leftWidth = 100 / tabmenu.length;
  const underline = document.querySelector('.firstpageunderline');
  underline.style.left = `${leftWidth * swiper.activeIndex}%`;
};
const selectCase = ref([
  {
    name: '寵物險',
    title: '給毛孩全方位的保障',
    src: '/home/featurePet.webp',
    alt: '寵物',
    point_one: '門診住院手術都有賠，一年醫療費最高可賠「12.8萬」',
    point_two: '投保前「免體檢」，準備晶片立即線上投保',
    point_three: '保費「超便宜」無負擔，一天最低只要5元',
    situation: '查看更多',
    href: '/product/pet/'
  },
  {
    name: '機車險',
    title: '車險方案，為你精挑細選',
    src: 'home/featureMoto.webp',
    alt: '機車',
    point_one: '集合多家熱門方案，滿足你各種需求',
    point_two: '24H線上投保不中斷，再享網路優惠價',
    point_three: '客製化車險保單，保障項目隨你自由增減',
    situation: '查看更多',
    href: '/product/moto/set'
  },
  {
    name: '旅平險/不便險',
    title: '選對旅平險，開啟美好旅程',
    src: 'home/featureTravel.webp',
    alt: '選對旅平險，開啟美好旅程',
    point_one: '免四處比較！一站選購市售熱門方案，方案超齊全',
    point_two: '保費親民，500萬旅遊保障，4天僅需338元',
    point_three: '班機延誤、行李損失都有賠，旅途無憂輕鬆出發',
    situation: '查看更多',
    href: '/product/travel'
  }
])

const clickurl = (product) => {
  if (product.href === '即將上線') {
    this.$noicon('即將上線，敬請期待')
  } else {
    router.push({
      path: product.href
    })
  }
}


onMounted(() => {
  const tabmenu = document.querySelectorAll('#tabmenu span')
  const leftWidth = 100 / tabmenu.length
  tabmenu.forEach((item, index) => {
    item.addEventListener('click', () => {
      const underline = document.querySelector('.firstpageunderline')
      underline.style.left = leftWidth * index + '%'
    })
  })
})
</script>

<style lang="scss">
$tabs-number: 3;
$tab-width: calc(100 / $tabs-number) * 1%;

.firstpageunderline {
  position: absolute;
  width: $tab-width;
  height: 8px;
  left: 0;
  bottom: 1rem;
  background-color: #11676C;
  transition: all .5s;
}

#tabmenu {
  .swiper-pagination-bullet-active {
    font-weight: 900;
  }
  
  .swiper-pagination-bullet {
    font-weight: 900;  
    width: $tab-width !important;
    height: auto;
    opacity: 1;
    background-color: transparent !important;
    border-radius: unset;
    margin: unset !important;
  }

  span {
    border-bottom-style: solid;
    border-bottom-width: 8px;
    border-bottom-color: rgb(229, 245, 245);
  }
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px){
    display: block;
  }
  height: 100%; /* 確保 Slide 高度一致 */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  &.swiper-slide-active {
    opacity: 1;
  }
}
.swiper-button {
  &-next {
    transform: rotate(180deg);
  }
  &-next, &-prev {
    content: '';
    color: transparent !important;
    background-image: url(@/assets/img/home/left.png);
    background-repeat: no-repeat;
    background-position: center;
  }
}
@media screen and (min-width: 768px) {
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }
}
</style>

<style lang="scss" scoped>
button {
  outline: none;
}
.vaccination {
  display: block;
  width: 250px;
  height: 200px;
}
.more_btn {
  background: linear-gradient(to right, #f59e0b, #fcd34d);
  box-shadow: 2px 2px 12px rgba(239, 164, 44, 0.5);
}
.more_btn:hover {
  background: #fff;
  border: 3px solid;
}
@media screen and (min-width: 768px) {
  .vaccination {
    width: 486px;
    height: 389px;
  }
}
</style>