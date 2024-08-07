module.exports = {
  root: true,
  extends: '../index.js',
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      configFile: require.resolve('./babel.config.js'),
    },
  },
};
