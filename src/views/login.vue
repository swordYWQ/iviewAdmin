<template>
  <div class="login-page">
    <div class="login-form">
      <div class="login-header">权限管理平台</div>
      <div class="login-body">
        <Input class="input-item" @on-enter="focusToPWD" autofocus>
        <Icon slot="prepend" type="android-person"></Icon>
        </Input>
        <Input ref="pwd" class="input-item" @on-enter="login" type="password">
        <Icon slot="prepend" type="locked"></Icon>
        </Input>
      </div>
      <div class="login-footer">
        <Button type="primary" @click="login" long>登录</Button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'login',
  data(){
    return {
      username:'',
      password:''
    }
  },
  methods:{
    focusToPWD(){
      this.$refs.pwd.focus();
    },
    login(){
      this.$router.push('/userManage');
    }
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100%;
  background-image: url('../assets/images/back.png');
  background-size: 100% 100%;
  .login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 200px;
    background-color: rgba(255, 255, 255, 0.3);
    border: 1px solid #f0f2ed;
    border-radius: 5px;
    padding: 10px 30px;
    .login-header {
      font-size: 20px;
      font-weight: bold;
      color: #FFF;
      text-align: center;
      margin-bottom: 20px;
    }
    .login-body {
      margin-bottom: 20px;
      .input-item {
        margin-bottom: 10px;
      }
    }
    .login-footer {
      margin-bottom: 20px;
    }
  }
}
</style>
