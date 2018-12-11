<template>
<div class="foot-box">
<ul class="foot-tab">
    <router-link
        tag="li"
        active-class="active"
        to="/home">
        <i class="fa fa-home">
            <span>主页</span>
            </i>
    </router-link>
    <router-link 
        tag="li"
        active-class="active"
        to="/mybuy">
        <i class="fa fa-shopping-cart">
            <span>我要买</span>
            </i>
    </router-link>
    <router-link
        tag="li"
        active-class="active"
        to="/mysale"
    >
        <i class="fa fa-shopping-basket">
            <span>我要卖</span>
            </i>
    </router-link>
    <router-link
        tag="li"
        active-class="active"
        to="/msg"
    >
        <i class="fa fa-wechat">
            <span>消息</span>
            </i>
     </router-link> 
    <router-link
     tag="li"
        active-class="active"
        to="/user"
    >
        <i class="fa fa-user-o">
            <span>我的</span>
            </i>
    </router-link>
</ul>
</div>
</template>
<script>
export default {
  name: "Foot",
  data() {
    return { logo: "/static/img/logo.png" };
  }
};
</script>

<style lang="scss" scoped>
    .foot-box {
    width: 100%;
    height: 1rem;
    background-color: #fcfcfc;
    border-top: 0.01rem solid #e8e8e8;
        ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color:#5f646e;
            li{ 
                height: 90%;
                
               
                    i { 
                        margin-top: .1rem;
                        vertical-align: top;
                        font-size: 0.5rem;
                        span {
                            width: 100%;
                            display: block;
                            margin-top: 10%;
                            text-align: center;
                            font-size: 0.2rem;
                            }
                    }
        }       }
}
</style>

