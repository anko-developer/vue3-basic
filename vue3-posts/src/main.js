// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/routes';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(globalDirectives);
app.use(dayjs);
app.use(pinia);
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
