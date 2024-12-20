function analyzeArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  const average = sum / array.length;

  let smallest = Math.min(...array);
  let largest = Math.max(...array);

  let length = array.length;

  return {
    average: average,
    min: smallest,
    max: largest,
    length: length,
  };
}

module.exports = analyzeArray;
