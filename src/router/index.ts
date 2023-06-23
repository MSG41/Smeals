import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

// Create the router instance
const router = createRouter({
  // Set the history mode using createWebHistory and the BASE_URL from the environment
  history: createWebHistory(import.meta.env.BASE_URL),

  // Define the routes
  routes: [
    {
      // Route for the home page
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      // Route for the about page
      path: '/about',
      name: 'about',
      // Lazy-loaded component for code-splitting
      // Generates a separate chunk (About.[hash].js) for this route
      // The chunk is loaded when the route is visited
      component: () => import('../views/AboutView/AboutView.vue')
    },
    {
      // Route for the meal detail page
      path: '/meal/:id',
      name: 'meal-detail',
      component: () => import('../views/MealDetailView/MealDetailView.vue'),
      props: true
    }
  ]
})

export default router
