import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/icon',
      name: 'icon',
      component: require('./pages/icon')
    },
    {
      path: '/card',
      name: 'card',
      component: require('./pages/card')
    }
  ]
})
