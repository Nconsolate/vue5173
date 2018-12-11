<template>
  <div id="app">
    <loading v-show="bLoading">
    </loading>
    <navbar v-show="bNav"></navbar>
   
    <router-view></router-view>
    <footbar v-show="bFoot"></footbar>
  </div>
</template>

<script>
import navbar from './components/common/NavBar';
import footbar from './components/common/FootBar';
import {mapGetters} from 'vuex';
import * as types from './store/types.js';
export default {
  name: 'App',
  components:{
    navbar,footbar
  },
  computed:mapGetters([
     'bNav','bFoot','bLoading'
   ]),
  watch:{
    $route:{
      immediate:true,
      handler: function (to){
        

        let path=to.path;
       
        if(/home|mybuy|mysale/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
          if(/user|msg/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/login|reg|goodsList/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,false);
        }
      


      }
    }
  }
}
</script>
<style lang="scss" scoped>
#app {
  width:100%;
 height: 100%;
 display: flex;

 overflow-y: hidden;
 flex-direction: column;
}
</style>
