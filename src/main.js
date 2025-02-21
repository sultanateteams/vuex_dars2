import './assets/main.css'

// import { createApp } from 'vue'
// import App from './App.vue'
import router from './router'

// const app = createApp(App)


// app.mount('#app')


import { createApp } from 'vue';
import App from './App.vue';
import { BootstrapVue3 } from 'bootstrap-vue-3';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router)
app.mount('#app');