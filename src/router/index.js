import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
