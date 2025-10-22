/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier', // prettier와 충돌 방지
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'import',
    'unused-imports',
    'prettier',
  ],
  rules: {
    /* --- 💅 Prettier --- */
    'prettier/prettier': ['error', { endOfLine: 'auto' }],

    /* --- ⚙️ 기본 규칙 --- */
    'vue/multi-word-component-names': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',

    /* --- 🧹 불필요한 import 자동 감지 --- */
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
    ],

    /* --- 🧭 import 정리 --- */
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
}
