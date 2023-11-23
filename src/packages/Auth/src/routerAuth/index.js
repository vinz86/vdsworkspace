import { createRouter, createWebHistory } from 'vue-router'
import Login from "../views/Login.vue";

const routerAuth = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login

    },
    {
      path: '/logout',
      name: 'logout',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Logout.vue')
    }
  ]
})

export default routerAuth
