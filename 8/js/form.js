import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';

const fieldForLoadingFoto = document.querySelector('#upload-file');
const fotoEditingForm = document.querySelector('.img-upload__overlay');
const closeModalForm = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const DateForm = document.querySelector('.img-upload__form');
const commentField = document.querySelector('.text__description');

let closeModal = null;

const isTextFieldFocused = () =>
  document.activeElement === commentField;

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
};

const showModal = () => {
  fotoEditingForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};

fieldForLoadingFoto.addEventListener('click', showModal);

closeModal = () => {
  fotoEditingForm.classList.add('hidden');
  body.classList.remove('modal-open');
  DateForm.reset();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onModalEscKeydown);
};

closeModalForm.addEventListener('click', closeModal);

const pristine = new Pristine(DateForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text--error',
},
true
);

DateForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});
