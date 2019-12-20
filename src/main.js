// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import globalMethods from '@public/globalMethods.js'
import utils from '@public/utils'
import configData from '../static/config.json'
// 注册全局方法
Vue.use(globalMethods)

window._CONFIG_ = configData
axios.defaults.baseURL = configData.server

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
