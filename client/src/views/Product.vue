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
    <div style="width">
      <h2>bangTon上架</h2>
      <div>
        <form id='myForm' enctype="multipart/form-data">
          <div>
            <label for="imgFile">Upload file:</label>
            <input id="imgFile" name="imgFile" type='file'  accept="image/*" @change="loadImgFile">
          <!-- </div>
          <div> -->
            <label for="bangTonName">bangTonName:</label>
            <input type="text" name="bangTonName" id="bangTonName">
          </div>
        </form>
        <div>
          <img id='upImg' width="300px" height="250px" style="margin-top:20px">
          <button @click="upLoadForm" style="margin-left:10px">上架</button>
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
      otherProduct: '',
      uploadImg: ''
    }
  },
  computed: {
  },
  methods: {
    plusInSaleCar (idx) {
      const num = document.getElementsByName('setHowMany')[idx].value
      console.log(num)
    },
    loadImgFile (event) {
      for (let i = 0; i < event.target.files.length; i++) {
        const reader = new FileReader()
        const obj = {}
        reader.readAsDataURL(event.target.files[i])
        reader.onload = function () {
          obj.photoName = event.target.files[i].name
          obj.photoBase64 = reader.result.split(',')[1]
          obj.fileType = event.target.files[i].name.split('.')[1]
          document.getElementById('upImg').src = reader.result
        }
      }
    },
    async upLoadForm () {
      const myForm = document.getElementById('myForm')
      const formData = new FormData(myForm)
      await axios.post('/upload', formData)
      this.setProduct = await axios.post('/getSetProduct')
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
