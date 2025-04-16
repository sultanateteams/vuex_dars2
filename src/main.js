import "./assets/main.css";

import router from "./router";
import store from "./story";

import { createApp } from "vue";
import App from "./App.vue";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.min.css";

const app = createApp(App);
app.use(BootstrapVue3);
app.use(router);
app.use(store);
app.mount("#app");
