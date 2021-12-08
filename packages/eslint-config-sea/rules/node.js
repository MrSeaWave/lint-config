module.exports = {
  env: {
    node: true,
  },
  plugins: ['node'],
  rules: {
    // 强制回调错误处理
    'node/handle-callback-err': ['error', '^(err|error)$'],
    'node/no-callback-literal': 'error',
    'node/no-deprecated-api': 'error',
    'node/no-exports-assign': 'error',
    'node/no-new-require': 'error',
    'node/no-path-concat': 'error',
    'node/process-exit-as-throw': 'error',
  },
};
