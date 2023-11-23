import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import routerAuth from 'auth/src/routerAuth'
import routerPosts from 'posts/src/routerPosts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    ...routerPosts.getRoutes(),
    ...routerAuth.getRoutes(),
  ]
})

export default router
