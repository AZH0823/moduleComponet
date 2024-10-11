<script setup> 
import { watch } from 'vue'
import { useThemeWatcher, setThemeVariables } from '~/composables/useTheme'

// 監聽路由變化，並根據路由設置主題
const themeClass = useThemeWatcher()

// 確保在組件掛載後操作 DOM
onMounted(() => {
  setThemeVariables(themeClass.value); // 初始化時設置主題
  watch(themeClass, (newTheme) => {
    setThemeVariables(newTheme) // 當主題變更時更新 DOM 中的變數
  });
})
</script>
<template>
  <div :class="[themeClass, 'layout background']">
    <div class="header background text-primary">header</div>
    <div class="main-content">
      <slot />
    </div>
    <div class="footer">
      footer
    </div>
  </div>
</template>

<style scoped>

.layout{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.main-content {
  flex: 1;
}
.header, .footer {
  flex-shrink: 0;
}
</style>
