import Vue from 'vue'
import Router from 'vue-router'
import weeklyHome from '@views/weeklyHome'
import monthHome from '@views/monthHome'
import login from '@views/login'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: {
        isPrint:false
      }
    },
    {
      path: '/weeklyhome/:year/:zq',
      name: 'weeklyHome',
      component: weeklyHome,
      meta: {
        isPrint:true
      }
    },
    {
      path: '/monthhome/:year/:zq/:status',
      name: 'monthHome',
      component: monthHome,
      meta: {
          isPrint:true
      }
    },
    // 404
    {
      path: "*",
      redirect: "/"
    }
  ]
})
