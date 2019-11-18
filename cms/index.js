import './netlifyConfig';
import './vue';

import { VueInReact } from 'vuera';

import CMS from 'netlify-cms'; // -app/dist/esm
import CMSIdentity from 'netlify-identity-widget';

import Apply from '@/pages/Apply';
import Sponsor from '@/pages/Sponsor';
import Home from '@/pages/Home';
import Courses from '@/pages/Courses';
import Initiatives from '@/pages/Initiatives';
import Projects from '@/pages/Projects';

import Profile from './previews/profile.jsx';
import wrap from './preview';

// Page Wrappers

const ApplyPage = wrap('apply', Apply);
const SponsorPage = wrap('sponsor', Sponsor);
const HomePage = wrap('home', Home);
const CoursesPage = wrap('courses', Courses);
const InitiativesPage = wrap('initiatives', Initiatives);
const ProjectsPage = wrap('projects', Projects);

// Page Previews
CMS.registerPreviewTemplate('page-apply', VueInReact(ApplyPage));
CMS.registerPreviewTemplate('page-sponsor', VueInReact(SponsorPage));
CMS.registerPreviewTemplate('page-home', VueInReact(HomePage));
CMS.registerPreviewTemplate('page-courses', VueInReact(CoursesPage));
CMS.registerPreviewTemplate('page-initiatives', VueInReact(InitiativesPage));
CMS.registerPreviewTemplate('page-projects', VueInReact(ProjectsPage));

// Custom Component Previews
CMS.registerPreviewTemplate('member', VueInReact(Profile));

// Vendor Styles (easier to load from unpkg)

CMS.registerPreviewStyle('//unpkg.com/bootstrap/dist/css/bootstrap.min.css');
CMS.registerPreviewStyle('//unpkg.com/bootstrap-vue@latest/dist/bootstrap-vue.min.css');

// Load our stylesheets (only works in production builds)

CMS.registerPreviewStyle('/admin/css/chunk-vendors.css');
CMS.registerPreviewStyle('/admin/css/cms.css');

window.netlifyIdentity = CMSIdentity;

CMSIdentity.on('init', () => {
  if (!CMSIdentity.currentUser) {
    CMSIdentity.open();
  } else {
    CMS.init();
  }
});

CMSIdentity.init();
