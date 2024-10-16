// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // '@nuxtjs/tailwindcss',
  modules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-swiper',
    '@nuxt/image',
  ],
  image: {
    dir: 'assets/img',
    // staticFilename: '[publicPath]/img/[name]-[hash][ext]',
    domains: [
      'api.einsure.com.tw',
      'test-api.einsure.com.tw',
      'einsure-dev-public.s3.hicloud.net.tw',
      'einsure-prod-public.s3.hicloud.net.tw'
    ],
    format: ['webp', 'jpeg'],  // 確保支援多種格式
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
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