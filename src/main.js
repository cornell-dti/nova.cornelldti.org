// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue'
import App from './App';
import router from './router';
import DtiMainMenu from './components/DtiMainMenu.vue'
import DataJson from './data.json'

Vue.use(BootstrapVue);

Vue.component('DtiMainMenu', DtiMainMenu);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: DataJson
});
