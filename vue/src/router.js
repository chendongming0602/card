import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'//引入store(vuex)
Vue.use(Router)

// export default new Router({
//   routes: [
//       {path:'/',component:Home,
//       },
//       {path:"/detail",component:Detail,
//         children:[
//           {
//             path:"/a",
//             component:DetailA
//           },
//           {
//             path:"/b",
//             component:DetailB
//           }
//         ]
//       }
//   ]
// })

const router=new Router({
  routes: [
          {
            path:"/",
            redirect:"my"
          },
          {
            path:'/index',
            name:"index",
            component:() => import('@/pages/index/index.vue'),
            meta:{
              title:"首页",
              //是否缓存
              keep:true
            }
          },
          {
            path:'/my',
            name:"my",
            component:() => import('@/pages/my/my.vue'),
            meta:{
              title:"推荐人信息"
            }
          },
          {
            path:'/firm',
            name:"firm",
            component:() => import('@/pages/firm/firm.vue'),
            meta:{
              title:"公司介绍"
            }
          },
          {
            path:'/buy',
            name:"buy",
            component:() => import('@/pages/details/buy.vue'),
            meta:{
              title:"商品"
            }
          },
          {
            path:'/order',
            name:"order",
            component:() => import('@/pages/details/order.vue'),
            meta:{
              title:"详情页"
            }
          },
          {
            path:'/press',
            name:"press",
            component:() => import('@/pages/press/press.vue'),
            meta:{
              title:"行业新闻"
            }
          },
      ]
})
// 1、to:即将要进入的目标路由对象；

//   2、from:当前导航即将要离开的路由对象；

//   3、next ：调用该方法后，才能进入下一个钩子函数（afterEach）。

//         next()//直接进to 所指路由
//         next(false) //中断当前路由
//         next('route') //跳转指定路由
//         next('error') //跳转错误路由
  router.beforeEach((to,from,next)=>{
    if (to.meta.title) {
      document.title = to.meta.title;
    }
    next()
    // console.log(sessionStorage["token"])
    // let sessionToken=JSON.parse(sessionStorage.getItem("store"))||'',storeToken=store.getters.getToken;
    // if(to.meta.is===true){//需要判断是否登录
    //   if(!storeToken&&!sessionToken.token) return next('/');//缓存和vuex都空(跳登录)
    //   next();
    // } else{
    //   if(storeToken) return next(false);//已经登录不给回去
    //   next();
    // }
    
  })
 export default router;