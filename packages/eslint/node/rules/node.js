module.exports = {
  env: {
    node: true,
  },
  extends: ['plugin:n/recommended'],
  rules: {
    // 强制回调错误处理
    'n/handle-callback-err': ['error', '^(err|error)$'],
    'n/no-callback-literal': 'error',
    'n/no-deprecated-api': 'error',
    'n/no-exports-assign': 'error',
    'n/no-new-require': 'error',
    'n/no-path-concat': 'error',
    'n/process-exit-as-throw': 'error',
  },
};
