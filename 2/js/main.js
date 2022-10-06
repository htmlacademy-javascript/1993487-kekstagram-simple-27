function getRandomIntInclusive (min, max) {
  if (min < 0 || max < 0 || min > max || min === max) {
    return NaN;
  }
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  const result = (Math.random() * (upper - lower + 1)) + lower;
  return Math.floor(result);
}
getRandomIntInclusive (2, 100);

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength ('', 140);
