import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Team from '@/pages/Team';
import Apply from '@/pages/Apply';
import Sponsor from '@/pages/Sponsor';
import Project from '@/pages/Project';
import Initiatives from '@/pages/Initiatives';
import NotFound from '@/pages/NotFound';

import DiversityJson from '@/data/diversity.json';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '*', component: NotFound },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/Projects/:project',
      component: Project,
      props: route => ({
        project: route.params.project
      })
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
