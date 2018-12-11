import Vue from 'vue';
import Vuex from 'vuex'; //1.引入

import actions from './actions';
import state from './state';
import mutations from './mutations';
import getters from './getters';
 
Vue.use(Vuex);//2.安装

//3.创建store对象

let store = new Vuex.Store({
  actions,mutations,getters,state
});

export default store;