<template>
    <div class="firm-boxs">
        <div class="firm-box">
            <div class="firm-name">
                <img src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="logo">
                中山市婚暖礼宴酒店餐饮管理有限公司 石岐分公司
            </div>
        </div>

        <div class="firm-swipe">
            <van-swipe class="swipe-box"  indicator-color="white" @change="swipeChange" :loop="false">
                    <van-swipe-item v-for="(t,i) in 5" :key="i">
                        <div :class="swipeIndex===i?'ii':''" class="swipe-items">
                            <img src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="">
                        </div>
                    </van-swipe-item>
            </van-swipe>
        </div>

        <div class="firm-box">
            <div class="firm-site">
                <div >公司地址</div>
                <div>中山市石岐区伊电园D2栋301</div>
            </div>
            <div class="firm-in">
                <div >公司介绍</div>
                <div>中山市石岐区伊电园D2栋301</div>
            </div>
        </div>

        <div class="my-but">返回首页</div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            swipeIndex:0
        }
    },
    methods:{
        swipeChange(e){
            console.log(e)
            this.swipeIndex=e
        }
    },
    created(){
        console.log(this.$route.params)
    }
}
</script>
<style lang="scss" scoped>
    .firm-swipe{
        margin-top: .18rem;
        // padding-left: 18px;
        .van-swipe-item {
            color: #fff;
            font-size: 20px;
            text-align: center;
            box-sizing: border-box;
            .swipe-items{
                background-color: #39a9ed;
                height: 200px;
                transform: scale(0.9);
                overflow: hidden;
                margin-left: -30px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 5px;
                    object-fit: cover;
                }
            }
            .ii{
                 margin-left: 0;
            }
           
        }
    }
    .firm-boxs{
        height: 100%;
        position: relative;
    }
    .firm-box{
        padding: .18rem;
        padding-bottom: 0;
    }
    .firm-name{
        display: flex;
        font-size: .16rem;
        font-weight: bold;
        line-height: 25px;
        img{
            width: 53px;
            height: 53px;
            min-width: 53px;
            min-height: 53px;
            margin-right: 10px;
            object-fit: cover;
        }
    }
    .firm-site{
        padding-bottom: .18rem;
        border-bottom: 1px solid $border;;
        div:nth-child(1){
            font-size: .18rem;
            font-weight: bold;
        }
        div:nth-child(2){
            font-size: .14rem;
            margin-top: 8px;
            color: #606060;
        }
    }
    .firm-in{
        margin-top: .18rem;
        div:nth-child(1){
            font-size: .18rem;
            font-weight: bold;
        }
        div:nth-child(2){
            font-size: .14rem;
            margin-top: 15px;
            color: #606060;
        }
    }
    
</style>