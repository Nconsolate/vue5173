<template>
 <div class="swiper-container">
    <div class="swiper-wrapper">
       <div class="swiper-slide"
                v-for = ' banner in banners '
                :key= ' banner.id '
            >
                <img :src=' banner.bannerImg ' alt="">           
    </div>
  </div>   
  </div> 
</template>
<script>

import Vue from 'vue'
import Swiper from 'swiper'
export default {
   name:'Swipe', 
  data(){
        return {
            banners: []
        }
    },
    created(){
      this.getBanners()
    },
    methods: {
        getBanners(){
        
            this.$http.get(`/api${ this.$api.BANNER}`)
                .then( res => {
                   this.banners = res.data.data;
                    Vue.nextTick( () => {
                        this.swiper = new Swiper('.swiper-container',{
                          autoplay: {
                             disableOnInteraction: false,
                            },
                        })
                   })
                })
        },


        
    },
    destroyed(){
        delete this.swiper
    }
}
</script>
<style lang="scss" scoped>
 .swiper-container{
        width: 100%;
        height: 3em;
       margin-bottom:.2rem;
        .swiper-slide{
            width:100%;height:100%;
            img{
                width:100%;height:100%;
            }
        }
    }
</style>
