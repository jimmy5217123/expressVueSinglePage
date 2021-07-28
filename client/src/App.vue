<template>
  <div id="app">
    <div id="nav" v-if="memberInfo">
      <p>{{memberInfo.memName}}</p>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState } from 'vuex'
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
    ])
  },
  methods: {
  },
  async mounted () {
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
  padding: 20px;
  background: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav p {
  text-align: end;
  margin: 0px;
  padding: 0px;
  color: aliceblue;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
