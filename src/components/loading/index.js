//插件 =  对象（有install方法)
//插件 =  函数（Vue 直接调用函数)
import loading from './loading.vue'
// import routerlink from './components/routerlink.vue'
export default{
  install:function(Vue){
    // console.log('调用install');
    // Vue.component('组件名',组件变量名)
    Vue.component('loading',loading)
    // Vue.component('router-link',routerlink)
  }
}