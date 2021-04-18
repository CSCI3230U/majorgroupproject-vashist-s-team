
import { createRouter, createWebHistory } from 'vue-router'
import signup from '../views/signup.vue'
import login from '../views/login.vue'
import builderPage from '../views/builderPage.vue'
import homepage from '../views/homepage.vue'
import stats from '../views/stats.vue'
import display from '../views/display.vue'

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
    path: '/builderPage',
    name: 'BuilderPage',
    component: builderPage

  },
  {
    path: '/display',
    name: 'Display',
    component: display

  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: homepage

  },
  {
    path: '/stats',
    name: 'Statistics',
    component: stats
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
