<template>
  <div id="app">
    <div id="nav" v-if="memberInfo">
      <img id='memImg' src="" height="30px" width="30px">
      <p>{{memberInfo.memName}}</p>
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
    }
  },
  computed: {
    ...mapState([
      'memberInfo'
    ]),
    ...mapMutations([
      'MEMBER_STATUS'
    ])
  },
  methods: {
  },
  mounted () {
    if (cookies.get('memberInfo')) {
      this.MEMBER_STATUS(cookies.get('memberInfo'))
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
  padding: 15px;
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

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
