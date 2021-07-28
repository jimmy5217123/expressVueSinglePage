import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import cookies from 'vue-cookies'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memberInfo: ''
  },
  mutations: {
    MEMBER_STATUS (state, payload) {
      state.memberInfo = payload
    }
  },
  actions: {
    async memlogin ({ state }, account) {
      const member = await axios.post('/login',
        {
          account: account.account,
          password: account.password
        })
      if (member.data) {
        state.memberInfo = member.data
        cookies.set('memberInfo', state.memberInfo)
        alert('success')
        router.push({
          path: '/product'
        }).catch(() => {})
      } else {
        alert('no data')
      }
    }
  },
  modules: {
  }
})
