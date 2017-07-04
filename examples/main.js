import Vue from 'vue'
import router from './router'
import App from './App'
import Mui from '../src/index.js'

Vue.config.productionTip = false

Vue.use(Mui)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
