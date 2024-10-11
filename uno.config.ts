import { defineConfig } from 'unocss'
export default defineConfig({
  // 自定義你的設置
  rules: [
    ['primary-color', { color: 'var(--primary-color)' }],
    ['background-color', { backgroundColor: 'var(--background-color)' }],
    ['text-color', { color: 'var(--text-color)' }],
  ],
  shortcuts: [
    // 自定義快捷方式
    ['btn', 'px-4 py-1 rounded inline-block bg-blue-600 text-white cursor-pointer hover:bg-blue-700'],
  ],
  theme: {
    // 自定義主題
    colors: {
      'einsure-dark': '#11676C',
        // eslint-disable-next-line quote-props
        'einsure': '#348D91!important',
        'einsure-light': '#3DA1A6!important',
        'einsure-orange': '#EFA42C!important',
        'einsure-warning': '#D55353!important',
        'light-pink': '#FFCCCB!important',
        'text-semidark': '#3C3D3D',
        'text-dark': '#3F3F3F',
        'einsure-darkest': '#374D4A',
        // eslint-disable-next-line quote-props
        'black': '#000',
        'text-light': '#6F6F6F',
        'lighter-grey': '#DEDEDE',
        'shallow-grey': '#EEEEEE',
        'body-gray': '#FBFBFB',
        'light-grey': '#F7F7F7',
        'light-green': '#DCF2DF',
        // eslint-disable-next-line quote-props
        'green': '#73C48A',
        'dark-green': '#178943',
        // eslint-disable-next-line quote-props
        'white': '#fff',
        'white-important': '#fff!important',
        // eslint-disable-next-line quote-props
        'pi': '#E0E0E0',
        'pi-blue': '#1DA7FC',
        'pi-grey': '#F3F5F8',
        // eslint-disable-next-line quote-props
        'pc': '#1EA7FC',
        'pc-lighter-blue': '#EFF8FE',
        'pc-blue': '#007AFF',
        'pc-deep-blue': '#274B7C',
        'pc-light-grey': '#F3F5F8',
        'pc-brown-grey': '#F3F5F8',
        'pc-grey': '#DED9D9',
        'pc-deep-grey': '#918E8E',
        'pc-deeper-grey': '#707070',
        'pc-light-dark': '#5C5D5E',
        'pc-green': '#72C83A',
        'pc-pink': '#FBEFEF',
        'pc-deep-pink': '#FF007C',
        'pc-red': '#d7000f',
        'primary-10': '#0D1D1C',
        'primary-20': '#163434',
        'primary-30': '#1C4A4C',
        'primary-40': '#1F6469',
        'primary-50': '#308083',
        'primary-60': '#388F92',
        'primary-70': '#3E9A9F',
        'primary-80': '#9FC5C5',
        'primary-90': '#E9F5F1',
        'secondary-10': '#271C14',
        'secondary-20': '#4F3620',
        'secondary-30': '#7B542A',
        'secondary-40': '#AB7631',
        'secondary-50': '#DE9C35',
        'secondary-60': '#F8B62D',
        'secondary-70': '#F1C768',
        'secondary-80': '#F6DCA0',
        'secondary-90': '#FFF5E0',
        'warning-10': '#261516',
        'warning-20': '#4C2526',
        'warning-30': '#743434',
        'warning-40': '#9F4342',
        'warning-50': '#D55352',
        'warning-60': '#D4766C',
        'warning-70': '#DE9A8E',
        'warning-80': '#E9BDB3',
        'warning-90': '#F4DFD9',
        'error-10': '#261516',
        'error-20': '#4C2526',
        'error-30': '#743434',
        'error-40': '#9F4342',
        'error-50': '#D55352',
        'error-60': '#D4766C',
        'error-70': '#DE9A8E',
        'error-80': '#E9BDB3',
        'error-90': '#F4DFD9',
        'neutral-10': '#0B0F0E',
        'neutral-20': '#171B1B',
        'neutral-30': '#232726',
        'neutral-40': '#2F3232',
        'neutral-50': '#3F3F3E',
        'neutral-60': '#5C5D5C',
        'neutral-70': '#918E8C',
        'neutral-80': '#D9DADD',
        'neutral-90': '#F7F7F6',
        'neutral-100': '#FFFFFF',
        'einsure-neutral-90': '#F4F5F8',
    },
  },
})