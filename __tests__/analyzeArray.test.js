const analyzeArray = require('../modules/analyzeArray');

const testArray = [1, 8, 3, 4, 2, 6];

test('returns average in the array', () => {
  expect(analyzeArray(testArray).average).toBe(4);
});

test('returns min/smallest in the array', () => {
  expect(analyzeArray(testArray).min).toBe(1);
});

test('return max/largest in the array', () => {
  expect(analyzeArray(testArray).max).toBe(8);
});

test('return the length of the array', () => {
  expect(analyzeArray(testArray).length).toBe(6);
});
