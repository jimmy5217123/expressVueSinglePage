<template>
  <div>
      <div>
        <div v-for="(i, idx) in historyOrder" :key="idx" style="display:flex;">
          <img :src="i.setImage" width="100px">
          {{i.setName}} * {{i.setoAmount}}
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import axios from 'axios'
import router from '../router'
import cookies from 'vue-cookies'
export default {
  components: {
  },
  data () {
    return {
      // setProduct: '',
      singleProduct: '',
      otherProduct: '',
      uploadImg: '',
      formOpen: false,
      memSetOrder: [],
      historyOrder: []
    }
  },
  computed: {
    ...mapState([
      'memberInfo',
      'shopCart',
      'setProduct'
    ])
  },
  methods: {
    ...mapMutations([
      'SHOP_CART'
    ]),
    ...mapActions([
      'getSetProduct',
      'getShopCart'
    ]),
    async getHistoryOrder () {
      const token = cookies.get('testToken')
      const historyOrder = await axios.post('api/getHistoryOrder', {
        memId: this.memberInfo.memId
      },
      {
        headers: { authorization: `bearer ${token}` }
      })
      this.historyOrder = historyOrder.data
    }
  },
  async mounted () {
    await this.getHistoryOrder()
    if (!cookies.get('memberInfo')) {
      router.push({
        path: '/'
      }).catch(() => {})
    }
    if (!this.setProduct.data) {
      this.getShopCart()
    }
  }
}
</script>

<style>

</style>
