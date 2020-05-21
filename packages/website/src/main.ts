import { VueConstructor } from 'vue';
import VueRouter from 'vue-router';
import 'vue-meta';

import DtiFooter from './components/DtiFooter.vue';
import Give from './components/Give';
import GNavItem from './components/GNavItem';
import PageBackground from './components/PageBackground.vue';
import PageHero from './components/PageHero.vue';
import NovaHero from './components/NovaHero.vue';
import PageSublist from './components/PageSublist.vue';
import TextPageHero from './components/TextPageHero.vue';
import TextHero from './components/TextHero.vue';
import PageSection from './components/PageSection.vue';

import DTIProject from './templates/DTIProject.vue';

import { initializeVue } from './shared';

import CompaniesJSON from '../data/sets/companies.json';
import TeamsJSON from '../data/sets/teams.json';
import RolesJSON from '../data/sets/roles.json';

export default function main(
  Vue: VueConstructor,
  { head, router }: { router: VueRouter; head: { titleTemplate: string } }
) {
  /* eslint-disable no-param-reassign */
  head.titleTemplate = '%s - Cornell DTI';

  router.addRoutes([
    {
      path: '/give',
      component: Give
    }
  ]);

  Vue.component('GNavItem', GNavItem);
  Vue.component('PageSublist', PageSublist);
  Vue.component('DtiFooter', DtiFooter);
  Vue.component('PageBackground', PageBackground);
  Vue.component('PageSection', PageSection);
  Vue.component('PageHero', PageHero);
  Vue.component('NovaHero', NovaHero);
  Vue.component('TextPageHero', TextPageHero);
  Vue.component('TextHero', TextHero);
  Vue.component('DtiProject', DTIProject);

  Vue.mixin({
    methods: {
      getRoles() {
        const { roles } = RolesJSON;
        return roles;
      },
      getTeams() {
        const { teams } = TeamsJSON;
        return teams;
      },
      getCompanies() {
        const { companies } = CompaniesJSON;
        return companies;
      }
    }
  });
  initializeVue(Vue);
}
