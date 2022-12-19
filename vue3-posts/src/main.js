// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes';

createApp(App).use(router).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log(import.meta.env.VITE_APP_API_URL);