function capitalize(string) {
  if (string === null) {
    return undefined;
  }

  const firstLetter = string.charAt(0);
  const firstLetterCapitalized = firstLetter.toUpperCase();

  const remainingLetters = string.slice(1);
  const newWord = firstLetterCapitalized + remainingLetters;

  return newWord;
}
module.exports = capitalize;
