import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import router from './router'
import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  store,
  router,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')