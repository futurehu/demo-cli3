import Vue from 'vue'
import App from './App.vue'
import {router} from './router';
import store from './store'
import 'amfe-flexible';//设置rem基准值
import './assets/css/reset.less'//移动端初始化样式
import { Button, Cell } from 'vant';
Vue.use(Button)
// 插件导入 注册
import http from  './utils/http'
Vue.use(http)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
