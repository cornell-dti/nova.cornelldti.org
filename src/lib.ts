// This is the entry point for the "library" version of the website.
// It is used to render previews in CMS.

import './webpackConfig';

import { VueConstructor } from 'vue';
import Apply from '@/pages/Apply.vue';
import Courses from '@/pages/Courses.vue';
import Index from '@/pages/Index.vue';
import Initiatives from '@/pages/Initiatives.vue';
import NotFound from '@/pages/NotFound.vue';
import Projects from '@/pages/Projects.vue';
import Sponsor from '@/pages/Sponsor.vue';
import Team from '@/pages/Team.vue';

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

import { shared } from '@/shared';

import SingleBackend from '@/strings/lib';
import JSStringsBackend from '@/strings/backends/json';

const Components = {
  About,
  Apply,
  Courses,
  Index,
  Initiatives,
  NotFound,
  Projects,
  Sponsor,
  Team,
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
  shared(Vue);
}

SingleBackend.resolveContext = function(this: JSStringsBackend, context: string, ...args: any[]) {
  const [strings] = args;

  // Allow re-resolving in the library.
  this.map.set(context, strings);

  return this.map.get(context);
};

export { fromJSON } from '@/strings/json';
