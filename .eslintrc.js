module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    // 'jsx-a11y/img-redundant-alt': 'off',
    'react/no-array-index-key': 'off',
    // 'jsx-a11y/alt-text': 'off',
    'arrow-body-style': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    // 'max-len': '200',
    'react/function-component-definition': 'off',
    'global-require': 'off',
    // 'no-confusing-arrow': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'jsx-a11y/img-redundant-alt': 'off',

  },
};
