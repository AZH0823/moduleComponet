<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade,Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
const modules = [Pagination, EffectFade];
const props = defineProps({
  bannerImage: {
    type: Array,
    default: () => []
  },
  width: {
    type: Number,
    default: 1920
  },
  height: {
    type: Number,
    default: 400
  },
  isHomePage: {
    type: Boolean,
    default: false
  }
})

const slides = props.bannerImage
console.log(slides)
const onSwiper = (swiper) => {
  console.log(`init: `, swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>
<template>
  <div class="swiper-container loadingHome">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      class="swiper productSwiper"
      :pagination="{ clickable: true }"
      :breakpoints="{
        1024: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        50: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <nuxt-img
          :src="slide.src"
          :alt="slide?.alt || '輪播圖片'"
          class="mx-auto banner_pic block w-full cursor-pointer"
          :width="width"
          :height="height"
          :loading="index === 0 ? 'eager' : 'lazy'"
          :preload="index === 0"
          placeholder="/webBannerBG_1920_600.webp"
          format="webp" 
          native
          />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
:deep(.swiper-pagination .swiper-pagination-bullet) {
  position: relative;
  opacity: 1;
  background-color: transparent;
  width: 24px;
  height: 24px;
}

:deep(.swiper-pagination .swiper-pagination-bullet)::before,
:deep(.swiper-pagination .swiper-pagination-bullet-active)::before {
  position: absolute;
  left: 7px;
  top: 7px;
  content: '';
  height: 10px;
  width: 10px;
  border-radius: 100%;
}
:deep(.swiper-pagination .swiper-pagination-bullet)::before {
  background-color: #fff;
}
:deep(.swiper-pagination .swiper-pagination-bullet-active)::before {
  background-color: #efa42c;
}
.banner_pic {
  object-fit: cover;
}
.banner_pic {
  width: 100vw;
}
@media screen and (max-width: 1200px) {
  .banner_pic {
    height: 373px;
  }
}
@media screen and (min-width: 771px) {
  .loadingHome{
  aspect-ratio: 1920 / 600;
  width: 100vw;
}
  .swiper_web {
    display: block;
  }
  .swiper_rwd {
    display: none;
  }
}
@media screen and (max-width: 770px) {
  .swiper_web {
    display: none;
  }

  .banner_pic{
    object-fit: fill !important;
    height:auto;
  }
}
</style>