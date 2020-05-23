/* eslint-disable @typescript-eslint/ban-ts-ignore */

import './netlifyConfig';

import Vue from 'vue';
// @ts-ignore
import CMS from 'netlify-cms'; // -app/dist/esm
import CMSIdentity from 'netlify-identity-widget';

// @ts-ignore
import { VueInReact } from 'vuera';

// Must run `yarn build:lib` to access lib.
// @ts-ignore
import { initialize, Components } from 'website-components';

import Profile from './preview/profile';
import wrap from './preview/page';

import RolesJSON from '../data/sets/roles.json';
import TeamsJSON from '../data/sets/teams.json';
import CompaniesJSON from '../data/sets/companies.json';

initialize(Vue);

// Vendor Styles (easier to load from unpkg)

CMS.registerPreviewStyle('//unpkg.com/bootstrap/dist/css/bootstrap.min.css');
CMS.registerPreviewStyle('//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css');

// Load our stylesheets (only works in production builds)

// admin/1.css
import('website-components/dist/dti-nova.css').then(() => {
  // As long as this is the only CSS import it will be "admin/1.css"
  CMS.registerPreviewStyle('/admin/1.css');
});

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
const TeamPage = wrap('team', Components.Team, {
  members: [],
  diversity: {
    femalePercentage: {
      '': 0.6,
      business: 0.5,
      developer: 0.5,
      designer: 0.5,
      pm: 0.5
    }
  }
});

// Page Previews
CMS.registerPreviewTemplate('page-apply', VueInReact(ApplyPage));
CMS.registerPreviewTemplate('page-sponsor', VueInReact(SponsorPage));
CMS.registerPreviewTemplate('page-home', VueInReact(HomePage));
CMS.registerPreviewTemplate('page-courses', VueInReact(CoursesPage));
CMS.registerPreviewTemplate('page-initiatives', VueInReact(InitiativesPage));
CMS.registerPreviewTemplate('page-team', VueInReact(TeamPage));

// @ts-ignore
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
