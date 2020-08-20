import Vue from 'vue'
import App from './App.vue'
import {
  router
} from './router';
import store from './store'
import 'amfe-flexible'; //设置rem基准值
import './assets/css/reset.less' //移动端初始化样式
import {
  Button,
  Cell
} from 'vant';
Vue.use(Button).use(Cell)
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import './assets/css/fullpage.min.css'//整屏滚动样式
import VueFullPage from 'vue-fullpage.js'

Vue.use(VueFullPage);
// 插件导入 注册
import http from './utils/http'
Vue.use(http, {
  baseURL: '', //基路径
  timeout: 5000, //请求超时时间
  //请求拦截器
  inRequest: (inRequest) => {
    // console.log('inRequest', inRequest.headers)
    // inRequest.headers['token'] = "627e39cc3fc84ac886dd5511208368e8"
    return inRequest;
  }
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')