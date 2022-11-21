import {isEscapeKey} from './util.js';

const ALERT_SHOW_TIME = 5000;

const errorTemplate = document.body.querySelector('#error').content.querySelector('.error');
const successTemplate = document.body.querySelector('#success').content.querySelector('.success');

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const showMessage = (template, rootClass) => {
  const messageElement = template.cloneNode(true);
  const button = messageElement.querySelector(`.${rootClass}__button`);

  const deleteMessage = () => {
    messageElement.remove();
    document.removeEventListener('keydown', onModalEscKeydown);
    window.removeEventListener('click', onWindowClick);
  };

  function onModalEscKeydown(evt) {
    if (isEscapeKey(evt)) {
      deleteMessage();
    }
  }

  function onWindowClick(evt) {
    if (evt.target === messageElement) {
      deleteMessage();
    }
  }

  button.addEventListener('click', deleteMessage);
  document.addEventListener('keydown', onModalEscKeydown);
  window.addEventListener('click', onWindowClick);

  document.body.append(messageElement);
};

const showSuccessMessage = () => showMessage(successTemplate, 'success');
const showErrorMessage = () => showMessage(errorTemplate, 'error');


export {
  showAlert,
  showSuccessMessage,
  showErrorMessage
};
