function reverseString(string) {
  if (string === null) {
    return undefined;
  }

  const reversedCharacters = string.split('').reverse().join('');

  return reversedCharacters;
}

module.exports = reverseString;
