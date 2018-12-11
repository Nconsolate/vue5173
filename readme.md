# v-vue-m5173

### ��Ŀ���
```  
����vue,font-awesome,ʵ�ֵķ�վ����5173�ƶ��ˣ���Ʒ  ��ʱ�������ƣ�

```  
github��ַ:https://github.com/Nconsolate/vue5173   
  
gitee��ַ:https://gitee.com/Nconsolate/vue5173  


## 1����װ
 
 **git clone  git clone git@github.com:Nconsolate/vue5173.git**  
   
 ����  
 
 **git clone  git clone git@gitee.com:Nconsolate/vue5173.git**

## 2��ʹ��

**ʹ��npm install ��װ����**
���������࣬���ܴ�������ʧ�ܵ�����������л��ȶ���npmԴ ���г��ԣ�
���õ���node-sass����װ����������ʧ�ܣ����鵥����װ   npm i node-sass

**npm start ����**

**���� http://localhost:8080**

Ĭ�϶˿�Ϊ8080

##### ���߲鿴��ַ��  http://47.101.199.141:8083/


## ����

ʹ����vue-cli�����Ŀ��  
ʹ��font-awesome����iconͼ�ꡣ
ʹ����swipe�ֲ������
ʹ����font-size��rem�����ƶ����䷽���� 
ʹ����flex�����¹̶����м�����Ӧ�Ĳ��֡�
ʹ����sass����css��ʽ���롣
vuexʵ������״̬���� 
vue-routerʵ����·�ɹ���   
ʹ��axios�������ݵ�����proxy�������



###### ����
    
* ��̬ͼƬ         
ʹ��5173�ƶ��˵ľ�̬ͼƬ��
* ��ҳhot���ݡ�
* ��ҳswipe���ݡ� 
* selectNav���ݡ�
* ��Ҫ������ҳ�����ݡ�  

###### �����������Դ�� 
https:/m.5173.com/m-base-frontend/HotRecommend/selectHotRecommend  

https:/m.5173.com/m-base-frontend/HomePageBanner/selectBanner  

https:/m.5173.com/m-base-frontend/category/searchgamelistbytype  

https:/m.5173.com/m-base-frontend/category/getgamepy  

https:/m.5173.com/m-base-frontend/goodsSearch/goodsSearchList  

https:/m.5173.com/sym/ajax/ajaxroutes?gwtype=goodsSearch  


###### ����ʵ��

�ӿڵĵ����漰�˿��򣬷�������hostУ������⣬
���ػ���ͨ����config�µ�index.js��dev����proxyTable���
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

����������ͨ������nginx�����������
```
  location /api {       
        rewrite  ^/api/(.*)$ /$1 break;
    	proxy_set_header Host m.5173.com;
    	proxy_set_header Referer https://m.5173.com/;
        proxy_pass https://m.5173.com;     
      }
```

���ػ���·������ ���ϻ���·����ת������ˢ��ʧЧ����
ͨ������nginx��� �� 
```
location / {
             try_files $uri $uri/ @router;
             index index.html;
         }
   location @router {
            rewrite ^.*$ /index.html last;
              }
```

###### **����ʵ��**  
�����ǲ���5173�ƶ��˵���վд�Ľ��档




## Ŀ¼
```
��  .babelrc
��  .editorconfig
��  .gitignore
��  .postcssrc.js
��  index.html                               ���������
��  package-lock.json            ������װʱ�İ��汾��package
��  package.json                             ���汾��
��  readme.md
��  
����build                                     webpack�������
��      build.js     
��      check-versions.js
��      utils.js
��      vue-loader.conf.js
��      webpack.base.conf.js
��      webpack.dev.conf.js
��      webpack.prod.conf.js
��      webpack.test.conf.js
��      
����config                                    vue��������         
��      dev.env.js
��      index.js
��      prod.env.js
��      test.env.js
��      
����src                                       ��ԴĿ¼
��  ��  App.vue
��  ��  main.js
��  ��  
��  ����api                                    ���������ܽӿ�
��  ��      index.js
��  ��      
��  ����assets                                 ��̬��ԴĿ¼
��  ��  ����css
��  ��  ��      base.css
��  ��  ��      
��  ��  ����img
��  ��  ��      logo.png
��  ��  ��      
��  ��  ����js
��  ��          font.js                       font-size������ִ��js
��  ��          jquery-1.7.2.js
��  ��          swipe.js
��  
��  ��          
��  ����components                             ҳ�����
��  ��  ��  error.vue
��  ��  ��  home.vue
��  ��  ��  login.vue
��  ��  ��  msg.vue
��  ��  ��  mybuy.vue
��  ��  ��  mysale.vue
��  ��  ��  reg.vue
��  ��  ��  user.vue
��  ��  ��  
��  ��  ����common                              �����
��  ��  ��      FootBar.vue
��  ��  ��      goodsList.vue
��  ��  ��      HotTop.vue
��  ��  ��      logreg.vue
��  ��  ��      Mold.vue
��  ��  ��      NavBar.vue
��  ��  ��      SelectNav.vue
��  ��  ��      SelectNavHead.vue
��  ��  ��      Swipe1.vue
��  ��  ��      
��  ��  ����font-awesome-4.7.0                  font-awesome��    
��  ��  ��  ����css
��  ��  ��  ��      font-awesome.min.css
��  ��  ��  ��      
��  ��  ��  ����fonts
��  ��  ��          fontawesome-webfont.eot
��  ��  ��          fontawesome-webfont.svg
��  ��  ��          fontawesome-webfont.ttf
��  ��  ��          fontawesome-webfont.woff
��  ��  ��          fontawesome-webfont.woff2
��  ��  ��          FontAwesome.otf
��  ��  ��          
��  ��  ����loading                             loadding���
��  ��          index.js
��  ��          loading.vue
��  ��          
��  ����router                                  ·������
��  ��      index.js
��  ��      
��  ����store                                  ״̬����         
��          actions.js
��          getters.js
��          index.js
��          mutations.js
��          state.js
��          types.js
��          
����static                                    ��̬����
��  ��  .gitkeep
��  ��  
��  ����data
��          Mold.json                        ģ������
��          
����test                          ����ģ��(��Ŀ����ʱ�ɲ�ѡ)
    ����e2e
    ��  ��  nightwatch.conf.js
    ��  ��  runner.js
    ��  ��  
    ��  ����custom-assertions
    ��  ��      elementCount.js
    ��  ��      
    ��  ����specs
    ��          test.js
    ��          
    ����unit
        ��  .eslintrc
        ��  index.js
        ��  karma.conf.js
        ��  
        ����specs
                HelloWorld.spec.js
```


