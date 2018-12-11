<template>
 <div class="tab-box">
    <SelectNavHead></SelectNavHead> 
 <div class="tab-body" >
     <router-link 
     tag='dl' 
     v-for="game in games" 
     :key="game.id"
     :to=" '/home/' +'goodsList?CategoryId='+game.catagoryId">
         <dt ><img :src="game.gameImageUrl"></dt><dd>{{game.name}}</dd>
         </router-link>      
 </div>
  <div class="tab-more">
      <router-link 
     
        to='/mybuy'
  >加载更多</router-link></div>
 </div> 
 </template>
 <script>
 import SelectNavHead from './SelectNavHead'
 export default {
   name:'SelectNav',
    components:{
    SelectNavHead
  },
  
     data(){
 return{
    games: [],
 }
     },
      created(){
         this.getSelectNav()
     },
     computed:{
      gameType() {
           return this.$store.state.hsk===true?2:1;
       }
     },
    methods: {
          getSelectNav(){        
           this.$http.post(`/api${this.$api.SELECTNAV}`,
               {"pageSize":8,"pageIndex":1,"gameType":this.gameType,"firstPY":"HOT"}
          )
                 .then( res => {         
                    this.games = res.data.data
                 })
         },       
     },
     watch:{
         gameType(){
             this.getSelectNav()
         }
     }
 }
 </script>
 <style lang="scss" scoped>
  
 .tab-box{
     margin-bottom:.2rem;
 .tab-body{
     width: 100%;
 
     background: #fff;
     padding-bottom: .2rem;
     display: flex;
      align-content:flex-start;
     justify-content: space-around;
     flex-wrap: wrap;
     dl{
         width:21%;
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
             font-size: .25rem;
             padding: 0% 5%;
             white-space: nowrap;
             overflow: hidden;
             width: 100%;
             text-overflow: ellipsis;
         }
     }
 }
 .tab-more{
         width: 100%;
         height: 1rem;
         background: #fff;
         border-top: 0.02rem #ccc solid;
         text-align: center;
         a{
             display: block;
             margin-top:.5rem;
             font-size: .3rem;
             text-decoration: none;
             color:#555;
         }
     }
 }
 </style>

