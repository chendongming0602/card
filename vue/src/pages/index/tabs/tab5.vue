<template>
    <div>
        <div class="tab5-top">
            企业登录-建议您使用pc端
            <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/index/dn.png" alt="pc">
        </div>
        <a class="tab5-go" href="">
            <div>www.baidu.com</div>
            <div>点我打开</div>
        </a>
        <div>
            <div class="tab5-js"><img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/index/js.png" alt="">技术支持</div>
            <div class="tab5-gs">中山市威盛网络科技股份有限公司</div>
        </div>
        <div class="tab5-vx">
            <div>我们也想要这套企业名片</div>
            <div>技术合作VX</div>
            <img src="https://minis-resources-1252149780.cos.ap-guangzhou.myqcloud.com/card/index/vx.png" alt="vx">
        </div>
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
    .tab5-top{
        margin-top: .2rem;
        display: flex;
        font-size: .21rem;
        font-weight: bold;
        img{
            width: .25rem;
            height: .22rem;
            margin-left: 10px;
        }
    }
    .tab5-go{
        margin-top: .18rem;
        display: flex;
        padding: .15rem .20rem;
        justify-content: space-between;
        align-items: center;
        box-shadow:0px 2px 10px 0px rgba(236,236,236,0.5);
        border-radius:4px;
        border:1px solid rgba(237,237,237,1);
        div:nth-child(1){
            font-size: .14rem;
        }
        div:nth-child(2){
            font-size: .12rem;
            color: $no-color;
        }
    }
    .tab5-js{
        display: flex;
        align-items: center;
        font-size: .18rem;
        font-weight: bold;
        margin-top: .18rem;
        img{
            width: 19px;
            height: 19px;
        }
    }
    .tab5-gs{
        padding: .1rem 0 .18rem;
        font-size: .14rem;
        border-bottom: 1px solid $border;
        color: #606060;
    }
    .tab5-vx{
        margin-top: .18rem;
        div{
            font-size: .14rem;
            line-height: 22px;
            color: #606060;
        }
        img{
            width: 1.07rem;
            height: 1.07rem;
        }
    }
</style>