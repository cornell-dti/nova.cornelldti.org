module.exports = {
  chainWebpack: (config) => {
    config.resolve.extensions
      .add('.tsx')
      .add('.ts');

    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  }
}