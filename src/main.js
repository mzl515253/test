import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS


import api from './http/api';

Vue.use(iView);
Vue.config.productionTip = false
//把api挂载在this 上
Vue.prototype.$api=api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
