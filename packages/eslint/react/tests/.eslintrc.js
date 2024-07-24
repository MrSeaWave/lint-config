module.exports = {
  root: true,
  extends: '../../react.js',
  env: {
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: require.resolve('./babel.config.js'),
    },
  },
};
