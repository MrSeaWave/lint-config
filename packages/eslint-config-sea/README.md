# `eslint-config-sea`

该配置文件基于 eslint-config-airbnb

> eslint-config-airbnb 包含 ECMAScript 6 + 以及 React 的 ESLint 代码规范。如果你的项目不是 React 的話，那麼可以选择 eslint-config-airbnb-base。

## Usage

### install

#### js

```bash
yarn add eslint-config-sea eslint-plugin-promise eslint-plugin-node -D
```

在你的`.eslintrc`文件中修改为：

```json
{
  "extends": "sea"
}
```

#### react

```bash
yarn add eslint eslint-config-sea -D
```

在你的`.eslintrc`文件中修改为：

```json
{
  "extends": "sea/react"
}
```

## 规则

- [eslint](https://github.com/eslint/eslint/tree/main/docs/rules)

- [import](https://github.com/benmosher/eslint-plugin-import/tree/main/docs/rules)

- [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules)

- [react](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules)

- [react-hooks](https://reactjs.org/docs/hooks-rules.html)

- [airbnb](https://github.com/airbnb/javascript)
