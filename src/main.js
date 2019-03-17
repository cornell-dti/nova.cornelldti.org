// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* Node Modules */
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import VueVisual from 'vue-visual';

/* CSS for Node Modules */

/* eslint-disable no-unused-vars */

import VueVisualCSS from 'vue-visual/index.css';
import BootstrapVueCSS from 'bootstrap-vue/dist/bootstrap-vue.css';

/* eslint-enable */

/* Data */

import Members from '@/data/strings/members-sp19.json';
import Companies from '@/data/companies.json';
import Teams from '@/data/strings/teams.json';
import Roles from '@/data/roles.json';

/* Core Files */

import App from '@/App';
import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings';
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

const AssetStrings = new StringsFrontend('assets', SingleBackend);

Vue.use(BootstrapVue);

Vue.component('visual', VueVisual).options.setDefaults({
  load: 'visible',
  loadPoster: true,
  transition: 'vv-fade'
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

Vue.mixin({
  data() {
    return {
      AssetStrings
    };
  },
  methods: {
    joinPath(...parts) {
      const first = parts[0].split('://');
      const beginning = first[0];
      const url = [];

      if (first.length > 1) {
        url.push(`${beginning}://`);
        const slice = first.slice(1);
        url.push(...slice.join('://').split('/').filter(value => value !== ''));
      } else {
        url.push(`${beginning}`);
        url.push(...beginning.split('/').filter(value => value !== ''));
      }

      url.push(...parts
        .slice(1)
        .join('/')
        .split('/')
        .filter(value => value !== '')
      );

      return url.join('/');
    },
    aws(asset) {
      return this.joinPath(`https://s3.us-east-2.amazonaws.com/dti-nova-website/`, `${asset}`);
    },
    getMembers() {
      return Members;
    },
    getRoles() {
      return Roles;
    },
    getTeams() {
      return Teams;
    },
    getCompanies() {
      return Companies;
    }
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App: () => ({
      component: AssetStrings.initialize().then(() => App),
      timeout: 3000
    })
  },
  template: '<App/>'
});
