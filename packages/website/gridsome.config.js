// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

const path = require('path');

module.exports = {
  siteName: 'Cornell Design & Tech Initiative',
  outputDir: '../../dist',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'PrivacyPolicy',
        path: './data/privacy/*.md'
      }
    },
    {
      use: 'gridsome-plugin-svg'
    },
    {
      use: path.resolve(__dirname, 'plugins/tsx.js')
    }
  ]
};
