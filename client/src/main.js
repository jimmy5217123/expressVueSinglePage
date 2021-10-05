import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import interceptors from './http'
import vueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(vueAxios, interceptors)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
