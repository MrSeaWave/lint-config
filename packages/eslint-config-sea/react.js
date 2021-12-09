module.exports = {
  extends: ['./index.js', './rules/react.js'].map(require.resolve),
};
