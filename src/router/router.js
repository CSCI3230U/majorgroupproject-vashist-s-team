
import { createRouter, createWebHistory } from 'vue-router'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import homepage from '../views/builderPage.vue'
import display from '../views/display.vue'
// import builderpage from '../views/builderPage.vue'

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

  },
  {
    path: '/display',
    name: 'Display',
    component: display

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
