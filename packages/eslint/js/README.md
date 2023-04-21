# `eslint-config-sea-js`

该配置文件基于 eslint-config-airbnb（-base），并在其基础上做出一点小改动

> eslint-config-airbnb 包含 ECMAScript 6 + 以及 React 的 ESLint 代码规范。
> 如果项目不是 React 的话，可以选择 eslint-config-airbnb-base。

## Usage

### js

```bash
pnpm add eslint-config-sea-js -D
```

> 注意: 这里省略了 `eslint-config-` 前缀，是因为它会被 eslint 自动补充。

**注：如果要使用实验性功能，例如箭头作为类方法，则需要使用 `@babel/eslint-parser` 作为解析器。默认解析器（Espree）不支持实验性功能。**

`yarn add @babel/core @babel/eslint-parser -D` 后，将`.eslintrc`文件中修改为：

```json
{
  "parser": "@babel/eslint-parser"
}
```

## 规则

- [eslint](https://github.com/eslint/eslint/tree/main/docs/rules)
- [import](https://github.com/benmosher/eslint-plugin-import/tree/main/docs/rules)
- [jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules)
- [react](https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules)
- [react-hooks](https://reactjs.org/docs/hooks-rules.html)
- [airbnb](https://github.com/airbnb/javascript)
- [standard](https://github.com/standard/eslint-config-standard)
- [standard-react](https://github.com/standard/eslint-config-standard-react)

## Contributing

### Development

```shell
$ git clone https://github.com/MrSeaWave/lint-config.git
$ cd lint-config/packages/eslint-config-sea
# npm is not allowed.
$ yarn
```

Run Test

```shell
$ yarn run test
```

### Pull Request Etiquette

- 必须严格按照 [commitlint](https://github.com/conventional-changelog/commitlint#what-is-commitlint) 格式提交代码
- 请尽可能提供 [test](./__tests__) 文件
