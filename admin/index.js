import './netlifyConfig';

import Vue from 'vue';
import CMS from 'netlify-cms'; // -app/dist/esm
import CMSIdentity from 'netlify-identity-widget';

import { VueInReact } from 'vuera';

// Must run `yarn build:lib` to access lib.
import { initialize, Components } from './lib/dti-nova.common';

import Profile from './preview/profile';
import wrap from './preview/page';

import('./lib/dti-nova.common.1');
import('./lib/dti-nova.common.2');
import('./lib/dti-nova.common.3');
import('./lib/dti-nova.common.4');

initialize(Vue);

// Vendor Styles (easier to load from unpkg)

CMS.registerPreviewStyle('//unpkg.com/bootstrap/dist/css/bootstrap.min.css');
CMS.registerPreviewStyle('//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css');

// Load our stylesheets (only works in production builds)

CMS.registerPreviewStyle('/admin/lib/dti-nova.css');

// Custom Component Previews
CMS.registerPreviewTemplate('member', VueInReact(Profile));

const {
  PageSublist,
  PageBackground,
  PageSection,
  PageHero,
  NovaHero,
  TextPageHero,
  TextHero,
  DTIProject
} = Components;

// Fix the lack of vue-router in Netlify CMS previews
Vue.prototype.$route = { name: 'Preview', path: 'nowhere/' };

Vue.component('PageSublist', PageSublist);
Vue.component(
  'DtiFooter',
  Vue.extend({
    render(h) {
      return h('div');
    }
  })
);
Vue.component('PageBackground', PageBackground);
Vue.component('PageSection', PageSection);
Vue.component('PageHero', PageHero);
Vue.component('NovaHero', NovaHero);
Vue.component('TextPageHero', TextPageHero);
Vue.component('TextHero', TextHero);
Vue.component('DtiProject', DTIProject);

const ApplyPage = wrap('apply', Components.Apply);
const SponsorPage = wrap('sponsor', Components.Sponsor);
const HomePage = wrap('home', Components.Home);
const CoursesPage = wrap('courses', Components.Courses);
const InitiativesPage = wrap('initiatives', Components.Initiatives);
const ProjectsPage = wrap('projects', Components.Projects);

// Page Previews
CMS.registerPreviewTemplate('page-apply', VueInReact(ApplyPage));
CMS.registerPreviewTemplate('page-sponsor', VueInReact(SponsorPage));
CMS.registerPreviewTemplate('page-home', VueInReact(HomePage));
CMS.registerPreviewTemplate('page-courses', VueInReact(CoursesPage));
CMS.registerPreviewTemplate('page-initiatives', VueInReact(InitiativesPage));
CMS.registerPreviewTemplate('page-projects', VueInReact(ProjectsPage));

window.netlifyIdentity = CMSIdentity;

CMSIdentity.on('init', () => {
  if (!CMSIdentity.currentUser) {
    CMSIdentity.open();
  }
});

CMSIdentity.on('error', err => {
  // eslint-disable-next-line no-console
  console.error(err);
});

CMSIdentity.init();
CMS.init();
