<template>
<div style="height:calc(100vh - 50px)">
  <div class="main">
    <div class="title">
        <span>會員登入</span>
    </div>

    <div class="title-msg">
        <span>請輸入登入帳號和密碼</span>
    </div>

    <form class="login-form" >
        <div class="input-content">
            <div>
                <input type="text" v-model="account" placeholder="使用者名稱" v-on:keyup.enter="login()"/>
            </div>
            <div style="margin-top: 16px">
                <input type="password" v-model="password" placeholder="登入密碼" v-on:keyup.enter="login()"/>
            </div>
        </div>

        <div style="text-align: center">
            <button type="button" class="enter-btn" @click="login()">登入</button>
        </div>
        <!-- <div class="foor">
            <div class="left"><span>忘記密碼 ?</span></div>

            <div class="right"><span>註冊賬戶</span></div>
        </div> -->
    </form>
    </div>
</div>
</template>

<script>
// import axios from 'axios'
// import router from '../router'
import router from '../router'
import cookies from 'vue-cookies'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      account: 'f1020@gmail.com',
      password: 'a1234567A'
    }
  },
  methods: {
    ...mapActions([
      'memlogin'
    ]),
    login () {
      const obj = {
        account: this.account,
        password: this.password
      }
      this.memlogin(obj)
    }
  },
  computed: {
  },
  mounted () {
    if (cookies.get('memberInfo')) {
      router.push({
        path: '/product'
      }).catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
    // margin: 0 auto;
    box-sizing: border-box;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 15px;
    border-radius: 15px;
    width: 320px;
    height: 350px;
    background: #ade99f;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -170px;
    margin-left: -160px;
}

.title {
    width: 100%;
    height: 40px;
    line-height: 40px;
}

.title span {
    font-weight: 700;
    font-size: 26px;
    color: #353f42;
}

.title-msg {
    width: 100%;
    height: 64px;
    line-height: 64px;
}

.title:hover{
    cursor: default;
}

.title-msg:hover{
    cursor: default;
}

.title-msg span {
    font-size: 16px;
    color: #707472;
    font-weight: 700;
}

.input-content {
    width: 100%;
    height: 120px;
}

.input-content input {
    width: 100%;
    height: 40px;
    border: 1px solid #dad9d6;
    background: #ffffff;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    font-size: 14px;
    font-weight: 700;
}

.enter-btn {
    width: 100%;
    height: 40px;
    color: #fff;
    background: #0bc5de;
    line-height: 40px;
    text-align: center;
    border: 0px;
    font-weight: 700;
}

.foor{
    width: 100%;
    height: auto;
    color: #9b9c98;
    font-size: 16px;
    margin-top: 20px;
    font-weight: 700;
}

.enter-btn:hover {
    cursor:pointer;
    background: #1db5c9;
}

.foor div:hover {
    cursor:pointer;
    color: #484847;
    font-weight: 600;
}

</style>
