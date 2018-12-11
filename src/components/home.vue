<template>
  <div class="home">
   <Swipe></Swipe>
   <Mold></Mold>
   <SelectNav></SelectNav>
   <HotTop></HotTop>
  </div>
</template>
<script>
import Swipe from './common/Swipe1'
import SelectNav from './common/SelectNav'
import HotTop from './common/HotTop'
import Mold from './common/Mold'
//   import {VIEW_LOADING} from '../store/types';

   export default{
    name:"home",
    components:{
  Swipe,SelectNav,HotTop,Mold
  },
    data(){
       return {

       }
    },

   }
 </script>
<style lang="scss" scoped>
.home {
  width:100%;
  flex:1;
  overflow-y: scroll;
  background:#f1f1f1;
}
</style>
