// This is the entry point for the "library" version of the website.
// It is used to render previews in CMS.

import './webpackConfig';

import { VueConstructor } from 'vue';
import Apply from '@/views/Apply.vue';
import Courses from '@/views/Courses.vue';
import Home from '@/views/Home.vue';
import Initiatives from '@/views/Initiatives.vue';
import Projects from '@/views/Projects.vue';
import Sponsor from '@/views/Sponsor.vue';
import TeamView from '@/views/Team.vue';

import DtiFooter from '@/components/DtiFooter.vue';
import PageBackground from '@/components/PageBackground.vue';
import PageHero from '@/components/PageHero.vue';
import NovaHero from '@/components/NovaHero.vue';
import PageSublist from '@/components/PageSublist.vue';
import TextPageHero from '@/components/TextPageHero.vue';
import TextHero from '@/components/TextHero.vue';
import PageSection from '@/components/PageSection.vue';
import MemberProfileModal from '@/components/MemberProfileModal.vue';
import DTIProject from '@/templates/DTIProject.vue';

import { initializeVue, AsyncDataset, Company, Role, Team } from '@/shared';

import SingleBackend from '@/strings/lib';
import JSStringsBackend from '@/strings/backends/json';
import Strings from '@/strings/strings';

const Components = {
  Apply,
  Courses,
  Home,
  Initiatives,
  Projects,
  Sponsor,
  Team: TeamView,
  DtiFooter,
  MemberProfileModal,
  PageBackground,
  PageHero,
  NovaHero,
  PageSublist,
  TextPageHero,
  TextHero,
  PageSection,
  DTIProject
};

export { Components };

export function initialize(Vue: VueConstructor) {
  const companiesSet = AsyncDataset.import(() => import('@/../data/sets/companies.json'))
    .accessor<Company[]>(d => d.companies)
    .build();

  const teamsSet = AsyncDataset.import(() => import('@/../data/sets/teams.json'))
    .accessor<Team[]>(d => d.teams)
    .build();

  const rolesSet = AsyncDataset.import(() => import('@/../data/sets/roles.json'))
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

  return [rolesSet.initialize(), teamsSet.initialize(), companiesSet.initialize()];
}

SingleBackend.resolveContext = function resolveContext(
  this: JSStringsBackend,
  context: string,
  ...args: Strings[]
) {
  const [strings] = args;

  // Allow re-resolving in the library.
  this.map.set(context, strings);

  return this.map.get(context);
};

export { fromJSON } from '@/strings/json';
