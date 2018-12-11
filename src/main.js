
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import api from './api/index';
Vue.prototype.$api = api;
import './assets/css/base.css'; 
import './assets/js/font';
import axios from 'axios';
import '../node_modules/swiper/dist/css/swiper.css';
import './components/font-awesome-4.7.0/css/font-awesome.min.css'
Vue.prototype.$http = axios;
import loading from './components/loading';
Vue.use(loading); 
import store from './store';

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store
})

