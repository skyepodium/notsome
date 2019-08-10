import Vue from 'vue'
import App from './App.vue'
import { router } from '@/routes/index.js'
import { store } from '@/store/index.js'
import VuePageTransition from 'vue-page-transition'
Vue.config.productionTip = false
Vue.use(VuePageTransition)
import 'normalize.css'

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
