module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-console': 0,
    'no-nested-ternary': 0,
    'import/order': 0,
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'no-use-before-define': [
      'error',
      { functions: false, classes: false, variables: false }
    ],
    'vue/html-indent': 0,
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-lone-template': 0,
    'vue/v-slot-style': 0,
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue']
      }
    }
  }
}
