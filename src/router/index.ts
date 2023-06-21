import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'
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
      component: () => import('../views/AboutView/AboutView.vue')
    },
    {
      path: '/salim',
      name: 'salim',
      // Lazy loading of this view or page when the route is visited.
      component: () => import('../views/SalimView/SalimView.vue')
    },
    {
      path: '/meal/:id',
      name: 'meal-detail',
      component: () => import('../views/MealDetailView/MealDetailView.vue'),
      props: true
    }
  ]
})

export default router
