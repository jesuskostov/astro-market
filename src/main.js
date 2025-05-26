import { createApp } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.css';
import App from './App.vue';
import router from './router';

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true
});

// Create app
const app = createApp(App);
app.use(router);
app.mount('#app');