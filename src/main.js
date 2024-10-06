// main.js (or your main entry file)
import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
import router from './router'; // Import the router

// Create the app and use bootstrap and router
createApp(App)
  .use(bootstrap)
  .use(router) // Use the router
  .mount('#app');
