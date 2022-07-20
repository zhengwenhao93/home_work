module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-tabs': 'warn',
    'vue/multi-word-component-names': 'off',
    'vue/no-parsing-error': 'off',
    'vue/valid-template-root': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/no-deprecated-slot-attribute' : 'off'
  }
}
