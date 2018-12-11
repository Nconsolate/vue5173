<template>
<div class="form-box">
<div class="form-tit">
<p>5173 {{formtype}}
</p>
</div>
<div class="input-box" >
   <form action="" method="post">
  <div class="form-group">
   
    <label for="txtName" >用户名 </label>
    <input type="text" name="userName" maxlength="32" v-model="iptUser" placeholder="绑定手机/用户名">
  </div>
  <div class="form-group">
    <label for="txtPass" class="pwd_label">密码 </label>
    <input type="password" autocomplete="" v-model="iptPass" name="password" maxlength="20" placeholder="请输入密码">
    </div>
   
    <div class="btnbox">
      <p 
       class="submit-btn" disabled="disabled" 
       @click="loginget()"
    > {{formtype}}
    </p>
      <router-link tag="span" class="linkto" :to="topath">{{linktit}}</router-link>
    </div>
     </form>
  </div>
  </div>
</template>
<style lang="scss" scoped>
.form-box{
  width: 100%;
  flex: 1;
  overflow-y: scroll;
  background: #fff;
  .form-tit{
    border-bottom: 1px solid #c7c7cc;
    p {
      text-align:center;
      height: 1.1rem;
      line-height: 1.1rem;
      font-size: .36rem;
    }
  }
  .input-box {
    .form-group {
      width: 95%;
      height: 1rem;
      line-height: 1rem;
      margin: 0 auto;
      font-size: .3rem;
      background: #f0f0f0;
      margin-top: .3rem;
      position: relative;
      label {
        float: left;
        width: 25%;
        display: block;
        text-indent: .4rem;
      }
      input {
        float: left;
        height: 1rem;
        line-height: 1rem;
        width: 75%;
        border: 0;
        margin: 0 auto;
        display: block;
        outline: 0;
        background: #f0f0f0;
        font-size: .4rem;
        box-shadow: none;
        outline: 0;
      }
    }
    .btnbox {
      width: 95%;
      margin: 0 auto;
      margin-top: .5rem;
      position: relative;
      
      .linkto{
        position: absolute;
        bottom:-.7rem;
        right:0;
        color:red;
        font-size: .3rem;
      }
      .submit-btn {
        display: block;
        width: 100%;
        height: 1 rem;
        text-align:center;
        font-size: .4rem;
        line-height: 1rem;
        letter-spacing: 3px;
        outline: 0;
        color: #fff;
        background-color: #f60;
        border: 0;
      }
    }
  }
}
</style>
<script> 
export default {
    name:'logreg',
  data() {
    return {
      iptUser: '',
        iptPass: '',
    }
  },
   methods: {
        loginget(){
            // this.$http.get('登录接口',{
            //       params: {
            //         phone:this.iptUser,
            //         password:this.iptPass
            //             }
            // }).then( res => {
            //       console.log(res)
            //       // 设置cookie
            //       // 跳回原页面
            //             })
                },
                regget(){
            // this.$http.get('注册接口',{
            //       params: {
            //         phone:this.iptUser,
            //         password:this.iptPass
            //             }
            // }) .then( res => {
            //    //  console.log(res.msg);
            //        console.log(res);
            //       // 注册成功 跳回原页面 

            //             })
                },
            },
  watch: {
    $route: {
      immediate: true,
      handler: function (to) {
        let path=to.path;
        if (/login/.test(path)) {
          this.formtype="登录";
          this.topath='/reg';
          this.linktit="还没有账号？去注册";
          this.methodsk=1;
        }
        if (/reg/.test(path)) {
          this.formtype="注册";
          this.topath='/login';
           this.linktit="已有账号？去登录";
             this.methodsk=0;
        }
      }
    }
  }
}
</script>