// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const path = require('path');

module.exports = {
  siteName: 'Cornell Design & Tech Initiative',
  outputDir: '../../dist',
  templates: {
    DTIProject: '/projects/:teamId_raw',
    Member: '/members/:netid_raw',
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PrivacyPolicy',
        path: './data/privacy/*.md',
      },
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
        path: './data/members/*.json',
      },
    },
    {
      use: 'gridsome-plugin-svg'
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `admin/index.js`,
        configPath: `admin/config.yml`,
        htmlPath: `admin/index.html`
      },
    },
    {
      use: path.resolve(__dirname, 'plugins/tsx.js')
    }
  ]
}
