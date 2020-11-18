import Vue from 'vue'
import App from './App.vue'
import {
  router
} from './router';
import store from './store'
import 'amfe-flexible'; //设置rem基准值
import './assets/css/reset.less' //移动端初始化样式
import {
  getUrlParam,
  browser,
} from './utils/tools'
import Util from './utils/tools'
Vue.prototype.Util = Util;
Vue.prototype.getUrlParam = getUrlParam; //获取地址栏参数
Vue.prototype.browser = browser; //获取设备信息
import {
  Button,
  Cell,
  NavBar,
  Tag,
  CellGroup,
  Field,
  Collapse,
  CollapseItem,
  List,
  PullRefresh,
  Tabs,
  Tab,
  Icon
} from 'vant';
Vue.use(Button).use(Cell).use(NavBar).use(Icon).use(Tag).use(CellGroup).use(Field).use(Collapse).use(CollapseItem).use(List).use(PullRefresh).use(Tab).use(Tabs);
// 插件导入 注册
import http from './utils/http'
Vue.use(http, {
  baseURL: '', //基路径
  timeout: 5000, //请求超时时间
  //请求拦截器
  inRequest: (inRequest) => {
    // console.log('inRequest', inRequest.headers)
    inRequest.headers['Authorization'] = "Bearer b9d7a3a2-200e-48f9-816c-da0255eea361"
    return inRequest;
  }
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')