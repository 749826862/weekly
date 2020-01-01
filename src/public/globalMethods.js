'use strict'
// 引入外部文件和第三方依赖
import Vue from 'vue'
import eventBus from '@public/eventBus.js'
import 'echarts-gl'
import '@public/componentRegister.js'
import Print from '@public/print.js'   //打印库

// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import 'swiper/dist/css/swiper.min.css'
// const $ = window.$
// eventbus事件栈
Vue.use(eventBus)
Vue.use(Print) // 注册
// Vue.use(ElementUI)
export default {}
