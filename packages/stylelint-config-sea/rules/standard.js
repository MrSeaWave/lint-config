module.exports = {
  rules: {
    // 禁止未知的伪类选择器。
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export', '/^my-/'],
      },
    ],
    // 禁止未知的 @ 规则。
    'at-rule-no-unknown': null,
    // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器。（过于严格，暂时关闭）
    'no-descending-specificity': null,
    // 已弃用 https://stylelint.io/migration-guide/to-15/#deprecated-stylistic-rules
    // 'declaration-colon-newline-after': null,
  },
};
