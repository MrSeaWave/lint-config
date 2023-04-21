module.exports = {
  extends: ['eslint-config-airbnb-base', './rules/es6', './rules/imports'].map(require.resolve),
};
