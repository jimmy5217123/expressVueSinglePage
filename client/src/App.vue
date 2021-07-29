<template>
  <div id="app">
    <div class="orderBox" v-if="showOrder">
      <!-- <div v-for=""> -->
      <!-- </div> -->
    </div>
    <div id="nav" v-if="memberInfo">
      <p class="navMargin" @click="showOrder = !showOrder">我的訂單</p>
      <img id='memImg' :src="memberInfo.memImage" height="40px" width="40px" style="margin-left:5px">
      <p class="navMargin">{{memberInfo.memName}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import cookies from 'vue-cookies'
export default {
  components: {
  },
  data () {
    return {
      showOrder: false
    }
  },
  computed: {
    ...mapState([
      'memberInfo'
    ])
  },
  methods: {
    ...mapMutations([
      'MEMBER_STATUS'
    ])
  },
  mounted () {
    if (cookies.get('memberInfo')) {
      const memberInfo = cookies.get('memberInfo')
      this.MEMBER_STATUS(memberInfo)
    }
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
