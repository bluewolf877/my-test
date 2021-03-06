import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test.vue')
  },
  {
    path: '/test2',
    name: 'Test2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test2.vue')
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test3.vue')
  },
  {
    path: '/test4',
    name: 'Test4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test4.vue')
  },
  {
    path: '/test5',
    name: 'Test5',
    component: () => import(/* webpackChunkName: "about" */ '../views/Test5.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
