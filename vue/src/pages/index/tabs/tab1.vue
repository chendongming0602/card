<template>
    <div class="tab1-boxs">
        <div class="scroll" ref="scroll">
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
        <Scroll></Scroll>
    </div>
</template>
<script>
import Scroll from "@/components/scroll/scroll.vue"
export default {
    data(){
        return{
            list:[],
        }
    },
    methods:{
       handleScroll(){
           console.log(this.$refs.scroll.getBoundingClientRect())
       console.log( window.innerHeight - this.$refs.scroll.getBoundingClientRect().y -this.$refs.scroll.getBoundingClientRect().height)
       }
    },
    created(){
        this.list.length=10
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll) //最后的参数为事件名称
    },
    components:{
        Scroll
    }
    
}
</script>
<style lang="scss" scoped>
    .tab1-boxs{
        position: relative;
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