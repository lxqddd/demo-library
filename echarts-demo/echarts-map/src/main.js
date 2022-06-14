import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

import { Button, Field, Popup } from 'vant'

Vue.config.productionTip = true

Vue.use(VueAxios, axios)
Vue.use(Button).use(Field).use(Popup)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
