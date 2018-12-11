<template>
<div class="mybuy-box">
<SelectNavHead></SelectNavHead>
<div class="tab-body" >
    <div class="games-box"> 
        <router-link
         tag='dl'
         v-for="game in games" :key="game.id"
         :to=" '/mybuy/' +'goodsList?CategoryId='+game.catagoryId">
         <dt ><img :src="game.game_image_url"></dt><dd>{{game.name}}</dd>
         </router-link> 
         <div class="tomore" @click="pageNum++; postSelectNav()">
             <p >加载更多</p>  
         </div>
         </div>
         <div class="boxs">
             <ul class="game-py">
             <li 
              @click="firstPy(['m1',null]);isHot=['1']" 
              :class="{active:gamePy===null}"
              ><i class="fa fa-thumbs-up"
              ></i></li>
             <li
              v-for="py in pys" :key="py"  @click="firstPy(['m1',[py]]);isHot=null;pageNum=1"
              :class='{active:gamePy!==null&&gamePy[0]===py}'
              >{{py}}</li>
        </ul> 
        </div>

 </div>

</div>
   
</template>
<style lang="scss" scoped>

.active{
    color:#f60;
    background:#fff;
}
.mybuy-box{
    flex:1;
    overflow-y: scroll;
     background: #fff;
     .tab-body{
         position: relative;
      display: flex;
     
    .boxs{ width: .7rem; background: #fff;}
    .game-py{
        position:fixed;
        right:0;
        margin-top: -1.2rem;
        width: .7rem;
        height:80%;
        display: flex;
        justify-content:space-around; 
        flex-direction: column;
        background: #f1f1f1;
        li{
        width: 100%;
        height:4%;
        line-height: 100%;

        text-align: center;
        font-size: .2rem;
        
        }
       
    }
     .games-box{
     flex:1;
     height:auto;
     background: #fff;
     padding-bottom: .2rem;
     display: flex;
     align-content:flex-start;
     justify-content: flex-start;
     flex-wrap: wrap;
          dl{
         width:33%;
         padding:  0 .5rem;
         margin-top:0.2rem ;
         dt{
             width:100%;
             img{
                 width:1.5rem;
                 height:1.5rem;
                 border-radius: 15%;
             }
    
         }
         dd{
             margin-top: .2rem;
             text-align: center;
             font-size: .23rem;
             padding: 0% 5%;
             white-space: nowrap;
             overflow: hidden;
             width: 100%;
             text-overflow: ellipsis;
         }
     }
      .tomore{
        width: 100%;
        margin-top: .2rem;
        
         background: #fff;
         border-top: 0.02rem #ccc solid;
         text-align: center;
         p{
            height: 100%;
         font-size:.3rem;
         }
         } 
     }
    
 }

}
</style>
<script>
import SelectNavHead from './common/SelectNavHead'
import {mapActions} from 'vuex';
export default {
    components:{
SelectNavHead
    },
    
        data(){
 return{
    games: [],
    pys:[],
    isHot:['1'],
    pageNum:1
 }
     },
      created(){
         this.postSelectNav()
          this.getGamePy()
     },
     computed:{
      gameType() {
           return this.$store.state.m1sk===true?"2":"1";
       },
        gamePy() {
           return this.$store.state.firstPYM1;
       },
       },
     
    methods: { 
        ...mapActions([
    'firstPy' 
    ]),
        getGamePy(){
    this.$http.post(`/api${this.$api.GETGAMEPY}`,
             {"gameType":this.gameType}
          )
                 .then( res => {
                    this.pys = res.data.py;
                  //  console.log(this.pys)
                 })      

        },
          postSelectNav(){        
           this.$http.post(`/api${this.$api.GOODSEARCH}`,
              {
                "page":this.pageNum,
              "pageCount":15,
              "tableName":"category",
              "sortMap":{"popular_sort":"-"},
              "accurateMap":{"game_type":[this.gameType],"first_py":this.$store.state.firstPYM1,"is_hot":this.isHot}}
          ).then( res => {
            //  console.log(this.pageNum)
                  //   console.log(JSON.parse(res.data.result).items);
                  if (this.pageNum==1) this.games =JSON.parse(res.data.result).items;
                        else this.games=this.games.concat(JSON.parse(res.data.result).items);
                })
         },       
     },
     watch:{
         gameType(){
             this.postSelectNav()
             this.getGamePy()
         },
         gamePy(){
              this.postSelectNav()
              this.getGamePy()
         },
         

     }
}
</script>
