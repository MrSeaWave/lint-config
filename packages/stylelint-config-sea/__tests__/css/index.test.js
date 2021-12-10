const stylelint = require('stylelint');
const fs = require('fs');
const config = require('../../index');
const path = require('path');

describe('stylelint-config-sea with valid css', () => {
  let result;

  // https://stylelint.docschina.org/user-guide/node-api/
  beforeEach(() => {
    result = stylelint.lint({
      files: path.resolve(__dirname, './valid.css'),
      config,
    });
  });

  it('did not error', async () => {
    const data = await result;
    expect(data.errored).toBeFalsy();
    // return result.then((data) => expect(data.errored).toBeFalsy());
  });

  it('flags no warnings', () => {
    return result.then((data) => expect(data.results[0].warnings).toHaveLength(0));
  });
});

describe('stylelint-config-sea with invalid css', () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      files: path.resolve(__dirname, './invalid.css'),
      config,
    });
  });

  it('did error', () => {
    return result.then((data) => expect(data.errored).toBeTruthy());
  });

  it('flags one warning', async () => {
    const data = await result;
    expect(data.results[0].warnings).toHaveLength(2);
  });

  it('correct warning text', () => {
    return result.then((data) =>
      expect(data.results[0].warnings[0].text).toBe('Expected a leading zero (number-leading-zero)')
    );
  });

  it('correct rule flagged', () => {
    return result.then((data) =>
      expect(data.results[0].warnings[0].rule).toBe('number-leading-zero')
    );
  });

  it('correct severity flagged', () => {
    return result.then((data) => expect(data.results[0].warnings[0].severity).toBe('error'));
  });

  it('correct line number', () => {
    return result.then((data) => expect(data.results[0].warnings[0].line).toBe(2));
  });

  it('correct column number', () => {
    return result.then((data) => expect(data.results[0].warnings[0].column).toBe(10));
  });
});
