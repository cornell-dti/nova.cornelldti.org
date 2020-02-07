// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

const path = require('path');

module.exports = {
  siteName: 'Cornell Design & Tech Initiative',
  templates: {
    DTIProject: '/project/:id'
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
      }
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
