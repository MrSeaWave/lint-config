# stylelint-config-sea

该配置文件基于 stylelint-config-standard，并在其基础上做出一点小改动

## Usage

### css

```bash
pnpm add stylelint stylelint-config-sea -D
```

在你的`.stylelintrc.json`文件中修改为：

```json
{
  "extends": "stylelint-config-sea"
}
```

### scss

```bash
pnpm add stylelint stylelint-config-sea -D
```

如果使用时报错，你可能还需要安装 `postcss-scss` & `postcss` 至 `devDependencies`

在你的`.stylelintrc.json`文件中修改为：

```json
{
  "extends": "stylelint-config-sea/scss"
}
```

## 规则

- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard/blob/main/README.md)
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss)

## Contributing

### Development

```shell
$ git clone https://github.com/MrSeaWave/lint-config.git
$ cd lint-config/packages/stylelint-config-sea
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
