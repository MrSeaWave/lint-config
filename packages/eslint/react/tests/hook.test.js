import { ESLint } from 'eslint';
import { describe, it, expect } from 'vitest';
import baseConfig from './hook.eslintrc';

describe('eslint-config-sea react-hook', () => {
  it('rules snapshot', async () => {
    // 创建一个实例。
    const eslint = new ESLint({ cwd: __dirname, baseConfig, useEslintrc: false });
    // 计算给定文件的config配置
    const result = await eslint.calculateConfigForFile(__filename);

    delete result.parser;

    delete result.parserOptions.babelOptions;
    // 比对快照文件，第一次会生成snap,jest --updateSnapshot 可以重新生成快照文件
    expect(result).toMatchSnapshot();
  });

  it('lint react hook files', async () => {
    // 创建一个实例。
    const eslint = new ESLint({ cwd: __dirname, baseConfig, useEslintrc: false });
    // Lint 文件
    const results = await eslint.lintFiles(['./hook.jsx']);

    // 格式化结果。
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    //  输出到控制台。
    console.log(resultText);

    expect(results[0].errorCount).toBeTruthy();
  });
});
