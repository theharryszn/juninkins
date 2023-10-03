import { createRouter, createWebHistory } from 'vue-router'
import IndeexView from '../views/IndexView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndeexView
    }
  ]
})

export default router
