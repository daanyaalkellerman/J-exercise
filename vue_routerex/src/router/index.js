//manage our navigation
import { createRouter, createWebHashHistory } from 'vue-router'//reloads the history createWebHashHistory it wont pick up  new data so refresh
import HomeView from '../views/HomeView.vue'
import PersonalView from '../views/PersonalView.vue'
import PersonalInfo from '../views/PersonalInfo.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    //do it lazy baby its easier
    // component: () => import('../views/PersonalView.vue')
    component: PersonalView
  },
  {//placeholder for where a number may be ':id'
    path: '/personal/:id',
    name: 'personalinfo',
    component: PersonalInfo,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
