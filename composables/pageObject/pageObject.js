import useHttp from '~/composables/useHttp';
import { useFetch } from 'nuxt/app'

export const getAlt = (url) => {
  // 將網址以斜線拆分成陣列
  const urlParts = url.split('/');
  // 取得陣列中最後一個值，即檔名
  const fileName = urlParts[urlParts.length - 1];
  // 去除副檔名
  const alt = fileName.slice(0, fileName.lastIndexOf('.'));
  return alt;
};

export const fetchPageObject = async (route) => {

  try {
    const { data: pageObject } = await useAsyncData('pageObject', async () => {
      const res = await useHttp.post('/page', { route });
      // console.log(`await usehttp:`, res)
      return res
    })
    
    if (pageObject.value && pageObject.value.bannerImage) {
      pageObject.value.bannerImage = pageObject.value.bannerImage.map(e => ({
        ...e,
        alt: getAlt(e.src),
        rwdAlt: getAlt(e.rwdSrc)
      }))
    }
    // console.log(`covert pageobject:`, pageObject)
    return { ...pageObject.value } // 確保返回 pageObjectData 和 error
  } catch (error) {
    console.log(`err: `, error)
  }
  
};