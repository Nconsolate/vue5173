<template>
 <div class="hot-top">
     <h1>热门推荐</h1>
     <div class='lists-box'>
        <router-link 
        tag='a' 
        v-for="list in topLists" :key="list.sort"
                :to=" '/home/' +'goodsList?id=hottest1'"
                href="#">
           
             <dl>
                 <dt><img :src="list.gameImage">
                    <div class="type-name">{{list.goodsTypeName}}</div>
                 </dt>
                 <dd>
                     <ul>
                         <li class="li-tit">{{list.gameName}}{{list.goodsTypeName}}</li>
                          <li class="li-sale">{{list.latestInformation}}<span class="fa fa-angle-right"></span></li>
                           <li class="li-reg">{{`${(list.goodsTypeName==="游戏币")?list.regionName+'/'+list.serverName:'全区全服'}`}}</li>
                     </ul>
                 </dd>
            </dl>
        </router-link>  
     </div>
</div>   
</template>
<script>
export default {
    name:'HotTop',
    data(){
        return {
              topLists: [],

        }
    },
     created(){
        this.getHotTop()
    },
   methods: {
         getHotTop(){        
          this.$http.get(`/api${this.$api.HOTTOP}`)
                .then( res => {
                   this.topLists = res.data.data
                })
        },       
    }
}

</script>
<style lang="scss" scoped>
.hot-top{
    background: #fff;
    font-size: .2rem;
    padding-top: .2rem;
    margin-bottom:.2rem;
    h1{
        font-size: .4rem;
        margin-bottom: .2rem;
        text-align: center;
    }
    .lists-box{ 
            width:100%;
            display: flex;
            justify-content:space-around;
            flex-direction: column;
            a {
                text-decoration: none;
                dl{
                    display: flex;
                    align-self: center;
                    justify-content: flex-start;
                    padding-bottom: .2rem;
                    border-bottom: 1px solid #ccc;
                    dt{
                       width:1.5rem;
                        height:1.5rem;
                        margin:.2rem;
                        position: relative;
                      
                         img{
                                width:100%;
                                height: 100%;
                                border-radius: 15%;
                             }
                        .type-name{
                                width: 100%;
                                 position: absolute;
                                 bottom: 0;
                                  text-align: center;
                                  color:#f8f8f8;
                                  background: rgba(0,0,0,.3);
                                   border-radius: 0 0 0.225rem 0.225rem;
                             }

                        }
                    dd{ flex: 1;
                        ul{
                                width:100%;
                                height: 100%;
                                display: flex;
                                 justify-content:space-around;
                                 align-items: flex-start;
                                flex-direction: column;
                                li{
                                    width:100%;
                                    text-align: left;
                                    }
                                .li-tit{
                                    font-size: .33rem;
                                    color:#000;
                                }
                                .li-sale{
                                    font-size: .3rem;
                                    color:#f60;
                                    span{
                                        float:right;
                                        margin-right: .45rem;
                                        font-size: .4rem;
                                        color:#666;
                                        
                                    }
                                }
                                  .li-reg{
                                    font-size: .27rem;
                                    color:#666;
                                }
                        }
                        }
                }
            }
    }
}
</style>
