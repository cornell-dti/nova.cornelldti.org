
module.exports = {
  presets: [
    ["@vue/cli-plugin-babel/preset"]
  ],
  "plugins": [
    "@babel/plugin-proposal-optional-chaining",
    "@babel/plugin-proposal-nullish-coalescing-operator",
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", { "loose": true }]
  ]
};
