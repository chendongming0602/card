import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'//引入store(vuex)
import "./utils/axios.js"//引入axios
// import bus from './utils/bus';
//rem转px
import "@/utils/flex";
//有赞
import Vant from 'vant';
import 'vant/lib/index.css';
//复制文本插件
import VueClipboard from 'vue-clipboard2';
//上拉加载/下拉刷新
import VueScroller from 'vue-scroller';


Vue.use(VueScroller);
Vue.use(VueClipboard);


Vue.use(Vant);
// import jq from './assets/jquery-1.11.3.js'


// import Exam01 from './components/Exam01'

// Vue.component("e-xam01",Exam01)

Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
//  import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
// import './lib/mui/css/icons-extra.css'

//import './font/iconfont.css'//引入图标文件

new Vue({
  router,
  store,//使用store
  render: h => h(App),
  created(){
    // 从sessionStorage中取值
  // if (sessionStorage.getItem('store')) {
  //     store.replaceState(Object.assign({}, store.state, JSON.parse(sessionStorage.getItem('store'))));
  //     sessionStorage.removeItem('store');
  //   }
    
  //   // 监听页面刷新，将数据全部保存到sessionStorage中
  //   window.addEventListener('beforeunload', () => {
  //     sessionStorage.setItem('store', JSON.stringify(store.state));
  //   });
  
  }
}).$mount('#app')
