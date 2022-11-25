import {isEscapeKey} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import { showSuccessMessage, showErrorMessage } from './messages.js';
import { sendData } from './api.js';

const bodyElement = document.querySelector('body');
const loadFotoElement = document.querySelector('.img-upload__input');
const fotoEditingFormElement = document.querySelector('.img-upload__overlay');
const closeButtonElement = document.querySelector('.img-upload__cancel');
const dateFormElement = document.querySelector('.img-upload__form');
const commentFieldElement = document.querySelector('.text__description');
const submitButtonElement = document.querySelector('.img-upload__submit');

let onCloseModalClick = null;

const isTextFieldFocused = () =>
  document.activeElement === commentFieldElement;

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    onCloseModalClick();
  }
};

const onShowModalChange = () => {
  fotoEditingFormElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onModalEscKeydown);
};

loadFotoElement.addEventListener('change', onShowModalChange);

onCloseModalClick = () => {
  fotoEditingFormElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  dateFormElement.reset();
  resetScale();
  resetEffects();
  document.removeEventListener('keydown', onModalEscKeydown);
};

closeButtonElement.addEventListener('click', onCloseModalClick);

const pristine = new Pristine(dateFormElement, {
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
        onCloseModalClick();
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
  dateFormElement.addEventListener('submit', onFormSubmit);
};

export { initValidation };
