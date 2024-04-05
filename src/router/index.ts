
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    components: { default: () => import('../pages/HomeView.vue') },
  },
  {
    path: '/categories',
    name: 'categories',
    components: { default: () => import('../pages/CategoryView.vue') },
  },
  {
    path: '/search',
    name: 'search',
    components: { default: () => import('../pages/SearchView.vue') },
  },
  {
    path: '/about',
    name: 'about',
    components: { default: () => import('../pages/AboutView.vue') },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: 'home' },
  }
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), routes
})

export default router
