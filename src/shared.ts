/* Node Modules */
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import ImgixClient from 'imgix-core-js';

/* Data */

import Members from '#/generated/members.json';
import Companies from '#/sets/companies.json';
import Teams from '#/sets/teams.json';
import Roles from '#/sets/roles.json';

/* Core Files */

import StringsFrontend from '@/data/strings/strings';
import SingleBackend from '@/data/strings/lib';

const AssetStrings = new StringsFrontend('assets', SingleBackend);

const Images = new ImgixClient({
  domain: 'cornelldti.imgix.net'
});

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
      const url = [] as string[];

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
    aws(asset = '', extension = '') {
      if (!asset) {
        return '';
      }

      if (extension) {
        return Images.buildURL(
          asset.replace(/^\/public/, '/static').replace(/\.(.*?)$/, `.${extension}`)
        );
      }

      return Images.buildURL(asset.replace(/^\/public/, '/static'));
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

export interface Member {
  netid: string;
  name: string;
  firstName: string;
  lastName: string;
  isLead?: boolean;
  roleId: string;
  otherSubteams?: string[];
  subteam: string;
}

export interface Role {
  name: string;
  id: string;
}

export interface Team {
  name: string;
  id: string;
}

export interface Company {
  name: string;
  id: string;
}

declare module 'vue/types/vue' {
  // 3. Declare augmentation for Vue
  interface Vue {
    getCompanies(): Company[];
    getTeams(): Team[];
    getRoles(): Role[];
    getMembers(): Member[];
    joinPath(...paths: string[]): string;
    Strings: StringsFrontend;
  }
}

Vue.use(BootstrapVue);

export default AssetStrings;
