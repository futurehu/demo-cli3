import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'ant-design-vue/dist/antd.css'
import '@/common/css/base.css'
import { Button, Cell } from 'vant';
Vue.use(Button)
// 插件导入 注册
import http from  './utils/http'
Vue.use(http)
Vue.config.productionTip = false
// import { Button, message,Select  } from 'ant-design-vue'
// Vue.use(Button).use(Select)
// Vue.prototype.$message = message
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
