/* eslint-disable no-unused-vars */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './VueResource/index'
import md5 from 'js-md5'
import 'nx-card/dist/nx-card.css'
import NxCard from 'nx-card/dist/nx-card.common'
import vuetify from './vuetify/index' 

Vue.use(NxCard)
Vue.config.productionTip = false
Vue.prototype.$md = require('markdown-it')(); // 引入md插件
Vue.prototype.md5 = md5

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
