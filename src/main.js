import Vue from 'vue'
import './plugins/vuetify'
import './stylus/main.styl'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
