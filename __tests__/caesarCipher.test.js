const caesarCipher = require('../modules/caesarCipher');

test('correctly shifts letters by the given amount', () => {
  expect(caesarCipher('abc', 3)).toBe('def'); // Shifting by 3
});

test('wraps around the alphabet correctly', () => {
  expect(caesarCipher('z', 1)).toBe('a'); // Wrap around for lowercase
  expect(caesarCipher('Z', 1)).toBe('A'); // Wrap around for uppercase
});

test('does not affect non-alphabetic characters', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('works with negative shift values', () => {
  expect(caesarCipher('abc', -3)).toBe('xyz'); // Shifting backwards by 3
});
