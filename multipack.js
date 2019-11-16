// Inspired by https://github.com/jkzing/vue-cli-plugin-multi-compiler

// This local vue-cli plugin allows the use of multiple *chained* or *bare* webpack configurations
// _and_ some per-configuration Vue CLI settings. (it currently only handles css.extract)

// Load the internal CssPlugin from @vue/cli-service
// We know it exists because this plugin can't run without the cli-service.
const CssPlugin = require('@vue/cli-service/lib/config/css');

module.exports = (api, options) => {
  // Load webpack merge.
  const merge = require('webpack-merge');

  const vueResolveWebpackConfig = api.service.resolveWebpackConfig;
  const vueResolveChainableWebpackConfig = api.service.resolveChainableWebpackConfig;

  // Patches resolveChainableWebpackConfig to return an array or chainable configs.
  // It calls the original resolveChainableWebpackConfig on each instance and then
  // calls chainMultiWebpack from pluginOptions
  api.service.resolveChainableWebpackConfig = function resolveChainableWebpackConfig() {
    const { multiWebpackConfigs, configureMultiWebpack, multiVueConfigs } = options.pluginOptions || {}

    let source = [];

    if (multiWebpackConfigs == null) {
      if (Array.isArray(configureMultiWebpack)) {
        source = configureMultiWebpack;
      }
    } else if (Array.isArray(multiWebpackConfigs)) {
      source = multiWebpackConfigs;
    }

    const configs = Array.from(source).map(() => vueResolveChainableWebpackConfig.call(this));
    const { chainMultiWebpack } = options.pluginOptions || {}

    // TODO
    // This is honestly a bit hack...
    // We do this to easily support CSS exporting!
    //
    // 1) Loop through each multi-plugin environment
    // 2) Modify the API instance our plugin received to "export" any webpack chaining
    // 3) Execute the multi-plugin environment
    // 4) Apply any webpack chains to the relevant config

    if (multiVueConfigs) {
      multiVueConfigs.forEach((mp, i) => {
        if (mp.css && mp.css.extract) {
          const fns = [];
          const modifiedApi = api;
          const origFn = api.chainWebpack;
          modifiedApi.chainWebpack = function (fn) {
            fns.push(fn);
          }
          CssPlugin(modifiedApi, mp);
          modifiedApi.chainWebpack = origFn;
          const cfg = configs[i];

          if (cfg) {
            fns.forEach(fn => fn.call(this, cfg));
          }
        }
      });

    }

    if (Array.isArray(chainMultiWebpack)) {
      configs.forEach((curr, i) => chainMultiWebpack[i](curr))
    } else if (typeof chainMultiWebpack === 'function') {
      chainMultiWebpack(configs);
    }

    return Array.from(configs);
  }

  // Patches resolveWebpackConfig to handle multiple chainable configs
  // Calls configureMultiWebpack with all the configs.
  api.service.resolveWebpackConfig = function resolveWebpackConfig() {
    const chainableConfigs = Array.from(this.resolveChainableWebpackConfig());
    let configs = chainableConfigs.map(c => vueResolveWebpackConfig.call(this, c));
    const { configureMultiWebpack } = options.pluginOptions || {}

    if (typeof configureMultiWebpack === 'function') {
      configs = configureMultiWebpack(configs)
    } else if (Array.isArray(configureMultiWebpack)) {
      configs = configureMultiWebpack.map((curr, i) => merge(configs[i], curr))
    }

    return configs;
  }
}