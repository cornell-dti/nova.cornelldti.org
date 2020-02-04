import Vue from 'vue';

import About from '@/pages/About.vue';
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
import DTIProject from '@/templates/DTIProject.vue';

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
  PageBackground,
  PageHero,
  NovaHero,
  PageSublist,
  TextPageHero,
  TextHero,
  PageSection,
  DTIProject
};

Object.entries(Components).forEach(([name, component]) => {
  Vue.component(name, component);
});
