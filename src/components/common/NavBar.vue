<template>
<div class="head-box">
<nav>
     <img :src='logo' alt="">
    
       <div class="nav-right">
           <i class="fa fa-tv">
               <span>电脑版</span>
               </i>  
       </div>
</nav>
</div>
</template>
<script>
import imglogo from '../../assets/img/logo.png';
export default {
  name: "Head",
  data() {
    return { logo: imglogo };
  }
};
</script>

<style lang="scss" scoped>
.head-box {
  width: 100%;
  height: 0.9rem;
  padding: 0.05rem 0;
  background-color: #f60;
  color: #eee;
  nav {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content:space-between;
    overflow: hidden;
    z-index: 10;
      img {
        width: 1.8rem;
        margin-left: .05rem;
        height: 0.8rem;
        display: inline-block;
      }  
    .nav-right {
      float: right;
      position: relative;
      width: 1rem;
      height: 100%;
      i {
        width: 100%;
        height: 100%;
        vertical-align: top;
        font-size: 0.5rem;
        span {
          width: 100%;
          display: block;
          margin-top: 0.05rem;
          font-size: 0.2rem;
        }
      }
    }
  }
}
</style>

