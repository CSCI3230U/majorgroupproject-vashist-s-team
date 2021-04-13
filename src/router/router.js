
import { createRouter, createWebHistory } from 'vue-router'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import homepage from '../views/homepage.vue'

const routes = [
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/login',
    name: 'Login',
    component: login

  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: homepage

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
