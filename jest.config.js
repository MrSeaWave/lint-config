module.exports = {
  coverageDirectory: './coverage/',
  collectCoverage: true,
  projects: [
    {
      displayName: '测试文件',
      testMatch: ['<rootDir>/**/*.test.js'],
    },
    // {
    //   runner: 'jest-runner-eslint',
    //   displayName: 'lint',
    //   testMatch: ['<rootDir>/**/**/rules/*'],
    // },
  ],
};
