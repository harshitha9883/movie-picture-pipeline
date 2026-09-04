module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['react-app', 'plugin:prettier/recommended'],
  ignorePatterns: ['build/', 'coverage/', 'node_modules/'],
};
