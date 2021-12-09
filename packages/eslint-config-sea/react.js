module.exports = {
  extends: [
    'eslint-config-airbnb',
    './rules/es6',
    './rules/node',
    './rules/imports',
    './rules/react-a11y.js',
    './rules/react.js',
  ].map(require.resolve),
};
