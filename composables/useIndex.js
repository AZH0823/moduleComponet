import { ref, onMounted } from 'vue' // 確保引入 ref 和 onMounted
import { fetchPageObject } from '~/composables/pageObject/pageObject.js'
import { getNewsList } from '~/composables/newlist/newlist.js'

export const usePageObject = async(route) => {
  const pageObject = ref(null) // 響應式變數，用於存儲頁面對象
  const newsList = ref(null) // 響應式變數，用於存儲新聞列表

  // 在 setup 中獲取數據
  const fetchData = async () => {
    try {
      // 獲取頁面對象
      const checkRoute = route.path.includes('moji') || route.path.includes('einsure') ? '/' : route.path 
      const res = await fetchPageObject(checkRoute)
      pageObject.value = res // 將頁面對象存儲到響應式變數中
    } catch (err) {
      console.log(`fetchData err:`, err)
    }
  }

  fetchData()

  // 在 beforeUnmount 中執行操作
  onMounted(async() => {
    // 在這裡執行需要在組件卸載之前的操作
     // 獲取新聞列表
    const newsData = await getNewsList();
    if (newsData) {
      newsList.value = newsData; // 將新聞列表存儲到響應式變數中
    }
  })
  return { pageObject, newsList } // 返回響應式變數
};