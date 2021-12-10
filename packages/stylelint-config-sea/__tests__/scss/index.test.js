const stylelint = require('stylelint');
const config = require('../../scss');
const path = require('path');

describe('stylelint-config-sea with valid scss', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      files: path.resolve(__dirname, './valid.scss'),
      config,
    });
  });

  it('did not error', async () => {
    const data = await result;
    expect(data.errored).toBeFalsy();
  });

  it('flags no warnings', () => {
    return result.then((data) => expect(data.results[0].warnings).toHaveLength(0));
  });
});

describe('stylelint-config-sea with invalid scss', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      files: path.resolve(__dirname, './invalid.scss'),
      config,
    });
  });

  it('did error', () => {
    return result.then((data) => expect(data.errored).toBeTruthy());
  });

  it('flags one warning', () => {
    return result.then((data) => expect(data.results[0].warnings).toHaveLength(1));
  });

  it('correct warning text', () => {
    return result.then((data) =>
      expect(data.results[0].warnings[0].text).toBe('Expected variable to be kebab-case')
    );
  });

  it('correct rule flagged', async () => {
    const data = await result;
    expect(data.results[0].warnings[0].rule).toBe('scss/dollar-variable-pattern');
  });

  it('correct severity flagged', () => {
    return result.then((data) => expect(data.results[0].warnings[0].severity).toBe('error'));
  });

  it('correct line number', () => {
    return result.then((data) => expect(data.results[0].warnings[0].line).toBe(1));
  });

  it('correct column number', () => {
    return result.then((data) => expect(data.results[0].warnings[0].column).toBe(1));
  });
});
