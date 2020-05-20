import { VueConstructor } from 'vue';
import VueRouter from 'vue-router';
import 'vue-meta';

import DtiFooter from '@/components/DtiFooter.vue';
import Give from '@/components/Give';
import PageBackground from '@/components/PageBackground.vue';
import PageHero from '@/components/PageHero.vue';
import NovaHero from '@/components/NovaHero.vue';
import PageSublist from '@/components/PageSublist.vue';
import TextPageHero from '@/components/TextPageHero.vue';
import TextHero from '@/components/TextHero.vue';
import PageSection from '@/components/PageSection.vue';

import DTIProject from '@/templates/DTIProject.vue';

import { Role, Team, Company, AsyncDataset, initializeVue } from '@/shared';

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

  Vue.component('PageSublist', PageSublist);
  Vue.component('DtiFooter', DtiFooter);
  Vue.component('PageBackground', PageBackground);
  Vue.component('PageSection', PageSection);
  Vue.component('PageHero', PageHero);
  Vue.component('NovaHero', NovaHero);
  Vue.component('TextPageHero', TextPageHero);
  Vue.component('TextHero', TextHero);
  Vue.component('DtiProject', DTIProject);

  const companiesSet = AsyncDataset.import(() =>
    import(/* webpackPrefetch: true */ '@/../data/sets/companies.json')
  )
    .accessor<Company[]>(d => d.companies)
    .build();

  const teamsSet = AsyncDataset.import(() =>
    import(/* webpackPrefetch: true */ '@/../data/sets/teams.json')
  )
    .accessor<Team[]>(d => d.teams)
    .build();

  const rolesSet = AsyncDataset.import(() =>
    import(/* webpackPrefetch: true */ '@/../data/sets/roles.json')
  )
    .accessor<Role[]>(d => d.roles)
    .build();

  Vue.mixin({
    methods: {
      getRoles() {
        return rolesSet.get();
      },
      getTeams() {
        return teamsSet.get();
      },
      getCompanies() {
        return companiesSet.get();
      }
    }
  });

  initializeVue(Vue);

  return [companiesSet.initialize(), teamsSet.initialize(), rolesSet.initialize()];
}
