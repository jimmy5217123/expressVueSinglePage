<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Product</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  async mounted () {
    // const setProduct = await axios.post('/getSetProduct')
    // const singleProduct = await axios.post('/getSingleProduct')
    // const otherProduct = await axios.post('/getOtherProduct')
    // console.log(setProduct, singleProduct, otherProduct)
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
