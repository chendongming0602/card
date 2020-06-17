<template>
    <div>
        123
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        handleScroll(e){
            console.log(e)
            console.log(document.body.scrollHeight)
            console.log(document.documentElement.scrollTop)
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" >

</style>