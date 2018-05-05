// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import router from "./router";
import DtiMainMenu from "./components/DtiMainMenu";

import BaseLayout from "./components/BaseLayout";
import StoreBadge from "./components/StoreBadge";
import DataJson from "./data.json";

Vue.use(BootstrapVue);

Vue.component("BaseLayout", BaseLayout);
Vue.component("DtiMainMenu", DtiMainMenu);
Vue.component("StoreBadge", StoreBadge);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  data: DataJson
});
