import useHttp from '~/composables/useHttp';

export const getNewsList = async () => {
  try {
    const response = await useHttp.get('/news/list'); // 獲取新聞列表
    if (response && response.result) {
      return response.result; // 返回新聞列表
    } else {
      throw new Error('No data found'); // 處理沒有數據的情況
    }
  } catch (error) {
    console.error('Error fetching news list:', error); // 錯誤處理
    return null; // 返回 null 或者可以根據需要返回一個空數組
  }
};