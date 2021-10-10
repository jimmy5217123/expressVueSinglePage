<template>
  <div id="app">
    <div class="orderBox" v-if="showOrder">
      <div class="shopChartFlexBox" v-for="(i,idx) in detailShopChart" :key="idx">
        <div>
          <img :src="i.setImage" width="150px" height="150px">
        </div>
        <div class="shopChartText">
          <p>{{i.setName}} * {{i.carSetAmount}}</p>
          <p>單價: {{i.setPrice}}</p>
          <p>總共: {{i.setPrice * i.carSetAmount}}</p>
        </div>
      </div>
    </div>
    <div style="height:50px"></div>
    <div id="nav" v-if="memberInfo">
      <router-link class="logo" to='/product'>
        <div style="display:flex; align-items:center"><img :src='logo' width="40px;" style="margin-right:5px">BangTon</div>
      </router-link>
      <div style="display:flex; align-items: center; margin-right:15px">
        <router-link class="navMargin moblieNot" to='/product'>產品</router-link>
        <router-link class="navMargin moblieNot" to='/historyorder'>歷史訂單</router-link>
        <p class="navMargin moblieNot" @click="showOrder = !showOrder">購物車</p>
        <img id='memImg' :src="memberInfo.memImage" height="40px" width="40px" style="margin-right:3px; border-radius:50%">
        <p class="navMargin" @click="loginOut">{{memberInfo.memName}}</p>
      </div>
    </div>
    <div class="moblieNav" v-if="memberInfo">
        <!-- <div style="display:flex; align-items: center; margin-right:15px;"> -->
          <div>
            <router-link class="navMargin" to='/product'>產品</router-link>
          </div>
          <div>
            <router-link class="navMargin" to='/historyorder'>歷史訂單</router-link>
          </div>
          <div>
            <p class="navMargin" @click="showOrder = !showOrder">購物車</p>
          </div>
        <!-- </div> -->
    </div>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState, mapMutations, mapActions } from 'vuex'
import router from './router'
import cookies from 'vue-cookies'
import logo from '../dist/images/bandon_include/setdo1.jpg'
export default {
  components: {
  },
  data () {
    return {
      logo,
      showOrder: false,
      shopCartNameArray: []
    }
  },
  computed: {
    ...mapState([
      'memberInfo',
      'shopCart',
      'setProduct',
      'detailShopChart'
    ])
  },
  methods: {
    ...mapMutations([
      'MEMBER_STATUS',
      'SET_PRODUCT',
      'SHOP_CART'
    ]),
    ...mapActions([
      'getSetProduct',
      'getShopCart'
    ]),
    loginOut () {
      cookies.remove('memberInfo')
      this.MEMBER_STATUS(null)
      router.push({
        path: '/'
      }).catch(() => {})
    }
  },
  async mounted () {
    if (cookies.get('memberInfo')) {
      const memberInfo = cookies.get('memberInfo')
      this.MEMBER_STATUS(memberInfo)
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif
  font-family: '微軟正黑體', Times, serif;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background: rgba(195, 238, 255, 0.15);
  min-height: 100vh;
}

#nav {
  position: fixed;
  top:0px;
  width: 100%;
  display: flex;
  padding: 5px;
  // background: #4c5849;
  background: #BAAD87;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid black;
  .logo{
    // justify-self: flex-start !important;
    // text-align: start;
    color: aliceblue !important;
    text-decoration:none;
    font-size: 22px;
    margin-right: auto;
    margin-left: 20px;
  }
}

#nav a {
  font-weight: bold;
  color: #503d2c;
}
#nav p {
  margin: 0px;
  padding: 0px;
  color: aliceblue;
  font-weight: 700;
}
.moblieNav {
  height: 50px;
  width: 100%;
  position: fixed;
  display: flex;
  display: none;
  bottom: 0px;
  background: #4c5849;
  justify-content: center;
  align-items: center;
  div {
    width: 100%;
    // height: 100%;
    align-items: center;
    text-align: center;
    border: 2px solid aquamarine;
  }
  .navMargin {
    margin: auto 25px !important;

    // border: ;
  }
}
.navMargin {
  // margin: 0px 10px !important;
  color: aliceblue !important;
  text-decoration:none;
  margin-right: 15px !important;
  cursor: pointer;
}
.orderBox {
  position: fixed;
  top: 50px;
  right:0px;
  width: 350px;
  height: calc(100% - 50px);
  // min-height: 100%;
  background: rgb(109, 197, 109);
  opacity: 0.9;
  overflow-y: auto;
  .shopChartFlexBox{
    display: flex;
    justify-content: center;
    background: cornsilk;
    margin: 15px;
    border: 2px solid springgreen;
  }
  .shopChartText{
    margin-left: 15px;
  }
}
#nav a.router-link-exact-active {
  color: #42b983;
}
@media only screen and (max-width:420px) {
  .moblieNav {
    display: flex !important;
  }
  .moblieNot {
    display: none !important;
  }
}
</style>
