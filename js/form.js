import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';
import { sendData } from './api.js';

const fieldForLoadingFoto = document.querySelector('#upload-file');
const fotoEditingForm = document.querySelector('.img-upload__overlay');
const closeModalForm = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');
const DateForm = document.querySelector('.img-upload__form');
const commentField = document.querySelector('.text__description');
const submitButtonElement = document.querySelector('.img-upload__submit');

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

const blockSubmitButton = () => {
  submitButtonElement.disabled = true;
  submitButtonElement.textContent = 'Публикую...';
};
const unblockSubmitButton = () => {
  submitButtonElement.disabled = false;
  submitButtonElement.textContent = 'Опубликовать';
};

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    blockSubmitButton();
    sendData(
      () => {
        showSuccessMessage();
        unblockSubmitButton();
        closeModal();
      },
      () => {
        showErrorMessage();
        unblockSubmitButton();
      },
      new FormData(evt.target),
    );
  }
};

const initValidation = () => {
  DateForm.addEventListener('submit', onFormSubmit);
};

export { initValidation };
