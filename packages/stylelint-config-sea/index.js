module.exports = {
  extends: ['stylelint-config-standard', './rules/standard'].map(require.resolve),
};
