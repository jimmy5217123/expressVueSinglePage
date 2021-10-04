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
      const member = await axios.post('api/login',
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
      const token = cookies.get('testToken')
      const setProduct = await axios.post('api/getSetProduct', {}, {
        headers: { authorization: `bearer ${token}` }
      })
      commit('SET_PRODUCT', setProduct)
    },
    async getShopCart ({ state, commit }) {
      const token = cookies.get('testToken')
      const shopCart = await axios.post('api/getShopCart', {
        memId: state.memberInfo.memId
      },
      {
        headers: { authorization: `bearer ${token}` }
      })
      commit('SHOP_CART', shopCart.data)
      const detailShopChart = await axios.post('api/getdetailShopChart', {
        memId: state.memberInfo.memId
      },
      {
        headers: { authorization: `bearer ${token}` }
      })
      commit('DETAIL_SHOP_CHART', detailShopChart.data)
    }
  },
  modules: {
  }
})
