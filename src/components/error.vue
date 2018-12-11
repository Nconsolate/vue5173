<template>
  <div class="error">
   <h1>404</h1>
    <img src="https://m.5173.com/images/err404-ico.png" alt="">
     <p>您访问的页面不存在,或者还在制作中哦.</p>
     <router-link
     tag="button"
     to="/home"
     >返回首页</router-link>
  </div>
</template>
<style lang="scss" scoped>
.error {
  width:100%;
  height:100%;
  background:#f1f1f1;
  text-align: center;

  img{
    margin-top: .5rem;
    width:100%;
  }
  p{
    font-size: .4rem;
  }
button{
  background:orange;
  color:#fff;
  font-size: .6rem;
  height:1.2rem;
  line-height: 1.2rem;
  margin-top: .4rem;
}
}
</style>

