//Import the main CSS file for the application
import './assets/main.css'

// Import the necessary functions and components from Vue and Pinia
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import the root component of the application
import App from './App.vue'

// Import the router configuration
import router from './router'

// Create a new Vue application instance
const app = createApp(App)

// Use Pinia for state management in the application
app.use(createPinia())

// Use the router configuration in the application
app.use(router)

// Mount the application to the specified element with the ID '#app'
app.mount('#app')
