
module.exports = {
  presets: [
    ['@vue/app']
  ],
  "plugins": [
    ["@babel/plugin-proposal-optional-chaining"],
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
};
