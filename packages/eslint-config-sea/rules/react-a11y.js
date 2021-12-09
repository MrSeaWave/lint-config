module.exports = {
  rules: {
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
    'jsx-a11y/no-static-element-interactions': 'off',
    // 部分标签如 img, 不能包含交互效果，需要另外用一个具有交互效果的标签包裹
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    // 具有点击处理程序的可见、非交互式元素必须至少有一个键盘侦听器
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
    'jsx-a11y/click-events-have-key-events': 'off',
    // for 属性规定 label 与哪个表单元素绑定。
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
    'jsx-a11y/label-has-associated-control': 'off',
  },
};
