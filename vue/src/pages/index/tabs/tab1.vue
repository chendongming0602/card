<template>
    <div class="tab1-boxs">
        <Scroll v-on:below="below" v-on:up="up" :isUp="isUp" :isAll="false">
            <div class="scroll" >
                <router-link :to="{name:'press'}">
                    <div class="tab1-list" v-for="(t,i) in list" :key="i">
                        <img src="https://lovers-1300783623.cos.ap-shanghai.myqcloud.com/index/lovers-06294371091263671.jpg" alt="行业">
                        <div>
                            <div>士大夫撒旦法撒旦</div>
                            <div>水电费拉的</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </Scroll>
    </div>
</template>
<script>
import Scroll from "@/components/scroll/scroll.vue";
export default {
    data(){
        return{
            list:[],
            isUp:true
        }
    },
    methods:{
        //下拉刷新
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
            if(this.list.length>=20) this.isUp=false
            setTimeout(()=>{
                for(let i=0;i<=5;i++) this.list.push(i)
               stop();
               console.log("加载")
            },1000)
            
        }
      
    },
    created(){
        this.list.length=10;
    },
    mounted(){
       
    },
    components:{
        Scroll
    }
    
}
</script>
<style lang="scss" scoped>
    .tab1-boxs{
        position: relative;
        height: 4rem;
    }
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
            // border: 1px solid #f00;
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
            div:nth-child(2){
                position: absolute;
                left: 0;
                bottom: 0;
                color: $no-color;
                font-size: .12rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                width: 100%;
            }
        }
    }
    .tab1-list:nth-child(1){
        margin-top: .18rem;
    }
</style>