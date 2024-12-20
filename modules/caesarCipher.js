function caesarCipher(string, shift) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const charCode = string.charCodeAt(i);

    if (charCode > 65 && charCode <= 90) {
      const shiftedCharUpper = ((charCode - 65 + shift + 26) % 26) + 65;
      result = result + String.fromCharCode(shiftedCharUpper);
    } else if (charCode >= 97 && charCode <= 122) {
      const shiftedCharLower = ((charCode - 97 + shift + 26) % 26) + 97;
      result = result + String.fromCharCode(shiftedCharLower);
    } else {
      result = result + string.charAt(i);
    }
  }
  return result;
}

module.exports = caesarCipher;
