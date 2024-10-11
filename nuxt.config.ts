// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // '@nuxtjs/tailwindcss',
  modules: ['@unocss/nuxt', '@vueuse/nuxt', 'nuxt-swiper'],
  css:[
    '~/assets/style/main.scss'
  ],
  runtimeConfig: {
    public: {
      // 公開的環境變數
      apiBase: process.env.VUE_APP_BASE_API
    },
  },
})