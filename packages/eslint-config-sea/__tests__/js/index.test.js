const path = require('path');
const { ESLint } = require('eslint');

describe('eslint-config-sea', () => {
  it('rules snapshot', async () => {
    // 创建一个实例。
    const eslint = new ESLint({ cwd: __dirname });
    // Lint 文件
    console.log('path.resolve(__filename)', path.resolve(__filename));
    // const result = await eslint.calculateConfigForFile(path.resolve(__filename));
    const results = await eslint.lintFiles(['./index.js']);

    console.log('results', results);
  });
});
