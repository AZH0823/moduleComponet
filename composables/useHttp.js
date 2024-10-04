// composables/useHttp.js
import { useRuntimeConfig } from '#app'
const handleError = (res)=>{
  console.log(res)
  try {
    const err = (text) => {
      // 全域彈窗
      const { $fail } = useNuxtApp()
      const handleConfirm = (msg) => {
        $fail(msg)
      }
      handleConfirm(text)
    }
    const handleMap = {
      404: () => err(`req status:${res.status} 資源不存在`),
      500: () => err(`req status:${res.status} 伺服器內部異常`),
      403: () => err(`req status:${res.status} 沒有權限訪問該資源`),
      401: () => {
      },
      400: () => err(`req status:${res.status} 請求語法的格式錯誤、請求訊息框架無效或欺騙性的請求路由`)
    }
    handleMap[res.status] ? handleMap[res.status]() : err('未知錯誤')
  } catch (error) {
    console.log(`handleError: `, error)
  }
}
const request = async (method, url, { params = {}, body = {} } = {}, option = {}) => {
  try {
    const config = useRuntimeConfig();
    const apiBase = config.public.apiBase;
    console.log(`test: ${apiBase}${url}`)
    const response = await $fetch(`${url}`, {
      method,
      params: method === 'GET' || method === 'DELETE' ? params : undefined,  // 只在 GET 和 DELETE 中使用 params
      body: method === 'POST' || method === 'PUT' ? body : undefined,
      // onRequest：在請求發送之前修改請求
      onRequest({ options }) {
        // 可以在這裡添加 headers，修改 URL 等
        options.params = paramsSerializer(options.params)
        options.baseURL = apiBase
        // const userStore = useUserStore()
        // if (!userStore.isLogin) { return }
        // options.headers = new Headers(options.headers)
        // options.headers.set('Authorization', `Bearer ${userStore.authToken}`)
        console.log('Request is about to be sent:', options);
      },
      // onRequestError：處理請求錯誤
      onRequestError({ request, options, error }) {
        // 請求錯誤時觸發，可以做錯誤處理
        console.warn('Request failed:', error);
      },
      // onResponse：處理響應
      onResponse: async({ response }) => {
        if (response.headers.get('content-disposition') && response.status === 200) { 
          return response
        } 
        
        const errorStatus = [400, 401, 403, 404, 500]
        if (errorStatus.includes(response.status)) {
          console.log(`40系列觸發`)
          handleError(response)
          return await Promise.reject(false)
        }
        return response._data
      },
      // 只在 POST 和 PUT 中使用 body
      // onResponseError：處理響應錯誤
      onResponseError({ response }) {
        // 響應錯誤時觸發，例如 4xx 或 5xx 錯誤
        console.warn('Response error with status:', response.status);
      },
      ...option
    });
    return response
  } catch (err) {
  }
};
// GET方法傳遞參數
const paramsSerializer = (params) => {
  if (!params) { return }

  const query = JSON.parse(JSON.stringify(params))
  Object.entries(query).forEach(([key, val]) => {
    if (typeof val === 'object' && Array.isArray(val) && val !== null) {
      query[`${key}[]`] = toRaw(val).map((v) => JSON.stringify(v))
      delete query[key]
    }
  })
  return query
}

// HTTP 方法封裝
const get = (url, params = {}, option = {}) => request('GET', url, { params }, option);
const post = (url, body = {}, option = {}) => request('POST', url, { body }, option);
const put = (url, body = {}, option = {}) => request('PUT', url, { body }, option);
const del = (url, params = {}, option = {}) => request('DELETE', url, { params }, option);

// 使用 default 導出
export default {
  get,
  post,
  put,
  del,
};