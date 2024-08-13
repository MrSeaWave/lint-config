// error    Unexpected var, use let or const instead  no-var
var a = 1;

// warning  Unexpected console statement              no-console
console.log('a', a);

// warning  Prefer default export import/prefer-default-export
export const b = 1;

// rule no-unneeded-ternary
// Bad
var isYes = answer === 1 ? true : false;

// Good
var isYes = answer === 1;
