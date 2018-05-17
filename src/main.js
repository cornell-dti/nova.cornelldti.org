// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* Node Modules */

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

/* Data */

import LoremIpsumJson from '@/data/loremipsum.json';

/* Core Files */

import App from '@/App';
import router from '@/router';

/* Global Components */

import DtiMainMenu from '@/components/DtiMainMenu';
import DtiFooter from '@/components/DtiFooter';
import PageBackground from '@/components/PageBackground';
import PageHero from '@/components/PageHero';
import TextPageHero from '@/components/TextPageHero';
import PageSection from '@/components/PageSection';
import BaseLayout from '@/components/BaseLayout';
import StoreBadge from '@/components/StoreBadge';

Vue.use(BootstrapVue);

Vue.component('BaseLayout', BaseLayout);
Vue.component('DtiMainMenu', DtiMainMenu);
Vue.component('DtiFooter', DtiFooter);
Vue.component('StoreBadge', StoreBadge);
Vue.component('PageBackground', PageBackground);
Vue.component('PageSection', PageSection);
Vue.component('PageHero', PageHero);
Vue.component('TextPageHero', TextPageHero);

Vue.mixin({
  data() {
    return {
      ipsumText: LoremIpsumJson[0]
    };
  },
  methods: {
    ipsum(text, amount = 50) {
      if (typeof text === 'undefined' || text === null || text === '') {
        return `${this.ipsumText.substr(
          0,
          Math.min(amount, this.ipsumText.length - 1)
        )}...`;
      }

      return text;
    },
    ipsum_def(amount = 50) {
      return this.ipsum(null, amount);
    },
    img(type, name) {
      return `/static/img/${type}/${name}`; //eslint-disable-line
    },
    vid(type, name) {
      return `/static/vid/${type}/${name}`; //eslint-disable-line
    }
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
