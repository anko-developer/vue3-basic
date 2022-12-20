// main.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'virtual:svg-icons-register';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/routes';
// import focus from '@/directives/focus';
import globalDirectives from './plugins/global-directives';
import dayjs from './plugins/dayjs';
// import person from './plugins/person';
// import globalComponents from './plugins/global-components';

const app = createApp(App);
// app.use(globalComponents);
// app.use(person);
// app.directive('focus', focus);
app.use(globalDirectives);
app.use(dayjs);
app.use(router);
app.mount('#app');

// console.log(import.meta.env.VITE_APP_API_URL);
