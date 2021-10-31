import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import laspalmasRouter from '@/modules/las-palmas/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/laspalmas',
    ...laspalmasRouter
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../modules/las-palmas/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
})

export default router
