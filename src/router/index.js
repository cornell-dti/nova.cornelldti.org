import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Team from '@/components/Team';
import Apply from '@/components/Apply';
import Sponsor from '@/components/Sponsor';
import MembersJson from '@/members.json';
import ProjectsJson from '@/projects.json';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/Projects',
      name: 'Projects',
      component: Projects,
      props: { projects: ProjectsJson }
    },
    {
      path: '/Team',
      name: 'Team',
      component: Team,
      props: { members: MembersJson }
    },
    {
      path: '/Sponsor',
      name: 'Sponsor',
      component: Sponsor,
    },
    {
      path: '/Apply',
      name: 'Apply',
      component: Apply,
    }
  ],
});
