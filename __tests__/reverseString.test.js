const reverseString = require('../modules/reverseString');

test('return the string in reversed order', () => {
  expect(reverseString('coolbeans')).toBe('snaeblooc');
});
