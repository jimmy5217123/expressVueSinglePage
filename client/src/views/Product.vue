<template>
  <div>
    <div class="containter">
      <div class="width" style="display:flex">
        <!-- <h2>bangTon</h2> -->
        <!-- <button @click="formOpen = !formOpen">上架便當</button> -->
      </div>
      <div style="display: flex;flex-wrap: wrap;">
        <div v-for="(i, idx) in setProduct.data" :key="idx" style="width:50%; min-width:350px">
          <div class="titleBoder"><h3 style="margin-bottom:0px">{{i.setName}} ${{i.setPrice}}</h3></div>
          <div style="display:flex;">
            <img :src="i.setImage" width="150px;" height="160px">
            <div style="padding:10px; width:100%">
              <div class="infoClass"><p>{{i.setInfo}}</p></div>
              <div style="text-align:right; margin-right:15px">
                <input style="width:30px; margin-right:5px" min="1" type='number' name="setHowMany" :value="1" onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')">
                <button @click="insertShopCart(i.setId, idx)">加入購物車</button>
              </div>
            </div>
            <!-- <div style="margin-top:10px">
              <button @click="insertShopCart(i.setId, idx)">加入購物車</button>
            </div> -->
          </div>
        </div>
        <div style="width:50%; min-width:350px; text-align:center;margin-top:20px">
            <button @click="formOpen = true">上架便當</button>
        </div>
      </div>
      <!-- <div class="flexbox"> //test
        <div v-for="(i, idx) in setProduct.data" :key="idx">
          <div class="borderBox">
            <h3 style="margin:0">{{i.setName}}</h3>
            <img :src="i.setImage" style="width:200px; height:180px">
            <h3>$ {{i.setPrice}}</h3>
            <div>數量: <input type='number' name="setHowMany" :value="0" onkeyup="value=value.replace(/^(0+)|[^\d]+/g,'')"></div>
            <div style="margin-top:10px">
              <button @click="insertShopCart(i.setId, idx)">加入購物車</button>
            </div>
          </div>
        </div>
        <div>
            <button @click="formOpen = true" style="margin-top:40%">上架便當</button>
        </div>
      </div> -->
        <div class="upDateForm" v-if="formOpen">
          <div style="text-align:end">
            <button @click="formOpen = false" style="margin-right:2px; margin-top:2px; background:red">X</button>
          </div>
          <div class="formStyle">
            <!-- <h2>上架</h2> -->
            <form id='myForm' enctype="multipart/form-data">
              <div class="formDiv">
                <label for="bangTonName">便當名稱:</label>
                <input type="text" name="bangTonName" id="bangTonName">
              </div>
              <div class="formDiv">
                <label for="bangTonPrice">便當價格:</label>
                <input type="number" min="1" name="bangTonPrice" id="bangTonPrice" onkeypress='return event.charCode >= 48 && event.charCode <= 57'>
              </div>
              <div class="formDiv">
                <label for="bangTonInfo">便當資訊:</label>
                <div>
                  <textarea id="bangTonInfo" name="bangTonInfo" rows="4" cols="40"></textarea>
                </div>
                <!-- <input type="text" name="bangTonInfo" id="bangTonInfo"> -->
              </div>
              <div class="formDiv">
                <!-- <label for="imgFile">上傳圖片:</label> -->
                <input id="imgFile" name="imgFile" type='file'  accept="image/*" @change="loadImgFile">
              </div>
            </form>
            <img id='upImg' width="200px" height="180px" style="border: 2px solid #555;">
            <div style="margin:10px;">
              <button @click="upLoadForm">上架</button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import axios from 'axios'
import router from '../router'
import cookies from 'vue-cookies'
export default {
  components: {
  },
  data () {
    return {
      // setProduct: '',
      singleProduct: '',
      otherProduct: '',
      uploadImg: '',
      formOpen: false,
      memSetOrder: []
    }
  },
  computed: {
    ...mapState([
      'memberInfo',
      'shopCart',
      'setProduct'
    ])
  },
  methods: {
    ...mapMutations([
      'SHOP_CART'
    ]),
    ...mapActions([
      'getSetProduct',
      'getShopCart'
    ]),
    sleep (ms) {
      return new Promise((resolve) => {
        setTimeout(resolve, ms)
      })
    },
    async insertShopCart (id, idx) {
      const num = document.getElementsByName('setHowMany')[idx].value
      const setId = id
      if (this.shopCart.find(x => x.cartSetId === setId)) {
        const token = cookies.get('testToken')
        const dataBaseNum = this.shopCart.find(x => x.cartSetId === setId)
        const updateShop = await axios.put('api/updateCart',
          {
            setId,
            num: Number(num) + Number(dataBaseNum.carSetAmount),
            memId: this.memberInfo.memId
          },
          {
            headers: { authorization: `bearer ${token}` }
          })
        if (updateShop.data.code === 200) {
          this.getShopCart()
        }
      } else {
        const token = cookies.get('testToken')
        const insertShop = await axios.post('api/insertCart',
          {
            setId,
            num,
            memId: this.memberInfo.memId
          },
          {
            headers: { authorization: `bearer ${token}` }
          })
        if (insertShop.data.code === 200) {
          this.getShopCart()
        }
      }
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
      const token = cookies.get('testToken')
      const myForm = document.getElementById('myForm')
      const formData = new FormData(myForm)
      const upDate = await axios.post('api/upload', formData, {
        headers: { authorization: `bearer ${token}` }
      })
      console.log(upDate)
      if (upDate.data.code === 200) {
        await this.sleep(300)
        this.getSetProduct()
      }
      this.formOpen = false
    },
    async getMemberOrder () {
      const memSetOrder = await axios.post('api/getMemOrder')
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
    if (!cookies.get('memberInfo')) {
      router.push({
        path: '/'
      }).catch(() => {})
    }
    if (!this.setProduct.data) {
      this.getSetProduct()
      this.getShopCart()
    }
  }
}
</script>

<style lang="scss" scoped>
  .titleBoder {
    border-left: 2px solid rgb(29, 93, 149);
    padding-left: 5px;
  }
  .infoClass {
    max-height: 120px;
    min-height: 100px;
    overflow:hidden;
    text-overflow: ellipsis;
  }
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
    .borderBox{
      // border: 2px solid #61775b;
      max-width: 220px;
      margin: 0 auto;
      border-radius: 5px;
      padding: 5px;
      // box-shadow: 2px 2px 2px rgb(214, 152, 38);
      background: rgba(88, 219, 169, 0.5);
      box-shadow: 2px 2px 5px #4f5f46;
    }
    h3 {
      margin: 0;
      padding: 0;
    }
    /* max-width: 1400px; */
    /* margin: 0 auto; */
  }
  .flexbox > div {
    /* margin: 10px; */
    min-width: 220px;
    // width: 25%;
    min-height: 326.4px;
    width: 20%;
    margin: 15px 2%;
    // border: 2px solid rgb(126, 161, 194);
    box-sizing: border-box;
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
    // background: #ade99f;
    background: #e5f0d8;
    border-radius: 15px;
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
        margin-left: 5px;
        // width: 100%;
        text-align: center !important;
      }
    }
  }
  button {
    background-color: #9bb976; /* Green */
    border: none;
    color: white;
    padding: 5px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 700;
    &:hover{
      background: red;
    }
  }
  @media only screen and (max-width:576px) {
    .flexbox{
      justify-content: center !important;
    }
  }
</style>
