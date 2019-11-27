// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    '@vue/prettier',
    'plugin:import/typescript',
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    project: './tsconfig.json'
  },

  env: {
    browser: true,
    node: true
  },

  // add your custom rules here
  rules: {
    // don't require .vue extension when importing
    'import/extensions': [
      'error',
      'always',
      {
        ts: 'never',
        tsx: 'never',
        'd.ts': 'never',
        js: 'never'
      }
    ],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e' // for e.returnvalue
        ]
      }
    ],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: ['test/unit/index.js']
      }
    ],
    'no-mixed-operators': ['off'],
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': ['warn', 'never'],
    'no-underscore-dangle': ['off'],
    'no-continue': ['off'],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
      }
    ],
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    'lines-between-class-members': ['off'],
    'max-len': ['warn', { code: 200 }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // TODO: fix these problems and turn them into error again.
    'vue/no-parsing-error': ['warn'],
    'vue/no-use-v-if-with-v-for': ['warn'],
    'vue/no-unused-components': ['warn'],
    'vue/no-unused-vars': ['warn'],
    'no-restricted-globals': ['warn'],
    'max-classes-per-file': ['off']
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    '@vue/prettier',
    'plugin:import/typescript',
    '@vue/typescript'
  ]
};
