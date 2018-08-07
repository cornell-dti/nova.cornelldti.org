// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

/* Node Modules */

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import VueVisual from 'vue-visual';
import VueVisualCSS from 'vue-visual/index.css'; // eslint-disable-line

/* Data */

import Members from '@/data/members.json';
import Companies from '@/data/companies.json';
import Projects from '@/data/projects.json';
import Teams from '@/data/teams.json';
import Roles from '@/data/roles.json';

/* Core Files */

import App from '@/App';
import Strings from '@/data/strings';
import router from '@/router';

/* Global Components */

import DtiMainMenu from '@/components/DtiMainMenu';
import DtiFooter from '@/components/DtiFooter';
import PageBackground from '@/components/PageBackground';
import PageHero from '@/components/PageHero';
import PageSublist from '@/components/PageSublist';
import TextPageHero from '@/components/TextPageHero';
import TextHero from '@/components/TextHero';
import PageSection from '@/components/PageSection';
import BaseLayout from '@/components/BaseLayout';
import StoreBadge from '@/components/StoreBadge';
import Quicklink from '@/components/Quicklink';

Vue.use(BootstrapVue);

Vue.component('visual', VueVisual).options.setDefaults({
  load: 'visible',
  loadPoster: true,
  transition: 'vv-fade'
});

Vue.component('PageSublist', PageSublist);
Vue.component('Quicklink', Quicklink);
Vue.component('BaseLayout', BaseLayout);
Vue.component('DtiMainMenu', DtiMainMenu);
Vue.component('DtiFooter', DtiFooter);
Vue.component('StoreBadge', StoreBadge);
Vue.component('PageBackground', PageBackground);
Vue.component('PageSection', PageSection);
Vue.component('PageHero', PageHero);
Vue.component('TextPageHero', TextPageHero);
Vue.component('TextHero', TextHero);

Vue.mixin({
  data() {
    return {
      Strings
    };
  },
  methods: {
    aws(asset) {
      return `https://s3.us-east-2.amazonaws.com//dti-nova-website/${asset}`;
    },
    getMembers() {
      return Members;
    },
    getRoles() {
      return Roles;
    },
    getProjects() {
      return Projects;
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
  components: { App },
  template: '<App/>'
});
