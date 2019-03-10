import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Router from 'vue-router';

import { AsyncHome, AsyncProjects, AsyncTeam, AsyncApply, AsyncCourses, AsyncInitiatives,
  AsyncSponsor, AsyncNotFound, AsyncEvents, AsyncOrientation, AsyncQueueMeIn,
  AsyncResearchConnect, AsyncReviews, AsyncSamwise, AsyncShout } from '@/components/AsyncComponents';

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
      component: AsyncNotFound
    },
    {
      path: '/',
      name: 'Home',
      component: AsyncHome
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
      component: AsyncProjects
    },
    { path: '/cue', redirect: '/Projects/events' },
    {
      path: '/Projects/events',
      name: 'Events',
      component: AsyncEvents
    },
    {
      path: '/Projects/orientation',
      name: 'Orientation',
      component: AsyncOrientation
    },
    { path: '/Projects/officehours', redirect: '/Projects/queuemein' },
    {
      path: '/Projects/queuemein',
      name: 'QueueMeIn',
      component: AsyncQueueMeIn
    },
    { path: '/Projects/cureviews', redirect: '/Projects/reviews' },
    {
      path: '/Projects/reviews',
      name: 'Reviews',
      component: AsyncReviews
    },
    {
      path: '/Projects/researchconnect',
      name: 'Research Connect',
      component: AsyncResearchConnect
    },
    {
      path: '/Projects/samwise',
      name: 'Samwise',
      component: AsyncSamwise
    },
    {
      path: '/Projects/shout',
      name: 'Shout',
      component: AsyncShout
    },
    {
      path: '/Initiatives',
      name: 'Initiatives',
      component: AsyncInitiatives
    },
    {
      path: '/Team',
      name: 'Team',
      component: AsyncTeam,
      props: {
        diversity: DiversityJson
      }
    },
    {
      path: '/Sponsor',
      name: 'Sponsor',
      component: AsyncSponsor
    },
    {
      path: '/Courses',
      name: 'Courses',
      component: AsyncCourses
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: AsyncApply
    }
  ]
});

Vue.use(VueAnalytics, {
  id: ['UA-115896141-1', 'UA-124837875-1'],
  router: dtiRouter
});

export default dtiRouter;
