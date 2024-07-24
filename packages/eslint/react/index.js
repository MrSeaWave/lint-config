module.exports = {
  extends: ['./rules/react.js', './rules/react-a11y.js', './rules/react-hooks.js'].map(
    require.resolve
  ),
};

// TODO 待整理
