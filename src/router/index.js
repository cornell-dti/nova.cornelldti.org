import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import Team from '@/pages/Team';
import Apply from '@/pages/Apply';
import Sponsor from '@/pages/Sponsor';
import Project from '@/pages/Project';
import Initiatives from '@/pages/Initiatives';

import MembersJson from '@/data/members.json';
import ProjectsJson from '@/data/projects.json';
import TeamsJson from '@/data/teams.json';
import RolesJson from '@/data/roles.json';
import CompaniesJson from '@/data/companies.json';
import DiversityJson from '@/data/diversity.json';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects,
      props: {
        projects: ProjectsJson
      }
    },
    {
      path: '/Projects/:project',
      component: Project,
      props: route => ({
        project: route.params.project,
        projects: ProjectsJson,
        teams: TeamsJson
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
        members: MembersJson,
        teams: TeamsJson,
        roles: RolesJson,
        companies: CompaniesJson,
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
