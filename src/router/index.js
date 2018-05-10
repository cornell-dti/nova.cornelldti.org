import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Apply from '@/components/Apply';
import Sponsor from '@/components/Sponsor';
import Project from '@/components/Project';
import Initiatives from '@/components/Initiatives';

import MembersJson from '@/members.json';
import ProjectsJson from '@/projects.json';
import TeamsJson from '@/teams.json';
import RolesJson from '@/roles.json';
import CompaniesJson from '@/companies.json';

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
        companies: CompaniesJson
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
