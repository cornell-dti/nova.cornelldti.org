
module.exports = {
  presets: [
    ['@vue/babel-preset-app', { jsx: true }]
  ],
  "plugins": [
    ["@babel/plugin-syntax-jsx"],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
};
