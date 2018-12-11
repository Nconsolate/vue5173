<template>
  <div class="user">
    <div class="user-tit">
      <p>个人中心</p>
    </div>
    <div class="user-my"><img src="https://m.5173.com/images/Icon/tx_nologin.png" alt="">
     <!-- 根据cookie是否存在 使用 v-if='cookieState'决定显示用户名和退出 还是登陆/注册 -->
      <router-link class="user-log" tag="div" to="/login"><span class="span-txt">登录/注册</span><span class="fa fa-angle-right"></span></router-link>
    </div>
    <div class="user-bs">
      <router-link class="user-buy" tag="div" to="/mybuy"><span class="fa fa-download"></span><span class="span-txt">我是买家</span><span
          class="fa fa-angle-right"></span></router-link>
      <router-link class="user-sale" tag="div" to="/mysale"><span class="fa fa-upload"></span><span class="span-txt">我是卖家</span><span
          class="fa fa-angle-right"></span></router-link>
    </div>
    <div class="user-myother">
      <router-link class="user-fav" tag="div" to="/fav"><span class="fa fa-star"></span><span class="span-txt">我的收藏</span><span
          class="fa fa-angle-right"></span></router-link>
      <router-link class="user-history" tag="div" to="/history"><span class="fa fa-history"></span><span class="span-txt">浏览记录</span><span
          class="fa fa-angle-right"></span></router-link>
      <router-link class="user-redp" tag="div" to="/redp"><span class="fa fa-money"></span><span class="span-txt">我的红包</span><span
          class="fa fa-angle-right"></span></router-link>
          <router-link class="user-wow" tag="div" to="/wow"><span class="fa fa-rocket"></span><span class="span-txt">我的代练</span><span
          class="fa fa-angle-right"></span></router-link>
    </div>
     <div class="user-service">
          <router-link class="user-service-center" tag="div" to="/service"><span class="fa fa-qq"></span><span class="span-txt">客服中心</span><span
          class="fa fa-angle-right"></span></router-link>
     </div>
  </div>
</template>
<style lang="scss" scoped>
  .user {
    width: 100%;
    flex: 1;
    overflow-y: scroll;

    .fa {
      width: .5rem;
      font-size: .5rem;
    }

    .fa.fa-angle-right {
      color: #ccc;
      text-align: right;
    }

    .span-txt {
      flex: 1;
      font-size: .32rem;
      margin-left: .2rem;
      color: #000;
    }

    .user-buy,
    .user-sale,
    .user-fav,
    .user-history,
    .user-redp,
    .user-wow,
    .user-service-center
    {
      background: #fff;
      padding: 0 .3rem;
      display: flex;
      height: 1.1rem;
      align-items: center;
    }

    .user-tit {
      background: #f6f6f6;
      margin-bottom: 1px;

      p {
        text-align: center;
        height: 1.1rem;
        line-height: 1.1rem;
        font-size: .36rem;
      }
    }

    .user-my {
      padding: .3rem;
      display: flex;
      background: #fff;
      margin-bottom: .2rem;

      img {
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 50%;
      }

      .user-log {
        flex: 1;
        display: flex;

        span {
          display: inline-block;
          height: 1.3rem;
          line-height: 1.3rem;
        }
      }

    }

    .user-bs {
      margin-bottom: .2rem;
      .user-buy {
        .fa.fa-download {
          color: #3abcf0;
        }
        margin-bottom: .03rem;
      }

      .user-sale {
        .fa.fa-upload {
          color: #ff7866;
        }
      }
    }

    .user-myother {
      margin-bottom: .2rem;
      .user-fav {
        .fa.fa-star {
          color: #ff9f15;
        }
        margin-bottom: .03rem;
      }
      .user-history {
        .fa.fa-history {
          color: #55c88f;
        } 
         margin-bottom: .03rem;
      }
      .user-redp {
        .fa.fa-money {
          color:#f23c3c;
        } 
        margin-bottom: .03rem;
      }
      .user-wow {
        .fa.fa-rocket{
          color:#7c7cff;
        } 
      }
    }

 .user-service {
      margin-bottom: .2rem;
      .user-service-center{
        .fa.fa-qq {
          color: #3abcf0;
        }
      }
  }
  }

</style>
<script>
  export default {
     
        data(){
        return{
        cookieState:false,
        }
     },


 created(){
         this.cookieBool()
     },
     methods:{
     cookieBool(){
            //if(cookie存在) this.cookieState=true
            //else    this.cookieState=false
     },
     clearcookie(){
      //  清除用户信息cookie
      // this.cookieState=false
     }  
     }

  }

</script>
