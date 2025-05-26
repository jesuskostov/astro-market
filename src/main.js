import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './style.css'
import App from './App.vue'

// Import pages
import Home from './pages/Home.vue'
import Blog from './pages/Blog.vue'

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
})

// Create router
const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Create app
const app = createApp(App)
app.use(router)
app.mount('#app')