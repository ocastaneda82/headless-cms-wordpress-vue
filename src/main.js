import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import VueRouter from "vue-router";
import store from "./store/index.js";

Vue.use(VueRouter);

import App from "./App.vue";
import router from "./router/index.js";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
