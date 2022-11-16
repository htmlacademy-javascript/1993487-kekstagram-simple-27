const smallerButton = document.querySelector('.scale__control--smaller');
const biggerButton = document.querySelector('.scale__control--bigger');
const imageScale = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFOLT_SCALE = 100;

const scaleImage = (value = DEFOLT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  imageScale.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const clickValue = parseInt (imageScale.value, 10);
  let newValue = clickValue - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImage(newValue);
};

const onBiggerButtonClick = () => {
  const clickValue = parseInt (imageScale.value, 10);
  let newValue = clickValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImage(newValue);
};

const resetScale = () => {
  scaleImage();
};

smallerButton.addEventListener('click', onSmallerButtonClick);
biggerButton.addEventListener('click', onBiggerButtonClick);

export { resetScale };
