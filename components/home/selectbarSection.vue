<template>
  <div class="overflow-hidden">
    <div
      id="news"
      class="
        bg-white
        w-11/12
        m-auto
        grid grid-cols-3
        lg:grid-cols-6
        lg:w-8/12
        max-w-[1160px]
        text-center
        mt-6
      "
    >
      <div
        v-for="(icon, index) in selectIcon"
        :key="`icon-${icon.name}-${index}`"
        class="
          product
          flex flex-col
          items-center
          justify-center
          col-span-1
          rounded-full
          hover:shadow-inner
          cursor-pointer
          m-auto
        "
        @click="clickicon(icon.name)"
      >
        <nuxt-img :alt="icon.alt" :src="icon.src" width="108" height="108" />{{
          icon.name
        }}
      </div>
      <div
        v-for="(icon, index) in moreIcon"
        v-show="moreInsurance"
        :key="`moreicon-${icon.name}-${index}`"
        class="
          product
          flex flex-col
          items-center
          justify-center
          col-span-1
          rounded-full
          hover:shadow-inner
          cursor-pointer
          m-auto
        "
        @click="clickicon(icon.name)"
      >
        <nuxt-img :alt="icon.alt" :src="icon.src" width="108" height="108" />{{
          icon.name
        }}
      </div>
    </div>
    <div
      v-show="!moreInsurance"
      class="
        more_btn
        px-6
        mt-3
        lg:mt-5
        text-white text-xl
        rounded
        m-auto
        mb-20
        flex
        justify-between
        items-center
        cursor-pointer
        box-border
      "
      style="width: 160px; height: 50px"
      @click="dropdown_btn"
    >
      更多內容
      <nuxt-img
        src="home/dropdown.webp"
        width="24"
        height="15"
        style="width: 16px; height: 10px;"
        alt="展開"
      />
    </div>
    <div
      v-show="moreInsurance"
      class="
        more_btn
        px-12
        lg:px-12
        mt-5
        lg:mt-12
        text-white text-xl
        rounded
        m-auto
        mb-20
        flex
        justify-between
        items-center
        cursor-pointer
        box-border
      "
      style="width: 160px; height: 50px"
      @click="pullup_btn"
    >
      收合
      <nuxt-img
        src="home/dropdown.webp"
        width="24"
        height="15"
        style="width: 16px; height: 10px;"
        class="transform-rotate-x-180"
        alt="展開"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const moreInsurance = ref(false);
const selectIcon = ref([
  { name: '寵物險', alt: '寵物險', src: '/home/petInsurance_icon.webp'},
  { name: '旅平險', alt: '旅平險', src: '/home/travelInsurance_icon.webp' },
  { name: '租車險', alt: '租車險', src: '/home/carrentalInsurance_icon.webp' },
  { name: '汽車險', alt: '汽車險', src: '/home/carInsurance_icon.webp' },
  { name: '機車險', alt: '機車險', src: '/home/motoInsurance_icon.webp' },
  { name: '定期壽險', alt: '定期壽險', src: '/home/termlife_icon.webp' },
]);
const moreIcon = ref([
  { name: '年金險', alt: '年金險', src: '/home/annuity_icon.webp' },
  { name: '意外險', alt: '意外險', src: '/home/accientInsurance_icon.webp' },
  { name: '住火險', alt: '住火險', src: '/home/housefireInsurance_icon.webp' },
  { name: '疫苗險', alt: '疫苗險', src: '/home/vaccineInsurance_icon.webp' },
  { name: '手機險', alt: '手機險', src: '/home/phoneInsurance_icon.webp' },
]);

const clickicon = (type) => {
  const routes = {
    '疫苗險': '/product/vaccine/chubb',
    '手機險': '/product/phone/wwunion',
    '寵物險': '/product/pet',
    '住火險': '/product/housefire/ski',
    '意外險': '/product/accident/general',
    '機車險': '/product/moto/set',
    '汽車險': '/product/car/set',
    '租車險': '/product/travel/moto',
    '旅平險': '/product/travel',
    '定期壽險': '/product/termlife',
    '年金險': '/product/annuity',
  };
  if (routes[type]) {
    router.push({ path: routes[type] });
  }
};

const dropdown_btn = () => {
  moreInsurance.value = true;
};

const pullup_btn = () => {
  moreInsurance.value = false;
};
</script>

<style lang="scss" scoped>
.more_btn {
  background: linear-gradient(to right, #f59e0b, #fcd34d);
  box-shadow: 2px 2px 12px rgba(239, 164, 44, 0.5);
}
.product {
  width: 150px;
  height: 150px;
  img {
    max-width: 72px;
    object-fit: contain;
  }
}
.product:hover {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}
@media screen and (max-width: 1024px) {
  .product {
    width: 130px;
    height: 130px;
  }
}
</style>