import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Admin/Home'
import Developers from '@/components/Admin/Developers'
import Positions from '@/components/Admin/Positions'
import Login from '@/components/Admin/Login'
import $ from 'jquery'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/admin',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin/developers',
      name: 'Developers',
      component: Developers
    },
    {
      path: '/admin/positions',
      name: 'Positions',
      component: Positions
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    },
  ],
  mode: 'history',
})
