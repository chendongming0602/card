<template>
    <div class="index-box">
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
            <div class="index-lx">
                <div>
                    <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/index/wx.png" alt="wx">
                    <div>微信：<span>415454</span></div>
                </div>
                <div>
                    <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/index/phone.png" alt="wx">
                    <div>电话：<span>415454</span></div>
                </div>
            </div>
            <div class="index-but">
                <div>公司介绍</div>
                <div>分享名片</div>
            </div>
        </div>
        <!-- 公司介绍 -->
        <div class="index-gs">
            <div class="index-gs-title">
                <img src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="logo">
                <div>大佛地方</div>
                <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/index/right.png" alt="right">
            </div>
            <div class="index-scroll-box">
                <div class="index-scroll">
                    <img v-for="(t,i) in 5" :key="i" class="index-scroll-item" src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="img">
                </div>
            </div>
            <div class="index-gs-in">阿萨德佛那都放假哦阿萨德积分</div>
        </div>
        <!-- 地址 -->
        <div class="index-site">
            <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/index/site.png" alt="">
            发的说法
        </div>

        <!-- tabs -->
        <div class="index-tabs " ref="head">
            <div v-for="(t,i) in tabs" :key="i" :class="tabIndex===i?'index-t-active':''" @click="tabIndex=i">
                {{t}}
                <div></div>
            </div>
        </div>
        <div>
           <Tab1 name="行业" v-if="tabIndex===0"></Tab1>
           <Tab2 name="产品" v-if="tabIndex===1"></Tab2>
           <Tab3 name="视频" v-if="tabIndex===2"></Tab3>
           <Tab4 name="二维码" v-if="tabIndex===3"></Tab4>
           <Tab5 name="加入我们" v-if="tabIndex===4"></Tab5>
        </div>
    </div>
</template>
<script>
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";
import Tab3 from "./tabs/tab3";
import Tab4 from "./tabs/tab4";
import Tab5 from "./tabs/tab5";
export default {
    data(){
        return{
            tabs:[
                "行业",
                "产品",
                "视频",
                "直播",
                "加入我们",
            ],
            tabIndex:0
        }
    },
    mounted(){
        //  var header = this.$refs.head;
        //  console.log(header)
        //  var origOffsetY = header.offsetTop; function onScroll(e) { window.scrollY >= origOffsetY ? header.classList.add('sticky') : header.classList.remove('sticky'); } document.addEventListener('scroll', onScroll);
    },
    components:{
        Tab1,
        Tab2,
        Tab3,
        Tab4,
        Tab5,
    }
}
</script>
<style lang="scss" scoped>
    .index-box{
        padding: .29rem .18rem .30rem;
    }
    .index-user{
        padding: .18rem;
        background:rgba(255,255,255,1);
        box-shadow:0px 2px 10px 0px rgba(236,236,236,0.5);
        border-radius:2px;
        border:1px solid rgba(237,237,237,1);
        .index-user-name{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: .18rem;
            border-bottom: 1px solid $border;
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
        .index-lx{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: .18rem;
            >div{
                display: flex;
                img{
                    width: .15rem;
                    height: .15rem;
                    margin-right: 5px;
                }
                div{
                    font-size: .12rem;
                }
                span{
                    font-size: .12rem;
                    color: $no-color;
                }
            }
        }
        .index-but{
            display: flex;
            justify-content: space-between;
            margin-top: .18rem;
            div{
                width: 1.42rem;
                line-height: .42rem;
                color: $color;
                background: $no-bg;
                font-size: .14rem;
                text-align: center;
                border-radius:2px;
            }
            div:nth-child(2){
                color: $fff;
                background: $bg;
            }
        }
    }
    .index-gs{
        padding: .33rem 0rem .18rem;
        border-bottom: 1px solid $border;
        .index-gs-title{
            display: flex;
            align-items: center;
            justify-content: space-between;
            img:nth-child(1){
                min-width: .53rem;
                min-height: .53rem;
                width: .53rem;
                height: .53rem;
                margin-right: 8px;
            }
            img:nth-child(3){
                min-width: .18rem;
                min-height: .20rem;
                width: .18rem;
                height: .20rem;
            }
            div{
                flex-grow: 1;
                font-weight: bold;
                font-size: .14rem;
            }
        }
        .index-scroll-box{
            margin-top: .18rem;
            overflow: hidden;
            .index-scroll{
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
                overflow: auto;
                margin-bottom: -.05rem;
                .index-scroll-item{
                    min-width: 1.45rem;
                    height: .9rem;
                    width: 1.45rem;
                    margin-left: .1rem;
                    border: 1px solid #f00;
                    border-radius: 3px;
                }
                .index-scroll-item:nth-child(1){
                    margin-left: 0;
                }
            }
        }
        .index-gs-in{
            margin-top: .18rem;
            color: #606060;
            font-size: .14rem;
        }
    }
    .index-site{
        display: flex;
        align-items: center;
        color: $no-color;
        font-size: .14rem;
        padding: .16rem 0;
        border-bottom: 1px solid $border;
        img{
            width: .20rem;
            height: .20rem;
            margin-right: 5px;
        }
    }
    .index-tabs{
        position: -webkit-sticky;
        position: sticky;
        z-index: 99;
        background: #fff;
        display: flex;
        // padding: .3rem 0 .18rem;
        margin: .3rem 0 0;
        box-shadow:0px 1px 0px 0px rgba(237,237,237,1);
        background: $fff;
        div{
            font-size: .14rem;
            padding: 0 .1rem;
            color: $no-color;
            line-height: 25px;
        }
        .index-t-active{
            font-size: .18rem;
            font-weight: bold;
            color: $div;
            div{
                width: .32rem;
                height: 2px;
                background: $bg;
                margin: 0 auto;
                margin-top: 3px;
            }
        }
    }
    
</style>