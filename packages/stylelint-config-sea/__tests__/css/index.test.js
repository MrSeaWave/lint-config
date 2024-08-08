import { describe, it, expect, beforeEach } from 'vitest';
import path from 'node:path';
import stylelint from 'stylelint';
import config from '../../index';

describe('stylelint-config-sea with valid css', () => {
  let result;

  // https://stylelint.docschina.org/user-guide/node-api/
  beforeEach(() => {
    result = stylelint.lint({
      files: path.resolve(__dirname, './valid.css'),
      config,
    });
  });

  it('rules snapshot', async () => {
    const data = await result;
    expect(data.results[0]._postcssResult.stylelint.config.rules).toMatchSnapshot();
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
    expect(data.results[0].warnings).toHaveLength(1);
  });

  it('correct warning text', () => {
    return result.then((data) =>
      expect(data.results[0].warnings[0].text).toBe(
        'Unexpected invalid position @import rule (no-invalid-position-at-import-rule)'
      )
    );
  });

  it('correct rule flagged', () => {
    return result.then((data) =>
      expect(data.results[0].warnings[0].rule).toBe('no-invalid-position-at-import-rule')
    );
  });

  it('correct severity flagged', () => {
    return result.then((data) => expect(data.results[0].warnings[0].severity).toBe('error'));
  });

  it('correct line number', () => {
    return result.then((data) => expect(data.results[0].warnings[0].line).toBe(6));
  });

  it('correct column number', () => {
    return result.then((data) => expect(data.results[0].warnings[0].column).toBe(1));
  });
});
