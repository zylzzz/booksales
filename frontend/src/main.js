import Vue from 'vue'
import App from './App.vue'
import api from './api/index' // 引用api文件

Vue.config.productionTip = false;
Vue.prototype.$api = api; // 将api方法绑定到全局


new Vue({
  el: '#app',
  render: h => h(App),
}).$mount('#app');
