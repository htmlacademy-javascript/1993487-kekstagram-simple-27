import {isEscapeKey} from './util.js';

const fieldForLoadingFoto = document.querySelector('#upload-file');
const fotoEditingForm = document.querySelector('.img-upload__overlay');
const closeModalForm = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const DateForm = document.querySelector('.img-upload__form');
const commentField = document.querySelector('.text__description');

const isTextFieldFocused = () =>
  document.activeElement === commentField;

function onModalEscKeydown(evt) {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    closeModal();
  }
}

const showModal = () => {
  fotoEditingForm.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};

fieldForLoadingFoto.addEventListener('click', showModal);


const closeModal = () => {
  fotoEditingForm.classList.add('hidden');
  body.classList.remove('modal-open');
  DateForm.reset();
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
