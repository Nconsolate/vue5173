<template>
<ul class='tab-nav'>
    <li :class={active:$store.state[sk]} @click="mNav(sk);"><i class="fa fa-mobile-phone" ></i><span>热门手游</span></li>
    <li :class={active:!$store.state[sk]} @click="pcNav(sk);"><i class="fa fa-laptop" ></i><span>热门端游</span></li>
</ul>
</template>
<script>
import {mapActions} from 'vuex';
export default {
     name:'SelectNavHead',
    
      methods:mapActions([
      'mNav','pcNav'
    ]),
     watch:{
    $route:{
      immediate:true,
      handler: function (to){
        let path=to.path;

        if(/home/.test(path)){
            this.sk='hsk';
        }
        
        if(/mybuy/.test(path)){
            this.sk='m1sk';
        }
        if(/mysale/.test(path)){
            this.sk='m2sk';
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-nav{
    width: 100%;
    height: 1.2rem;
    text-align: center;
    background: #f8f8f8;
    .active{
       background:#fff;
        color:#fc0;
        border-color: #fff;
   }
    li{
        box-sizing: border-box;
        width:50%;
        height: 100%;
        border:#ccc solid 1px;
        border-radius: 0 0 2% 2%;
        border-top:none;
        float:left;
         vertical-align: middle;
        i{ 
            font-size: .6rem; 
            vertical-align: middle;      
    }
     span{ 
                margin-left: 5%;
                font-size: .3rem;
                vertical-align: middle;}
        }
}
</style>


