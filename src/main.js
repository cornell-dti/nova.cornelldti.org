// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* Node Modules */
import Vue from 'vue';

/* CSS for Node Modules */

/* eslint-disable no-unused-vars */

import VueVisualCSS from 'vue-visual/index.css';
import BootstrapVueCSS from 'bootstrap-vue/dist/bootstrap-vue.css';

/* eslint-enable */

/* Core Files */

import App from '@/App';
import router from '@/router';

/* Global Components */

import DtiMainMenu from '@/components/DtiMainMenu';
import DtiFooter from '@/components/DtiFooter';
import PageBackground from '@/components/PageBackground';
import PageHero from '@/components/PageHero';
import NovaHero from '@/components/NovaHero';
import PageSublist from '@/components/PageSublist';
import TextPageHero from '@/components/TextPageHero';
import TextHero from '@/components/TextHero';
import PageSection from '@/components/PageSection';
import StoreBadge from '@/components/StoreBadge';

import AssetStrings from './shared';

Vue.mixin({
  methods: {
    aws(asset) {
      return this.joinPath(
        `https://s3.us-east-2.amazonaws.com/dti-nova-website/static/`,
        `${asset.replace('/public', '')}`
      );
    }
  }
});

Vue.component('PageSublist', PageSublist);
Vue.component('DtiMainMenu', DtiMainMenu);
Vue.component('DtiFooter', DtiFooter);
Vue.component('PageBackground', PageBackground);
Vue.component('PageSection', PageSection);
Vue.component('PageHero', PageHero);
Vue.component('NovaHero', NovaHero);
Vue.component('StoreBadge', StoreBadge);
Vue.component('TextPageHero', TextPageHero);
Vue.component('TextHero', TextHero);

Vue.config.productionTip = false;

const AsyncApp = Vue.component('AsyncApp', () => ({
  component: AssetStrings.initialize().then(() => App),
  timeout: 5000
}));

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  render: h => h(AsyncApp)
});
