const { ESLint } = require('eslint');

describe('eslint-config-sea js', () => {
  it('rules snapshot', async () => {
    // 创建一个实例。
    const eslint = new ESLint({ cwd: __dirname });
    // 计算给定文件的config配置
    const result = await eslint.calculateConfigForFile(__filename);
    delete result.parser;
    // 比对快照文件，第一次会生成snap,jest --updateSnapshot 可以重新生成快照文件
    expect(result).toMatchSnapshot();
  });

  it('lint js files', async () => {
    // 创建一个实例。
    const eslint = new ESLint({ cwd: __dirname });
    // Lint 文件
    const results = await eslint.lintFiles(['./index.js']);

    // 格式化结果。
    const formatter = await eslint.loadFormatter('stylish');
    const resultText = formatter.format(results);

    //  输出到控制台。
    console.log(resultText);

    console.log('results', results);

    expect(results[0].errorCount).toBeTruthy();
  });
});
