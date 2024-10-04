const initState = {
  token: null, // PI Token
  authToken: '', // 登入Token
  isLogin: false, // 是否已登入
  expires_in: '', // 登入過期時間
  popup: false,
  data: {},
  member_id: 0,
  lineToken: '',
  registerAgree: false, // 註冊同意事項
  loginReturnRouter: { // 登入後轉跳網址
    path: '/',
    query: {}
  }
}
export const useUserStore = defineStore('user', {
  state: initState
})