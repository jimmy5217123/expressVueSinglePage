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
        <form>
          圖片:<input id="imgFile" type='file'  accept="image/*" @change="loadImgFile">
        </form>
        <img id='upImg' width="200px" height="180px">
        <button @click="postImage">上傳</button>
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
    async postImage () {
      const formData = new FormData()
      const file = document.getElementById('imgFile')
      formData.append('file', file.files[0])
      const sss = await axios.post('/upload', formData)
      console.log(sss)
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
