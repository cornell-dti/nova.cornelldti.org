const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  pluginOptions: {
    multiWebpackConfigs: [
      'main', 'cms'
    ],
    multiVueConfigs: [
      {},
      process.env.NODE_ENV !== 'production' ? {} : { css: { extract: true } }
    ],
    chainMultiWebpack: ([config, cmsConfig]) => {
      cmsConfig.plugin('html').use(HtmlWebpackPlugin, [{
        template: path.resolve(__dirname, "./public/admin/index.html"),
        inject: true
      }]);

      // TODO This breaks statistics output (you have to build with --silent)
      // If we don't do this, webpack will intermingle CMS with the main site.
      cmsConfig.output.path(path.resolve(__dirname, './dist/admin'));
      cmsConfig.output.publicPath('/admin/');

      // Because the CMS config is a fork of the original config we have to completely
      // clear its entries...
      cmsConfig.entryPoints.clear();

      // Add the appropriate CMS entry
      cmsConfig.entry('cms').add('./cms/index.js').end();

      // Setup the static -> public copying for the primary site.
      config.plugin('copy').use(CopyPlugin, [[{ from: 'static', to: 'public' }]]);
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('#', '@/../data');

    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
}