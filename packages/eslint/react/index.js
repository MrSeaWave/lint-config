module.exports = {
  extends: [
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y',
    'eslint-config-airbnb/rules/react-hooks',
    './rules/react.js',
    './rules/react-a11y.js',
    './rules/react-hooks.js',
  ].map(require.resolve),
};

// TODO 待整理
