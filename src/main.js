import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "@/store";

Vue.config.productionTip = true

new Vue({
  router: router,
  store: store,
  render: h => h(App),
}).$mount('#app')