<template>
  <div>
      <div>
        <div v-for="(i, idx) in historyOrder" :key="idx" style="display:flex;">
          <div style="display:flex; align-items:center" class="orderBoxStyle">
            <div>
              <p>訂購時間: {{timeChange(i[0].orderTime)}}</p>
            </div>
            <div>
              <div v-for="(x, xindex) in i" :key="xindex">
                <div style="display:flex; align-items:center"><img :src="x.setImage" width="35px"><p>{{x.setName}} * {{x.setoAmount}}</p></div>
              </div>
            </div>
            <div>
              <p>訂單備註: {{i[0].orderRemark}}</p>
            </div>
            <div>
              <p>訂單價錢: {{i[0].orderTotalPrice}}元</p>
            </div>
            <div>
              <button>再次訂購</button>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import axios from 'axios'
import router from '../router'
import cookies from 'vue-cookies'
import { DateTime } from 'luxon'
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
    timeChange (str) {
      return DateTime.fromISO(str).toFormat('yyyy/MM/dd HH:mm:ss')
    },
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

<style lang="scss" scoped>
  button {
    background-color: #9bb976; /* Green */
    border: none;
    color: white;
    padding: 5px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    &:hover{
      background: red;
    }
  }
  p{
    margin: 0;
  }
  .orderBoxStyle{
    border-radius: 5px;
    margin: 15px;
    padding: 5px;
    width: 100%;
    border: 2px solid rgb(177, 179, 175);
  }
  .orderBoxStyle > div {
    width: 25%;
    /* margin-right: 50px; */
  }
</style>
