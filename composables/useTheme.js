// composables/useTheme.js
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const KeysMap = {
  CARD: 'card',
  TEXTPRIMARY: 'textPrimary',
  TEXTSECOND: 'textSecond',
  TEXTTHIRD: 'textThird',
  BACKGROUND: 'background'
}
const themeColors = {
  default: {
    [KeysMap.CARD]: '#EBF8FF',
    [KeysMap.TEXTPRIMARY]: '#2B6CB0',
    [KeysMap.TEXTSECOND]: '#2C5282',
    [KeysMap.TEXTTHIRD]: '#2A4365',
    [KeysMap.BACKGROUND]: '#F7FAFC'
  },
  einsure: {
    [KeysMap.CARD]: '#E3F9E5',
    [KeysMap.TEXTPRIMARY]: '#2C7A7B',
    [KeysMap.TEXTSECOND]: '#285E61',
    [KeysMap.TEXTTHIRD]: '#234E52',
    [KeysMap.BACKGROUND]: '#F0FFF4'
  },
  moji: {
    [KeysMap.CARD]: '#FAF5FF',
    [KeysMap.TEXTPRIMARY]: '#6B46C1',
    [KeysMap.TEXTSECOND]: '#553C9A',
    [KeysMap.TEXTTHIRD]: '#44337A',
    [KeysMap.BACKGROUND]: '#F3E8FF'
  }
}
const genRootcolor = (theme) => {
  // 動態設置 CSS 變數
  const root = document.documentElement;
  const colors = themeColors[theme] || themeColors.default;

  for (const key in KeysMap) {
    const cssVariable = KeysMap[key];
    root.style.setProperty(`--${cssVariable}`, colors[cssVariable]);
  }
  // console.log(`root color is generate `)
}

export const useThemeWatcher = () => {
  const route = useRoute()
  const themeClass = ref('default') // 默認主題

  // 監聽路由變化，並根據路由設置主題
  watch(
    () => route.path,
    (newPath) => {
      // console.log(`New path: `, newPath); // 檢查路由變化
      if (newPath.includes('einsure')) {
        themeClass.value = 'einsure'
      } else if (newPath.includes('moji')) {
        themeClass.value = 'moji'
      } else {
        themeClass.value = 'default'
      }
    },
    { immediate: true }
  )
  return themeClass;
}

export const setThemeVariables = (theme) => {
  genRootcolor(theme)
}