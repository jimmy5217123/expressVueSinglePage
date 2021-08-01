import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'
import cookies from 'vue-cookies'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    memberInfo: '',
    shopCart: [],
    setProduct: [],
    shopCartArray: [],
    detailShopChart: []
  },
  mutations: {
    MEMBER_STATUS (state, payload) {
      state.memberInfo = payload
    },
    SHOP_CART (state, payload) {
      state.shopCart = payload
    },
    SET_PRODUCT (state, payload) {
      state.setProduct = payload
    },
    DETAIL_SHOP_CHART (state, payload) {
      state.detailShopChart = payload
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
    },
    async getSetProduct ({ commit }) {
      const setProduct = await axios.post('/getSetProduct')
      commit('SET_PRODUCT', setProduct)
    },
    async getShopCart ({ state, commit }) {
      const shopCart = await axios.post('/getShopCart', {
        memId: state.memberInfo.memId
      })
      commit('SHOP_CART', shopCart.data)
      const detailShopChart = await axios.post('/getdetailShopChart', {
        memId: state.memberInfo.memId
      })
      commit('DETAIL_SHOP_CHART', detailShopChart.data)
    }
  },
  modules: {
  }
})
