module.exports = {
  extends: ['stylelint-config-standard-scss', './rules/standard', './rules/scss'].map(
    require.resolve
  ),
};
