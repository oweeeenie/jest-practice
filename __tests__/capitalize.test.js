const capitalize = require('../modules/capitalize');

test('returns first letter capitalized, rest untouched', () => {
  expect(capitalize('awesome')).toBe('Awesome');
});
