const { resolve } = require('path');

function TsxPlugin(api) {
    api.chainWebpack((config) => {
        config.resolve.extensions
            .add('.tsx')
            .add('.ts');

        config.resolve.alias
            .set('vue$', resolve(process.cwd(), './node_modules/vue/dist/vue.esm.js'));

        config.module.rule('typescript').uses.clear();

        config.module
            .rule('typescript')
            .test(/\.tsx?$/)
            .use('babel-loader')
            .loader('babel-loader')
            .options({
                presets: [
                    require.resolve('@vue/babel-preset-app')
                ]
            })
            .end()
            .use('ts-loader')
            .loader('ts-loader')
            .options({ appendTsSuffixTo: [/\.vue$/] })
            .end()
            .end()
    });
}

module.exports = TsxPlugin;