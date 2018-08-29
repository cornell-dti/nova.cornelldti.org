import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Team from '@/pages/Team';
import Apply from '@/pages/Apply';
import Sponsor from '@/pages/Sponsor';
import Initiatives from '@/pages/Initiatives';
import NotFound from '@/pages/NotFound';

import Events from '@/pages/projects/Events';
import Orientation from '@/pages/projects/Orientation';
import QueueMeIn from '@/pages/projects/QueueMeIn';
import Reviews from '@/pages/projects/Reviews';
import Samwise from '@/pages/projects/Samwise';
import Shout from '@/pages/projects/Shout';
import ResearchConnect from '@/pages/projects/ResearchConnect';

import DiversityJson from '@/data/diversity.json';

Vue.use(Router);
Vue.use(VueAnalytics, {
  id: 'UA-115896141-1',
  Router
});

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projects/',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Projects/events',
      name: 'Events',
      component: Events
    },
    {
      path: '/Projects/orientation',
      name: 'Orientation',
      component: Orientation
    },
    { path: '/Projects/officehours', redirect: '/Projects/queuemein' },
    {
      path: '/Projects/queuemein',
      name: 'QueueMeIn',
      component: QueueMeIn
    },
    { path: '/Projects/cureviews', redirect: '/Projects/reviews' },
    {
      path: '/Projects/reviews',
      name: 'Reviews',
      component: Reviews
    },
    {
      path: '/Projects/researchconnect',
      name: 'Research Connect',
      component: ResearchConnect
    },
    {
      path: '/Projects/samwise',
      name: 'Samwise',
      component: Samwise
    },
    {
      path: '/Projects/shout',
      name: 'Shout',
      component: Shout
    },
    {
      path: '/Initiatives',
      name: 'Initiatives',
      component: Initiatives
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team,
      props: {
        diversity: DiversityJson
      }
    },
    {
      path: '/Sponsor',
      name: 'Sponsor',
      component: Sponsor
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: Apply
    }
  ]
});
