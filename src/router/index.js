import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import home from '../components/home.vue';
import goodsList from '../components/common/goodsList.vue';
import mybuy from '../components/mybuy.vue';
import mysale from '../components/mysale.vue';
import msg from '../components/msg.vue';
import user from '../components/user.vue';
import login from '../components/login.vue';
import reg from '../components/reg.vue';
import error from '../components/error.vue';
let routes = [{
    path: '/home',
    component: home
  },

  {
    path: '/mybuy',
    component: mybuy
  },
  {
    path: '/mysale',
    component: mysale
  },
   {
     path: '/home/:id',
     component: goodsList
   },
    {
      path: '/mybuy/:id',
      component: goodsList
    },
     {
       path: '/mysale/:id',
       component: goodsList
     },
  {
    path: '/msg',
    component: msg
  },

  {
    path: '/user',
    component: user
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/reg',
    component: reg
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '*',
    component: error
  },
];

export default new Router({
  routes
});

