import Vue from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import store from "../src/store/index"
// router.beforeEach((to,from,next)=>{
//   if(to.path=="/c")
//   alert(登录才能查看)
// })


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
