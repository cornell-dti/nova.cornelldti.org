// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const path = require('path');

module.exports = {
  siteName: 'Cornell Design & Tech Initiative',
  outputDir: '../../dist',
  templates: {
    DTIProject: '/projects/:teamId_raw',
    Member: '/members/:netid_raw',
    HomeEntry: [{
      name: 'Home',
      path: '/',
      component: './src/entries/Home.vue'
    }],
    TeamEntry: [{
      name: 'Team',
      path: '/team',
      component: './src/entries/Team.vue'
    }],
    InitiativesEntry: [{
      name: 'Initiatives',
      path: '/initiatives',
      component: './src/entries/Initiatives.vue'
    }],
    ProjectsEntry: [{
      name: 'Projects',
      path: '/projects',
      component: './src/entries/Projects.vue'
    }],
    SponsorEntry: [{
      name: 'Sponsor',
      path: '/sponsor',
      component: './src/entries/Sponsor.vue'
    }],
    CoursesEntry: [{
      name: 'Courses',
      path: '/courses',
      component: './src/entries/Courses.vue'
    }],
    ApplyEntry: [{
      name: 'Apply',
      path: '/apply',
      component: './src/entries/Apply.vue'
    }],
  },
  plugins: [
    {
      use: path.resolve(__dirname, 'plugins/json.js')
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'DTIProject',
        path: './data/projects/*.json',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Member',
        path: './data/generated/members/*.json',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'HomeEntry',
        path: './data/generated/pages/home.json',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'TeamEntry',
        path: './data/generated/pages/team.json',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'CoursesEntry',
        path: './data/generated/pages/courses.json',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'InitiativesEntry',
        path: './data/generated/pages/initiatives.json',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ProjectsEntry',
        path: './data/generated/pages/projects.json',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'SponsorEntry',
        path: './data/generated/pages/sponsor.json',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ApplyEntry',
        path: './data/generated/pages/apply.json',
      },
    },
    {
      use: 'gridsome-plugin-svg'
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `../../admin/index.js`,
        configPath: `../../admin/config.yml`,
        htmlPath: `../../admin/index.html`
      },
    },
    {
      use: path.resolve(__dirname, 'plugins/tsx.js')
    }
  ]
}
