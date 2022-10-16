const PICTURE_COUNT = 25;

const DESCRIPTION = [
  'Beach view',
  'Go to the beach',
  'Blue sea',
  'Girl',
  'Rice and soup',
  'Black car',
  'Strawberry',
  'Morse',
  'Sky plane girl',
  'Shoes',
  'Sand and sun',
  'White car',
  'Food',
  'Sushi cat',
  'Warm boots',
  'Height',
  'Choral performance',
  'Red car',
  'Night light',
  'Palm trees',
  'Dinner',
  'Sunset',
  'Crab',
  'Concert',
  'Dangerous journey',
];

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

const getRandomArrayElement = (elements) => elements [getRandomIntInclusive(0, elements.length - 1)];

const createPicture = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomIntInclusive (15, 200),
  comments: getRandomIntInclusive (0, 200),
});

const getPicture = Array.from({length: PICTURE_COUNT}, (_, pictureIndex) =>
  createPicture(pictureIndex + 1)
);

console.log(getPicture);
