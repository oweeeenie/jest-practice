const calculator = require('../modules/calculator');

test('adds 2 + 3 to equal 5', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiplies 2 * 3 to equal 6', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('divides 6 / 2 to equal 3', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('divides by 0 returns Infinity', () => {
  expect(calculator.divide(6, 0)).toBe(Infinity); // Or another error handling approach
});
