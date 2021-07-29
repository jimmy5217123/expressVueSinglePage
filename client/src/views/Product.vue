<template>
  <div>
    <div class="containter">
      <div class="width" style="display:flex">
        <h2>bangTon</h2>
        <button @click="formOpen = !formOpen">上架便當</button>
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
        <div class="upDateForm" v-if="formOpen">
          <div class="formStyle">
            <h2>上架</h2>
            <form id='myForm' enctype="multipart/form-data">
              <div class="formDiv">
                <label for="bangTonName">bangTonName:</label>
                <input type="text" name="bangTonName" id="bangTonName">
              </div>
              <div class="formDiv">
                <label for="bangTonPrice">bangTonPrice:</label>
                <input type="text" name="bangTonPrice" id="bangTonPrice">
              </div>
              <div class="formDiv">
                <label for="imgFile">uploadfile:</label>
                <input id="imgFile" name="imgFile" type='file'  accept="image/*" @change="loadImgFile">
              </div>
            </form>
            <img id='upImg' width="150px" height="150px" style="border: 5px solid #555;">
            <div>
              <button @click="upLoadForm">上架</button>
            </div>
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
      uploadImg: '',
      formOpen: false,
      memSetOrder: []
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
      const upDate = await axios.post('/upload', formData)
      if (upDate.data.code === 200) {
        this.setProduct = await axios.post('/getSetProduct')
      }
      this.formOpen = false
    },
    async getMemberOrder () {
      const memSetOrder = await axios.post('/getMemOrder')
      if (memSetOrder.data) {
        const array = []
        memSetOrder.data.forEach(x => {
          const obj = this.setProduct.data.find(y => y.setId === x.setoId)
          array.push(obj)
        })
        this.memSetOrder = array
      }
    }
  },
  async mounted () {
    this.setProduct = await axios.post('/getSetProduct')
    this.getMemberOrder()
    // this.singleProduct = await axios.post('/getSingleProduct')
    // this.otherProduct = await axios.post('/getOtherProduct')
    // console.log(this.setProduct)
    // console.log(joinTest)
  }
}
</script>

<style lang="scss" scoped>
  .containter{
    // position: relative;
    // width: 95%;
    margin-right: 3%;
    margin-left: 3%;
    // margin: 0 5%;
    // /* box-sizing: border-box; */
  }
  .flexbox{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    text-align: center;
    /* max-width: 1400px; */
    /* margin: 0 auto; */
  }
  .flexbox > div {
    /* margin: 10px; */
    min-width: 250px;
    width: 16%;
  }
  .width {
    justify-content: center;
    align-items: center;
    button {
      margin-left: 10px;
      height: 30px;
      background: cornflowerblue;
      color: aliceblue;
      cursor: pointer;
    }
  }
  .upDateForm{
    position: fixed;
    width: 350px;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ade99f;
    .formStyle{
      text-align: center;
      .formDiv {
        margin: 15px;
        #imgFile {
          text-align: center !important;
          margin:5px 25%;
        }
      }
      input {
        margin-top: 5px;
        width: 100%;
        text-align: center !important;
      }
    }
  }
  @media only screen and (max-width:576px) {
    .flexbox{
      justify-content: center !important;
    }
  }
</style>
