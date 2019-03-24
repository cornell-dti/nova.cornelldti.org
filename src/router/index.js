import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Router from 'vue-router';

import createAsyncPage from '@/components/AsyncComponents';

import DiversityJson from '@/data/diversity.json';

Vue.use(Router);

const dtiRouter = new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [
    {
      path: '*',
      component: createAsyncPage('notfound', () => import('@/pages/NotFound'))
    },
    {
      path: '/',
      name: 'Home',
      component: createAsyncPage('home', () => import('@/pages/Home'))
    },
    {
      path: '/ehub',
      redirect: {
        name: 'Home'
      }
    },
    {
      path: '/Projects/',
      name: 'Projects',
      component: createAsyncPage('projects', () => import('@/pages/Projects'))
    },
    { path: '/cue', redirect: '/Projects/events' },
    {
      path: '/Projects/events',
      name: 'Events',
      component: createAsyncPage('projects.events', () => import('@/pages/projects/Events'))
    },
    {
      path: '/Projects/orientation',
      name: 'Orientation',
      component: createAsyncPage('projects.orientation', () => import('@/pages/projects/Orientation'))
    },
    { path: '/Projects/officehours', redirect: '/Projects/queuemein' },
    {
      path: '/Projects/queuemein',
      name: 'QueueMeIn',
      component: createAsyncPage('projects.queuemein', () => import('@/pages/projects/QueueMeIn'))
    },
    { path: '/Projects/cureviews', redirect: '/Projects/reviews' },
    {
      path: '/Projects/reviews',
      name: 'Reviews',
      component: createAsyncPage('projects.reviews', () => import('@/pages/projects/Reviews'))
    },
    {
      path: '/Projects/researchconnect',
      name: 'Research Connect',
      component: createAsyncPage('projects.researchconnect', () => import('@/pages/projects/ResearchConnect'))
    },
    {
      path: '/Projects/samwise',
      name: 'Samwise',
      component: createAsyncPage('projects.samwise', () => import('@/pages/projects/Samwise'))
    },
    {
      path: '/Projects/shout',
      name: 'Shout',
      component: createAsyncPage('projects.shout', () => import('@/pages/projects/Shout'))
    },
    {
      path: '/Initiatives',
      name: 'Initiatives',
      component: createAsyncPage('initiatives', () => import('@/pages/Initiatives'))
    },
    {
      path: '/Team',
      name: 'Team',
      component: createAsyncPage('team', () => import('@/pages/Team')),
      props: {
        diversity: DiversityJson
      }
    },
    {
      path: '/Sponsor',
      name: 'Sponsor',
      component: createAsyncPage('sponsor', () => import('@/pages/Sponsor'))
    },
    {
      path: '/Courses',
      name: 'Courses',
      component: createAsyncPage('courses', () => import('@/pages/Courses'))
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: createAsyncPage('apply', () => import('@/pages/Apply'))
    }
  ]
});

Vue.use(VueAnalytics, {
  id: ['UA-115896141-1', 'UA-124837875-1'],
  router: dtiRouter
});

export default dtiRouter;
