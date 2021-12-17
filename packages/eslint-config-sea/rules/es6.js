module.exports = {
  plugins: ['promise'],
  rules: {
    // 在 JavaScript 中创建一个只有属性  setter  的对象是一个常见的错误，但从来没有为它定义相应的 getter 。没有读取器，你不能读取属性，所以它最终不会被使用。
    'accessor-pairs': ['error', { setWithoutGet: true, getWithoutSet: true }],
    // 使用分号
    semi: ['error', 'always'],
    // 强制使用一致的换行符风格
    'linebreak-style': 'off',
    // 要求或禁止命名的 function 表达式
    'func-names': ['error', 'as-needed'],
    // 要求或禁止使用拖尾逗号
    'comma-dangle': [
      'error',
      {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never',
      },
    ],
    // 将 switch 语句中的 default 子句强制为最后一个子句
    'default-case-last': 'error',
    // 要求或禁止在三元操作数中间换行
    'multiline-ternary': ['error', 'always-multiline'],
    // 禁止连续赋值 (no-multi-assign)
    'no-multi-assign': 'error',
    // 禁止对函数参数再赋值 (no-param-reassign)
    'no-param-reassign': 'error',
    // 禁止未使用过的表达式 (no-unused-expressions)
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    // 禁止在条件中使用常量表达式
    'no-constant-condition': ['error', { checkLoops: false }],
    // 禁止在正则表达式中使用无用的反向引用
    'no-useless-backreference': 'error',
    // 禁止分配给导入的绑定
    'no-import-assign': 'error',
    // Disallow Number Literals That Lose Precision
    'no-loss-of-precision': 'error',
    // 'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unreachable-loop': 'error',
    // 禁用不必要的 .call() 和 .apply()
    'no-useless-call': 'error',
    // 需要把立即执行的函数包裹起来
    'wrap-iife': [
      'error',
      'any',
      {
        functionPrototypeMethods: true,
      },
    ],
    // Enforce consistent param names when creating new promises
    'promise/param-names': 'error',
  },
};
