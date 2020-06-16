<template>
    <div class="my-box">
        <!-- 顶部 -->
        <div class="index-user">
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
        </div>

        <div class="my-lx">
            <div class="my-phone"
                v-clipboard:copy="copyText"     
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
            >
                <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/index/phone.png" alt="phone">
                <div>联系方式：<span>18548484484</span></div>
                点击复制
            </div>
            <div class="my-phone my-wx"
                v-clipboard:copy="copyText"     
                v-clipboard:success="onCopy"
                v-clipboard:error="onError"
            >
                <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/index/wx.png" alt="wx">
                <div>微信：<span>18548484484</span></div>
                点击复制
            </div>
        </div>

        <div class="my-in">
            <div>个人简介</div>
            <div>大佛卡的说法的说法第三方大佛卡的说法的说法第三方大佛卡的说法的说法第三方大佛卡的说法的说法第三方大佛卡的说法的说法第三方大佛卡的说法的说法第三方大佛卡的说法的说法第三方大佛卡的说法的说法第三方大佛卡的说法的说法第三方大佛卡的说法的说法第三方</div>
        </div>

        <div class="my-fw">
            <div>服务内容</div>
            <div class="my-fw-list">
                <div v-for="(t,i) in 5" :key="i">logo设计</div>
            </div>
        </div>

        <div class="my-but">返回首页</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            copyText:"1dsaf "
        }
    },
    methods: {
        onCopy(){
            alert('复制成功')
        },
        onError(){
            alert('复制失败');
        }
    }
}
</script>
<style lang="scss" scoped>
    .my-box{
        padding: .18rem;
        padding-bottom: 1rem;
        height: 100%;
        position: relative;
    }
    .index-user{
        .index-user-name{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: .4rem;
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
    .my-lx{
        padding: .18rem;
        box-shadow:0px 2px 10px 0px rgba(236,236,236,0.5);
        border-radius:4px;
        border:1px solid rgba(237,237,237,1);
        .my-phone{
            display: flex;
            align-items: center;
            font-size: .12rem;
            color: $no-color;
            img{
                width: 16px;
                height: 16px;
                margin-right: 3px;
            }
            div{
                flex-grow: 1;
                font-size: .14rem;
                span{
                    font-size: .14rem;
                    color: $color;
                    font-weight: bold;
                }
            }
        }
        .my-wx{
            margin-top: .37rem;
            div{
                span{
                    color: #3EB626;
                }
            }
        }
    }
    .my-in{
        margin-top: .3rem;
        padding-bottom: .18rem;
        box-shadow:0px 1px 0px 0px $show;
        div:nth-child(1){
            font-size: .18rem;
            font-weight: bold;
        }
        div:nth-child(2){
            font-size: .14rem;
            color: #606060;
            margin-top: 10px;
            line-height: 25px;
            letter-spacing: 3px;
        }
    }
    .my-fw{
        margin-top: .3rem;
        div:nth-child(1){
            font-size: .18rem;
            font-weight: bold;
        }
        .my-fw-list{
            display: flex;
            align-items: center;
            margin-top: .15rem;
            flex-wrap: wrap;
            div{
                padding: 5px 10px;
                background: #F6F6F6;
                border-radius: 3px;
                font-size: .12rem;
                color: #323435;
                margin-right: .25rem;
                margin-top: .18rem;
            }
        }
    }
</style>