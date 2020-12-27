import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import header from '@/components/common/header'
import index from '@/components/view/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    }
  ]
})
