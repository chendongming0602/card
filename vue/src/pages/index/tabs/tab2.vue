<template>
    <div>
        <router-link :to="{name:'buy'}">
            <div class="tab1-list" v-for="(t,i) in 5" :key="i">
                <img src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="行业">
                <div>
                    <div>士大夫撒旦法撒旦</div>
                    <div>
                        <div>¥100</div>
                        <div class="tab2-but">购买</div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style lang="scss" scoped>
    .tab1-list{
        display: flex;
        justify-content: space-between;
        margin-top: .18rem;
        img{
            width: 1.13rem;
            height: .77rem;
            min-width: 1.13rem;
            min-height: .77rem;
            border-radius: 2px;
            margin-right: 10px;
            border: 1px solid #f00;
            object-fit: cover;
        }
        >div{
            flex-grow: 1;
            position: relative;
            div:nth-child(1){
                font-size: .16rem;
                word-break: break-all;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                display: -webkit-box;
                margin-top: 5px;
            }
            >div:nth-child(2){
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                div:nth-child(1){
                    color: #F64545;
                    font-size: .18rem;
                    font-weight: bold;
                }
                .tab2-but{
                    width: .52rem;
                    line-height: .25rem;
                    text-align: center;
                    background: #FF4339;
                    border-radius: 1px;
                    font-size: .14rem;
                    color: $fff;
                }
            }
        }
    }
    .tab1-list:nth-child(1){
        margin-top: .18rem;
    }
</style>