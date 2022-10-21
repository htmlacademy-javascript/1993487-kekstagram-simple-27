import {getRandomIntInclusive, getRandomArrayElement} from './util.js';

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

const createData = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomIntInclusive (15, 200),
  comments: getRandomIntInclusive (0, 200),
});

const posts = () => Array.from({length: PICTURE_COUNT}, (_, pictureIndex) =>
  createData(pictureIndex + 1)
);

export {posts};
