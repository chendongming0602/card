<template>
    <div class="order-box">
        <div class="buy-swipe">
            <van-swipe  :autoplay="3000" indicator-color="#FF4339">
                <van-swipe-item v-for="(t,i) in 3" :key="i">
                    <img src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="商品" @click="lookEvent">
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="buy-box">
            <div class="buy-title">第三方了第三方第三方了第三方第三方了第三方第三方了第三方第三方了第三方</div>
            <div class="buy-money">￥1000</div>
            <!-- <div class="buy-but">
                <div>返回首页</div>
                <div>复制链接</div>
            </div>

            <div class="buy-bz">操作步骤:</div>
            <div class="buy-jt">
                1.复制链接
                <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/details/jt.png" alt="箭头">
                2.打开淘宝/京东
                <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/details/jt.png" alt="箭头">
                3.购买商品
            </div> -->

            <router-link :to="{name:'my'}">
                <div class="index-user order-user">
                    <div class="index-user-name">
                        <div class="index-name">
                            <div>阿斯顿福建 
                                <div>
                                    <div></div>
                                    多少积分
                                </div>
                            </div>
                            <div>阿斯顿发动机 第三方</div>
                        </div>
                        <img class="index-avatar" src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="头像">
                    </div>
                    <div class="buy-lx"><div>联系人</div></div>
                </div>
            </router-link>
        </div>

        <div class="buy-empty"></div>

        <div class="buy-detail-box">
            <div v-if="!isBut">
                <div class="buy-detail-title">商品详情</div>
                <div class="buy-detail-content">
                    商品详情
                </div>
            </div>

            <div v-if="isBut">
                <div class="order-yy-title"><span>预约成功！</span>请输入你的联系方式方便我们联系您！</div>
                <div class="order-input">
                    <van-form @submit="onSubmit" ref="form" :show-error="false">
                        <div class="order-input-title">姓名</div>
                        <van-field
                            v-model="name"
                            name="name"
                            placeholder="请输入您的姓名"
                            :rules="[{ required: true, message: '请输入您的姓名' }]"
                        />
                        <div class="order-input-title">手机</div>
                        <van-field
                            v-model="phone"
                            name="phone"
                            placeholder="请输入您的手机号码"
                            :rules="[{validator, message: '请输入正确的手机号码' }]"
                        />
                    </van-form>
                </div>
            </div>
        </div>
        <!-- 按钮 -->
        <div class="order-but"  v-if="!isBut" >
            <router-link :to="{name:'index'}"><div>返回首页</div></router-link>
            <div @click="isBut=true">立即预约</div>
        </div>
        <div  v-if="isBut" class="my-but" @click="$refs.form.submit()">
            提交
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
import { ImagePreview } from 'vant';
export default {
    data(){
        return{
            name:"",
            phone:"",
            isBut:false
        }
    },
    methods:{
        onSubmit(e){
            console.log(e)
            Toast("恭喜预约成功")
        },
        validator(val){
            return /^((\+86|0086)\s+)?1[3-8]\d{9}$/.test(val);
        },
        lookEvent(){
            ImagePreview({
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg',
                ],
                startPosition: 1,
                onClose() {
                    // do something
                },
            });
        }
    }
}
</script>
<style>
    .van-toast__text{
        color: #fff !important;
    }
</style>
<style lang="scss" scoped>
    .order-box{
        height: 100%;
        position: relative;
    }
    .buy-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        height: 318px;
        text-align: center;
        background-color: #39a9ed;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .buy-box{
        padding: .18rem .18rem 0;
        .buy-title{
            font-size: .18rem;
            line-height: 28px;
        }
        .buy-money{
            color: #FF4646;
            font-size: .18rem;
            margin-top: .18rem;
            font-weight: bold;
        }
        .buy-but{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: .18rem;
            div:nth-child(1){
                border: 1px solid $border;
                width: .8rem;
                line-height: 42px;
                text-align: center;
                border-radius:2px;
                font-size: .14rem;
            }
            div:nth-child(2){
                background: #FF4339;
                width: 2.5rem;
                line-height: 42px;
                text-align: center;
                font-size: .14rem;
                color: $fff;
                border-radius:2px;
            }
        }
        .buy-bz{
            color: $text;
            margin-top: .18rem;
        }
        .buy-jt{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: .12rem;
            color: $text;
            margin-top: .1rem;
            padding-bottom: 30px;
            border-bottom: 1px solid $border;
            img{
                width: .44rem;
                height: 11px;
            }
        }
        .order-user{
            margin-top: .18rem;
        }
        .index-user{
            padding: .18rem;
            background:rgba(255,255,255,1);
            box-shadow:0px 2px 10px 0px rgba(236,236,236,0.5);
            border-radius:2px;
            border:1px solid rgba(237,237,237,1);
            position: relative;
            .buy-lx{
                position: absolute;
                background: $bg;
                padding: 5px 8px;
                top: 0;
                left: 0;
                border-radius:2px 2px 2px 0px;
                div{
                    color: $fff;
                    font-size: .12rem;
                    transform: scale(0.9);
                }
            }
            .index-user-name{
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding-bottom: .18rem;
                // border-bottom: 1px solid $border;
                .index-name{
                    div:nth-child(1){
                        font-weight: bold;
                        font-size: .18rem;
                        display: flex;
                        align-items: center;
                    div{
                            display: flex;
                            align-items: center;
                            color: $no-color;
                            font-size: .12rem;
                            margin-left: 3px;
                            // border-left: 1px solid #B1BAC3;
                            div{
                                height: 10px;
                                width: 1px;
                                background: #B1BAC3;
                                margin-right: 5px;
                            }
                    }
                    }
                    div:nth-child(2){
                        font-size: .12rem;
                        transform: scale(0.9);
                        color: $no-color;
                        margin-top: 8px;
                        margin-left: -7px;
                    }
                }
                .index-avatar{
                    width: .74rem;
                    height: .74rem;
                    min-width: .74rem;
                    min-height: .74rem;
                    border-radius: 50%;
                    object-fit: cover;
                }
            }
        }
    }
    .buy-empty{
        width: 100%;
        height: 10px;
        background: #F6F6F6;
        margin-top: 30px;
    }
    .buy-detail-box{
        padding: .18rem .18rem 1.1rem;
        .buy-detail-title{
            font-weight: bold;
            font-size: .18rem;
            margin-bottom: .18rem;
        }
        .order-yy-title{
            font-size: .18rem;
            font-weight: bold;
            line-height: 28px;
            span{
                color: #FF5656;
                font-size: .18rem;
                font-weight: bold;
            }
        }
    }
    .order-but{
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        width: 100%;
        padding: 0 .18rem;
        bottom: 3%;
        background: $fff;
        div:nth-child(1){
            border: 1px solid $border;
            width: .8rem;
            line-height: 42px;
            text-align: center;
            border-radius:2px;
            font-size: .14rem;
        }
        div:nth-child(2){
            background: $bg;
            width: 2.5rem;
            line-height: 42px;
            text-align: center;
            font-size: .14rem;
            color: $fff;
            border-radius:2px;
        }
    }
    
    .order-input{
        .order-input-title{
            margin: .18rem 0 .1rem;
        }
        .van-cell{
        padding: 0;
        >>> .van-field__control{
            padding: 9px;
            background: #F6F6F6;
            border-radius: 1px;
            font-size: .14rem;
        }
    }
    }
    
</style>