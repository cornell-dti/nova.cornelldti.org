// TODO Unify this and main.js

import Vue from 'vue';

import VueVisual from 'vue-visual';
import BootstrapVue from 'bootstrap-vue';

/* CSS for Node Modules */

/* eslint-disable no-unused-vars */

import VueVisualCSS from 'vue-visual/index.css';
import BootstrapVueCSS from 'bootstrap-vue/dist/bootstrap-vue.css';

/* eslint-enable */

import StringsFrontend from '../src/data/strings/strings';
import SingleBackend from '../src/data/strings/lib';

import Members from '#/generated/members.json';
import Companies from '#/sets/companies.json';
import Teams from '#/sets/teams.json';
import Roles from '#/sets/roles.json';

import DtiMainMenu from '@/components/DtiMainMenu';
import PageBackground from '@/components/PageBackground';
import PageHero from '@/components/PageHero';
import NovaHero from '@/components/NovaHero';
import PageSublist from '@/components/PageSublist';
import TextPageHero from '@/components/TextPageHero';
import TextHero from '@/components/TextHero';
import PageSection from '@/components/PageSection';
import StoreBadge from '@/components/StoreBadge';

import DtiFooter from './fillers/DtiFooter';

const AssetStrings = new StringsFrontend('assets', SingleBackend);

// polyfill because the CMS lacks Vue Router
Vue.prototype.$route = { name: 'Preview', path: 'nowhere/' };

Vue.mixin({
  data() {
    return {
      AssetStrings
    }
  },
  methods: {
    joinPath(...parts) {
      const first = parts[0].split('://');
      const beginning = first[0];
      const url = [];

      if (first.length > 1) {
        url.push(`${beginning}://`);
        const slice = first.slice(1);
        url.push(
          ...slice
            .join('://')
            .split('/')
            .filter(value => value !== '')
        );
      } else {
        url.push(`${beginning}`);
        url.push(...beginning.split('/').filter(value => value !== ''));
      }

      url.push(
        ...parts
          .slice(1)
          .join('/')
          .split('/')
          .filter(value => value !== '')
      );

      return url.join('/');
    },
    aws(asset) {
      // Prevent issuesfor now...
      if (!asset) {
        return '';
      }
      return this.joinPath(
        `https://s3.us-east-2.amazonaws.com/dti-nova-website/static/`,
        `${asset.replace('/public', '')}`
      );
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

Vue.config.productionTip = false;