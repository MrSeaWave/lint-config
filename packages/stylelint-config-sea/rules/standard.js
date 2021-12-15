module.exports = {
  rules: {
    // 单引号
    'string-quotes': 'single',
    // 禁止未知的伪类选择器。
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', '/^my-/'],
      },
    ],
    // 禁止未知的 @ 规则。
    'at-rule-no-unknown': null,
    // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。过于严格，暂时关闭
    'no-descending-specificity': null,
    // 与 prettier 冲突， 要求在声明块的冒号之后必须有换行符或不能有空白符。
    'declaration-colon-newline-after': null,
  },
};
