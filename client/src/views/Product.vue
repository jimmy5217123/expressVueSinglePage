<template>
  <div>
    <div style="width">
      <h2>bangTon</h2>
    </div>
    <div class="flexbox">
      <div v-for="(i, idx) in setProduct.data" :key="idx">
        <h3 style="margin:0">{{i.setName}}</h3>
        <img :src="i.setImage" style="width:200px; height:180px">
        <div>數量: <input name="setHowMany" :value="0" type="number"></div>
        <div style="margin-top:10px">
          <button @click="plusInSaleCar(idx)">加入購物車</button>
        </div>
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
    plusInSaleCar (idx) {
      const num = document.getElementsByName('setHowMany')[idx].value
      console.log(num)
    }
  },
  async mounted () {
    this.setProduct = await axios.post('/getSetProduct')
    this.singleProduct = await axios.post('/getSingleProduct')
    this.otherProduct = await axios.post('/getOtherProduct')
    const joinTest = await axios.post('/joinTest')
    console.log(this.setProduct)
    console.log(joinTest)
  }
}
</script>

<style scoped>
  .flexbox{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* max-width: 1400px; */
    /* margin: 0 auto; */
  }
  .flexbox > div {
    /* margin: 10px; */
    width: 250px;
  }
</style>
