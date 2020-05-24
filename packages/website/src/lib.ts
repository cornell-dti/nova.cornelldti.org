// This is the entry point for the "library" version of the website.
// It is used to render previews in CMS.

import './webpackConfig';

import { VueConstructor } from 'vue';
import Apply from './views/Apply.vue';
import Courses from './views/Courses.vue';
import Home from './views/Home.vue';
import Initiatives from './views/Initiatives.vue';
import Projects from './views/Projects.vue';
import Sponsor from './views/Sponsor.vue';
import TeamView from './views/Team.vue';

import DtiFooter from './components/DtiFooter.vue';
import PageBackground from './components/PageBackground.vue';
import PageHero from './components/PageHero.vue';
import NovaHero from './components/NovaHero.vue';
import PageSublist from './components/PageSublist.vue';
import TextPageHero from './components/TextPageHero.vue';
import TextHero from './components/TextHero.vue';
import PageSection from './components/PageSection.vue';
import MemberProfile from './components/MemberProfile.vue';
import DTIProject from './templates/DTIProject.vue';

import { initializeVue } from './shared';

const Components = {
  Apply,
  Courses,
  Home,
  Initiatives,
  Projects,
  Sponsor,
  Team: TeamView,
  DtiFooter,
  MemberProfile,
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
  initializeVue(Vue);
}
