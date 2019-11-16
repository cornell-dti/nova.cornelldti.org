/* Node Modules */
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import VueVisual from 'vue-visual';

/* Data */

import Members from '#/generated/members.json';
import Companies from '#/sets/companies.json';
import Teams from '#/sets/teams.json';
import Roles from '#/sets/roles.json';

/* Core Files */

import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings/lib';

const AssetStrings = new StringsFrontend('assets', SingleBackend);

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
    getMembers() {
      return Members;
    },
    getRoles() {
      return Roles.roles;
    },
    getTeams() {
      return Teams.teams;
    },
    getCompanies() {
      return Companies.companies;
    }
  }
});

Vue.use(BootstrapVue);

Vue.component('visual', VueVisual).options.setDefaults({
  load: 'visible',
  loadPoster: true,
  transition: 'vv-fade'
});

export default AssetStrings;
