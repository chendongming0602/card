<template>
    <div>
        <div class="tab3-list" v-for="(t,i) in 3" :key="i">
            <img class="tab3-video" src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="行业">
            <div>爱上的看法</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style lang="scss" scoped>
    .tab3-list{
        margin-top: .37rem;
        .tab3-video{
            width: 100%;
            height: 2.11rem;
        }
        div{
            margin-top: .1rem;
            font-size: .16rem;
        }
    }
    .tab3-list:nth-child(1){
        margin-top: .18rem;
    }
</style>