module.exports = {
  chainWebpack: config => {
    // Copied from https://github.com/visualfanatic/vue-svg-loader#vue-cli
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
};
