<template>
  <div>
    <div style="display:flex">
      <div v-for="(i, idx) in setProduct.data" :key="idx" style="width:250px">
        <h3>{{i.setName}}</h3>
        <img :src="i.setImage" style="width:200px" @click="aaa(i.setId)">
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {
  },
  data () {
    return {
      setProduct: '',
      singleProduct: '',
      otherProduct: ''
    }
  },
  computed: {
  },
  methods: {
    aaa (id) {
      console.log(id)
    }
  },
  async mounted () {
    this.setProduct = await axios.post('/getSetProduct')
    this.singleProduct = await axios.post('/getSingleProduct')
    this.otherProduct = await axios.post('/getOtherProduct')
    const joinTest = await axios.post('/joinTest')
    console.log(joinTest)
  }
}
</script>
