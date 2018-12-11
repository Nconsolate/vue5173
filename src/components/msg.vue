<template>
<div class="msg">
 <div class="msg-tit">
      <p>消息</p>
    </div>
    <div class="msg-box">
        <img src="https://m.5173.com/dist/src/assets/images/wu-message.png?b8b5e4c119f4e5b98179995e760224c3" alt="">
        <p>暂无新消息</p> 
    </div>
    </div>
    
</template>
<style lang="scss" scoped>
 .msg{
     width: 100%;
    flex: 1;
    overflow-y: scroll;
    .msg-tit{
      background: #f6f6f6;
      margin-bottom: 1px;
      p {
        text-align: center;
        height: 1.1rem;
        line-height: 1.1rem;
        font-size: .36rem;
      }
    }
    .msg-box{
text-align: center;
      img{
          width:1.72rem;
          height: 1.72rem;
      }
      p{
        font-size: .36rem;
        margin-top: .2rem;
        color:#666;
      }

    }
 }
</style>
<script>
export default {
       beforeRouteEnter(to,from,next){
      if(0){
        next(true)
      
      }else{
        next('/login')
      }

    }
}
</script>
