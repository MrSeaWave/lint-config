module.exports = {
  extends: ['eslint-config-airbnb-base', './rules/es6', './rules/node'].map(require.resolve),
};
