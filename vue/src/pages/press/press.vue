<template>
    <div class="press-box">
        <router-link :to="{name:'my'}">
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
                <div class="buy-lx"><div>联系人</div></div>
            </div>
        </router-link>
        <div class="press-title">宝宝总被蚊子叮？防蚊、止痒的正确方法 个高高大大大大…</div>
        <div class="press-gf">
            <img class="" src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="头像">
            <div class="press-gf-name">
                <div>官方头像</div>
                <div>
                    <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/details/time.png" alt="时间">
                    <div>1285：151</div>
                </div>
            </div>
        </div>
        <div class="press-fwb">富文本</div>
        <router-link :to="{name:'index'}"><div class="my-but">返回首页</div></router-link>
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
    .press-box{
        padding: .18rem;
        height: 100%;
        position: relative;
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
    .press-title{
        font-size: .18rem;
        font-weight: bold;
        margin-top: .18rem;
        line-height: 30px;
    }
    .press-gf{
        display: flex;
        align-items: center;
        margin-top: .18rem;
        >img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
        .press-gf-name{
            margin-left: 10px;
            div:nth-child(1){
                font-size: .14rem;
                padding-bottom: 3px;
            }
            div:nth-child(2){
                display: flex;
                align-items: center;
                padding-top: 3px;
                img{
                    width: 15px;
                    height: 15px;
                    margin-right: 3px;
                }
                color: $no-color;
                font-size: .12rem;
            }
        }
    }
    .press-fwb{
        padding: .18rem 0 1rem;
    }
</style>