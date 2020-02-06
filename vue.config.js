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

    // We'll handle tsx ourselves, thank you.
    config.module.rule('ts').uses.clear();
    config.module.rule('tsx').uses.clear();

    config.module.rule('typescript').uses.clear();

    config.module
      .rule('typescript')
      .test(/\.tsx?$/)
      .use('babel-loader')
      .loader('babel-loader')
      .options({
        presets: [
          '@vue/babel-preset-app'
        ]
      })
      .end()
      .use('ts-loader')
      .loader('ts-loader')
      .options({ appendTsSuffixTo: [/\.vue$/] })
      .end()
      .end();
  }
}