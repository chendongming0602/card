import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state={//要设置的全局访问的state对象
    count:"123"
};
const getters={//读取值(this.$store.getters.isList)
    count(state){
        return state.count
    },
};
const mutations={//同步修改值(this.$store.commit("changeList",this.list2);)
    count(state,value){
        state.count=value
    },
}
const actions={//异步修改值(this.$store.dispatch('actionChange',this.list3))
    userInfoChange(context,value){
        context.commit("userInfo",value)
    },
    tokenChange(context,value){
        context.commit("tokenMuta",value)
    }
}
const store = new Vuex.Store({
      state,
      getters,
      mutations,
      actions
   });

export default store;

// computed:{//监听vuex变化
//     listData(){
//         return this.$store.getters.readList
//     }
// },
// watch:{
//     listData(){
//         console.log(895)
//     },
   
// }