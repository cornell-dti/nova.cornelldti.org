const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin([
        { from: 'static', to: 'public' },
      ]),
      new HtmlWebpackPlugin({
        template: "./public/admin/index.html",
        filename: "./admin/index.html",
        excludeChunks: ["app"]
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
        ignoreOrder: false,
        publicPath: 'static/cms/css/'
      })
    ],
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('#', '@/../data');

    // Prevent CMS CSS/JS from being inserted into the primary app
    config.plugin('html').init((Plugin, args) => {
      const arg0 = args.shift();
      const modified = Object.assign(arg0, { excludeChunks: ["cms"] });
      return new Plugin(modified, ...args)
    });

    // Add the CMS entry point
    config.entry('cms').add('./cms/index.js').end();

    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');


  },
}