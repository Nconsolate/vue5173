<template>
    <ul class="mold-box" >
        <router-link 
        tag="li"
        to="/home"
        v-for="mold in molds " :key="mold.sort">
            <span :style="{ 'background-image': 'url(' + mold.backgroundImg + ')'}"></span>
            <p>{{mold.type}}</p>
            </router-link>
       
    </ul>
</template>
<script>
export default {
   name:'Mold', 
  data(){
        return {
            molds: []
        }
    },
    created(){
        this.getMolds()
    },
    methods: {
        getMolds(){
        
            this.$http.get( '../../../static/data/Mold.json' )
                .then( res => {
                   this.molds = res.data.data;
                   })
                }
        },
}
</script>



<style lang="scss" scoped>
.mold-box{
    width:100%;
    height:auto;
    display: flex;
    justify-content: space-around;
    background: #fff;
    padding: .2rem 0;
    margin-bottom: .2rem;
    li{
        width: 15%;
        span{
            width: 1.1rem;
            height: 1.1rem;
            display: inline-block;
            background-size: 100% !important;
            background-repeat: no-repeat;
        }
        p{
            height: .35rem;
            line-height: .3rem;
            color:#000;
            font-size: .28rem;
            margin-top: .1rem;
            text-align: center;

        }

    }
}
</style>

