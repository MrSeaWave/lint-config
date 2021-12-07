module.exports = {
  extends: ['eslint-config-airbnb-base', './rules/es6', './rules/react'].map(require.resolve),
};
