'use strict';

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', '@stylistic'],
  env: {
    node: true,
    /** use "test or expect" without any lint err  */
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    '@stylistic/array-bracket-spacing': 'warn',
    '@stylistic/arrow-parens': ['warn', 'as-needed'],
    '@stylistic/arrow-spacing': 'warn',
    '@stylistic/block-spacing': 'warn',
    '@stylistic/brace-style': 'warn',
    '@stylistic/comma-spacing': 'warn',
    '@stylistic/eol-last': 'warn',
    '@stylistic/function-call-argument-newline': ['warn', 'consistent'],
    '@stylistic/function-paren-newline': ['warn', 'consistent'],
    '@stylistic/indent': ['warn', 2],
    '@stylistic/indent-binary-ops': ['warn', 2],
    '@stylistic/key-spacing': 'warn',
    '@stylistic/linebreak-style': 'warn',
    '@stylistic/no-extra-semi': 'warn',
    '@stylistic/no-floating-decimal': 'warn',
    '@stylistic/no-mixed-operators': 'error',
    '@stylistic/no-mixed-spaces-and-tabs': 'warn',
    '@stylistic/no-multi-spaces': 'warn',
    '@stylistic/no-multiple-empty-lines': 'warn',
    '@stylistic/no-trailing-spaces': 'warn',
    '@stylistic/object-curly-newline': ['warn', { consistent: true }],
    '@stylistic/object-curly-spacing': ['warn', 'always'],
    '@stylistic/object-property-newline': 'warn',
    '@stylistic/operator-linebreak': ['warn', 'before'],
    '@stylistic/quotes': ['warn', 'single'],
    '@stylistic/rest-spread-spacing': 'warn',
    '@stylistic/semi-spacing': 'warn',
    '@stylistic/space-before-blocks': [
      'warn',
      {
        functions: 'always',
        classes: 'always',
        keywords: 'always',
      },
    ],
    '@stylistic/space-infix-ops': 'warn',
    '@stylistic/space-unary-ops': [
      'warn',
      {
        words: true,
        nonwords: false,
      },
    ],
    '@stylistic/spaced-comment': 'warn',
    '@stylistic/switch-colon-spacing': 'warn',
    '@stylistic/template-curly-spacing': 'warn',
    '@stylistic/type-annotation-spacing': 'warn',
    '@stylistic/type-generic-spacing': 'warn',
    '@stylistic/type-named-tuple-spacing': 'warn',
    '@stylistic/wrap-regex': 'warn',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-this-alias': 'off',
    'array-callback-return': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
    curly: 'warn',
    'default-case': 'warn',
    'dot-notation': 'warn',
    eqeqeq: 'error',
    'func-names': ['warn', 'as-needed'],
    'no-await-in-loop': 'warn',
    'no-debugger': 'warn',
    'no-eq-null': 'error',
    'no-inline-comments': 'warn',
    'no-mixed-spaces-and-tabs': 'off',
    'no-plusplus': 'warn',
    'no-unreachable': 'warn',
    'no-use-before-define': 'error',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'prefer-exponentiation-operator': 'warn',
    'prefer-promise-reject-errors': 'warn',
    'prefer-rest-params': 'error',
    semi: ['warn', 'always'],
    'require-await': 'warn',
    'use-isnan': 'warn',
  },
  /**
   * .eslintignore config, unlike .gitignore,
   *  "/" is used instead of "\"
   */
  ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    'coverage',
    '.turbo',
    '.eslintrc.js',
    '.d.ts',
  ],
};
