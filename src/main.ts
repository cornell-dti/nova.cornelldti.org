// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* Node Modules */
import Vue from 'vue';

/* CSS for Node Modules */

/* eslint-disable @typescript-eslint/ban-ts-ignore */
// @ts-ignore

/* eslint-enable */

/* Core Files */

import App from '@/App.vue';
import router from '@/router';

/* Global Components */

import DtiMainMenu from '@/components/DtiMainMenu.vue';
import DtiFooter from '@/components/DtiFooter.vue';
import PageBackground from '@/components/PageBackground.vue';
import PageHero from '@/components/PageHero.vue';
import NovaHero from '@/components/NovaHero.vue';
import PageSublist from '@/components/PageSublist.vue';
import TextPageHero from '@/components/TextPageHero.vue';
import TextHero from '@/components/TextHero.vue';
import PageSection from '@/components/PageSection.vue';
import StoreBadge from '@/components/StoreBadge.vue';

import AssetStrings from './shared';

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
