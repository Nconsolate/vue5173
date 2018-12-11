<template>
    <ul class="goods-box">
   <!-- 根据请求到的数据lists渲染页面 -->
        <li>未制作</li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
        lists:[],
        orig:'',
        }
    },
        created(){
        let catagoryId = this.$route.query.catagoryId;
        switch(this.orig){
            case 'h': this.gethgoodsList();break;
             case 'b': this.getbgoodsList();break;
              case 's':this.getsgoodsList();break;
        }
     },
       methods: {
          gethgoodsList(){        
        //    this.$http.post(`/api${this.$api.HLIST}`,
        //       {"postData":{"pageCount":15,"propertyList":[],"queryMap":{"CategoryId":this.catagoryId,"GameId":null},"likeMap":{},"betweenMap":{},"sortMap":{"PublishTime":"-"},"couponMap":{"bizOfferTypeIdEnum":2,"tradingType":5,"terminalMode":1,"couponGrade":2},"page":1,"app":false,"new":true}}
        //   )
        //          .then( res => {
        //              console.log(res)
        //             this.lists = res.data.data
        //          })
         }, 
          getbgoodsList(){        
    //   请求我要买的商品接口
         }, 
          getsgoodsList(){        
        //  请求我要卖的接口
         },                   
     },

 watch:{
    $route:{
      immediate:true,
      handler: function (to){
        let path=to.path;
        if(/home/.test(path)){
         this.orig='h'
        }
        if(/mybuy/.test(path)){
          this.orig='b'
        }
        if(/mysale/.test(path)){
          this.orig='s'
        }
      }
    }
}
}
</script>
<style lang="scss" scoped>
.goods-box{
    width: 100%;
}
</style>
