/* eslint-disable no-param-reassign */

import BootstrapVue from 'bootstrap-vue';

import { VueConstructor } from 'vue';

export { Project, Member, Team, Company, Role } from './types';

export function initializeVue(Vue: VueConstructor): void {
  Vue.use(BootstrapVue);

  Vue.mixin({
    methods: {
      getHeadshot(netid: string) {
        return `/static/members/${netid}.jpg`;
      }
    }
  });
}
