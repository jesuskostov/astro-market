import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Blog from '../pages/Blog.vue';
import PaymentFlow from '../components/PaymentFlow.vue';

const routes = [
  { 
    path: '/', 
    name: 'home',
    component: Home 
  },
  { 
    path: '/blog', 
    name: 'blog',
    component: Blog 
  },
  { 
    path: '/subscribe', 
    name: 'subscribe',
    component: PaymentFlow 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return { top: 0, behavior: 'smooth' };
  }
});

export default router;