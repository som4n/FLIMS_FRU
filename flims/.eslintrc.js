module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    'comma-spacing': 'error',
    'space-infix-ops': 'error',
    'react/function-component-definition': 'error',
    'arrow-spacing': 'error',
    'react/jsx-indent': ['error', 2],
    'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],

  },
};
