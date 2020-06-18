<template>
    <div class="tab3-box">
        <Scroll v-on:below="below" v-on:up="up" :isUp="isUp" :isAll="false">
            <div class="tab3-list" v-for="(t,i) in 3" :key="i">
                <video class="tab3-video" controls preload>
                    <source src="@/assets/imgs/mp4.mp4" type="video/mp4">
                </video>
                <div>爱上的看法</div>
            </div>
        </Scroll>
    </div>
</template>
<script>
import Scroll from "@/components/scroll/scroll.vue";
export default {
    data(){
        return{
            isUp:true
        }
    },
    methods:{
        below(e){
            let {stop}=e;
            setTimeout(()=>{
                stop();
                console.log("下拉刷新了")
            },1000)
            
        },
        //上拉加载
        up(e){
            let {stop}=e;
            // if(全部加载完成) this.isUp=false;
            setTimeout(()=>{
                stop();
                console.log("加载")
            },1000)
            
        }
    },
    components:{
        Scroll
    }
}
</script>
<style lang="scss" scoped>
    .tab3-box{
        position: relative;
        height: 4rem;
    }
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