<template>
  <div>
      aaaaaaaaaaaaaa
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
// import axios from 'axios'
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
      memSetOrder: []
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
    ])
  },
  async mounted () {
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
