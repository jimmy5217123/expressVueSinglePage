<template>
  <div id="app">
    <div class="orderBox" v-if="showOrder">
      <div v-for="i in shopCartNameArray" :key="i">
        {{i.setName}}
      </div>
    </div>
    <div style="height:50px"></div>
    <div id="nav" v-if="memberInfo">
      <p class="navMargin" @click="showOrder = !showOrder">購物車</p>
      <img id='memImg' :src="memberInfo.memImage" height="40px" width="40px" style="margin-left:5px">
      <p class="navMargin" @click="loginOut">{{memberInfo.memName}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import router from './router'
import cookies from 'vue-cookies'
export default {
  components: {
  },
  data () {
    return {
      showOrder: false,
      shopCartNameArray: []
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
      'MEMBER_STATUS',
      'SET_PRODUCT'
    ]),
    loginOut () {
      cookies.remove('memberInfo')
      this.MEMBER_STATUS(null)
      router.push({
        path: '/'
      }).catch(() => {})
    },
    shopCartData () {
      const array = []
      this.shopCart.forEach(x => {
        const obj = this.setProduct.data.find(y => y.setId === x.cartSetId)
        array.push(obj)
      })
      this.shopCartNameArray = array
      console.log(this.shopCart)
      console.log(this.setProduct.data)
      console.log(this.shopCartNameArray)
    }
  },
  async mounted () {
    if (cookies.get('memberInfo')) {
      const memberInfo = cookies.get('memberInfo')
      this.MEMBER_STATUS(memberInfo)
    }
    this.SET_PRODUCT(await axios.post('/getSetProduct'))
    this.shopCartData()
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  position: fixed;
  top:0px;
  width: 100%;
  display: flex;
  padding: 5px;
  background: #2c3e50;
  justify-content: flex-end;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav p {
  margin: 0px;
  padding: 0px;
  color: aliceblue;
}
.navMargin {
  margin: 0px 10px !important;
}
.orderBox {
  position: fixed;
  top: 50px;
  right:0px;
  width: 350px;
  height: 100%;
  background: green;
  opacity: 0.7;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
