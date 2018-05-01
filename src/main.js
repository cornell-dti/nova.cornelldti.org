// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App";
import router from "./router";
import DtiMainMenu from "./components/DtiMainMenu";
import DataJson from "./data.json";

Vue.use(BootstrapVue);

Vue.component("DtiMainMenu", DtiMainMenu);

Vue.component(
  "AppStoreBadge",
  `<template>
  <b-img src='static/app-store-download-badge.svg'>
  <a :href='url' />
  </b-img>
  </template>
  <script>
  export default { props: { url: String }}
  </script>`
);
Vue.component(
  "PlayStoreBadge",
  `<template><b-img src='static/google-play-badge.svg'><a :href='url' /></b-img></template><script>export default { props: { url: String }} </script>`
);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  data: DataJson
});
