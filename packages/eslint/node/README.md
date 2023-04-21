# `eslint-config-sea-node`

本规则只单独针对 node 环境, 请搭配 `eslint-config-sea-js` 一起使用

## Usage

### js

```bash
pnpm add eslint-config-sea-node eslint-config-sea-js -D
```

在`.eslintrc`文件中增加

```json
{
  "extends": [...,"sea-js","sea-node"]
}
```

> 注意: 这里省略了 `eslint-config-` 前缀，是因为它会被 eslint 自动补充。

**注：如果要使用实验性功能，例如箭头作为类方法，则需要使用 `@babel/eslint-parser` 作为解析器。默认解析器（Espree）不支持实验性功能。**

`pnpm add @babel/core @babel/eslint-parser -D` 后，将`.eslintrc`文件中修改为：

```json
{
  "parser": "@babel/eslint-parser"
}
```

## 规则

- [eslint](https://github.com/eslint/eslint/tree/main/docs/rules)
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n)
- [airbnb](https://github.com/airbnb/javascript)
- [standard](https://github.com/standard/eslint-config-standard)

## Contributing

### Development

```shell
$ git clone https://github.com/MrSeaWave/lint-config.git
$ cd lint-config/packages/eslint-config-sea
# npm is not allowed.
$ pnpm
```

Run Test

```shell
$ pnpm run test
```

### Pull Request Etiquette

- 必须严格按照 [commitlint](https://github.com/conventional-changelog/commitlint#what-is-commitlint) 格式提交代码
- 请尽可能提供 [test](./__tests__) 文件
