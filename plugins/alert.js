import Swal from 'sweetalert2'

export default defineNuxtPlugin((nuxtApp) => {
  const warning = (msg, detail) => {
    Swal.fire({
      title: msg,
      text: detail,
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonColor: '#348D91',
      confirmButtonText: '確定'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.location.href = 'https://www.piapp.com.tw/app/download?type=close_webview'
      }
      window.location.href = 'https://www.piapp.com.tw/app/download?type=close_webview'
    })
  }
  nuxtApp.provide('warning', warning)

  const fail = (msg, detail) => {
    Swal.fire({
      title: `<h3 style="word-break: break-word;">${msg}<h3>`,
      text: detail,
      icon: 'error',
      showConfirmButton: true,
      confirmButtonColor: '#1DA7FC'
    })
  }
  nuxtApp.provide('fail', fail)

  const success = (msg, detail) => {
    Swal.fire({
      title: msg,
      text: detail,
      icon: 'success',
      showConfirmButton: true,
      confirmButtonColor: '#1DA7FC'
    })
  }
  nuxtApp.provide('success', success)
})

