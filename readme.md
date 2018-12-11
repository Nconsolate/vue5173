# v-vue-m5173

### 项目简介
```  
基于vue,font-awesome,实现的仿站，仿5173移动端（残品  有时间在完善）

```  
github地址:https://github.com/Nconsolate/vue5173   
  
gitee地址:https://gitee.com/Nconsolate/vue5173  


## 1，安装
 
 **git clone git@github.com:Nconsolate/vue5173.git**  
   
 或者  
 
 **git clone git@gitee.com:Nconsolate/vue5173.git**

## 2，使用

**使用npm install 安装依赖**
（依赖过多，可能存在下载失败的情况，建议切换稳定的npm源 进行尝试）
（用到了node-sass）安装过程中容易失败，建议单独安装   npm i node-sass

**npm start 运行**

**访问 http://localhost:8080**

默认端口为8080

##### 在线查看地址：  http://47.101.199.141:8083/


## 技术

使用了vue-cli搭建的项目。  
使用font-awesome处理icon图标。
使用了swipe轮播插件。
使用了font-size（rem）的移动适配方案。 
使用了flex的上下固定，中间自适应的布局。
使用了sass进行css样式编译。
vuex实现数据状态管理。 
vue-router实现了路由管理。   
使用axios进行数据的请求。proxy代理跨域。



###### 数据
    
* 静态图片         
使用5173移动端的静态图片。
* 首页hot数据。
* 首页swipe数据。 
* selectNav数据。
* 我要买（卖）页面数据。  

###### 所传参数详见源码 
https:/m.5173.com/m-base-frontend/HotRecommend/selectHotRecommend  

https:/m.5173.com/m-base-frontend/HomePageBanner/selectBanner  

https:/m.5173.com/m-base-frontend/category/searchgamelistbytype  

https:/m.5173.com/m-base-frontend/category/getgamepy  

https:/m.5173.com/m-base-frontend/goodsSearch/goodsSearchList  

https:/m.5173.com/sym/ajax/ajaxroutes?gwtype=goodsSearch  


###### 功能实现

接口的调用涉及了跨域，防盗链，host校验等问题，
本地环境通过在config下的index.js中dev配置proxyTable解决
```
proxyTable: {
       '/api': {
         target: 'https://m.5173.com',
         bypass: function (req, res, proxyOptions) {
           req.headers.referer = 'https://m.5173.com/';
           req.headers.host = 'm.5173.com'
         },
         changeOrigin: true,
         pathRewrite: {
           '^/api': '',
         }
       }, 
 }  
```

服务器环境通过配置nginx反向代理解决。
```
  location /api {       
        rewrite  ^/api/(.*)$ /$1 break;
    	proxy_set_header Host m.5173.com;
    	proxy_set_header Referer https://m.5173.com/;
        proxy_pass https://m.5173.com;     
      }
```

本地环境路由正常 线上环境路由跳转正常，刷新失效问题
通过配置nginx解决 。 
```
location / {
             try_files $uri $uri/ @router;
             index index.html;
         }
   location @router {
            rewrite ^.*$ /index.html last;
              }
```

###### **界面实现**  
基本是参照5173移动端的网站写的界面。




## 目录
```
│  .babelrc
│  .editorconfig
│  .gitignore
│  .postcssrc.js
│  index.html                               程序主入口
│  package-lock.json            锁定安装时的包版本号package
│  package.json                             包版本号
│  readme.md
│  
├─build                                     webpack相关配置
│      build.js     
│      check-versions.js
│      utils.js
│      vue-loader.conf.js
│      webpack.base.conf.js
│      webpack.dev.conf.js
│      webpack.prod.conf.js
│      webpack.test.conf.js
│      
├─config                                    vue基本配置         
│      dev.env.js
│      index.js
│      prod.env.js
│      test.env.js
│      
├─src                                       资源目录
│  │  App.vue
│  │  main.js
│  │  
│  ├─api                                    数据请求总接口
│  │      index.js
│  │      
│  ├─assets                                 静态资源目录
│  │  ├─css
│  │  │      base.css
│  │  │      
│  │  ├─img
│  │  │      logo.png
│  │  │      
│  │  └─js
│  │          font.js                       font-size适配自执行js
│  │          jquery-1.7.2.js
│  │          swipe.js
│  
│  │          
│  ├─components                             页面组件
│  │  │  error.vue
│  │  │  home.vue
│  │  │  login.vue
│  │  │  msg.vue
│  │  │  mybuy.vue
│  │  │  mysale.vue
│  │  │  reg.vue
│  │  │  user.vue
│  │  │  
│  │  ├─common                              子组件
│  │  │      FootBar.vue
│  │  │      goodsList.vue
│  │  │      HotTop.vue
│  │  │      logreg.vue
│  │  │      Mold.vue
│  │  │      NavBar.vue
│  │  │      SelectNav.vue
│  │  │      SelectNavHead.vue
│  │  │      Swipe1.vue
│  │  │      
│  │  ├─font-awesome-4.7.0                  font-awesome包    
│  │  │  ├─css
│  │  │  │      font-awesome.min.css
│  │  │  │      
│  │  │  └─fonts
│  │  │          fontawesome-webfont.eot
│  │  │          fontawesome-webfont.svg
│  │  │          fontawesome-webfont.ttf
│  │  │          fontawesome-webfont.woff
│  │  │          fontawesome-webfont.woff2
│  │  │          FontAwesome.otf
│  │  │          
│  │  └─loading                             loadding组件
│  │          index.js
│  │          loading.vue
│  │          
│  ├─router                                  路由配置
│  │      index.js
│  │      
│  └─store                                  状态管理         
│          actions.js
│          getters.js
│          index.js
│          mutations.js
│          state.js
│          types.js
│          
├─static                                    静态数据
│  │  .gitkeep
│  │  
│  └─data
│          Mold.json                        模拟数据
│          
└─test                          测试模块(项目创建时可不选)
    ├─e2e
    │  │  nightwatch.conf.js
    │  │  runner.js
    │  │  
    │  ├─custom-assertions
    │  │      elementCount.js
    │  │      
    │  └─specs
    │          test.js
    │          
    └─unit
        │  .eslintrc
        │  index.js
        │  karma.conf.js
        │  
        └─specs
                HelloWorld.spec.js
```


