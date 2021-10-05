'use strict'

import axios from 'axios'
import router from '../router'
import cookies from 'vue-cookies'
import store from '../store/index'

axios.interceptors.response.use(config => {
  return config
}, async error => {
  try {
    console.log('error obj in axios interceptor response', error)
    if (error.response.status && error.response.status === 401) {
      cookies.remove('memberInfo')
      store.commit('MEMBER_STATUS', null)
      router.push({
        path: '/'
      }).catch(() => {})
      window.location.reload()
    }
  } catch (err) {
    console.log('catch error in axios interceptors response', err)
  }
})

export default axios
