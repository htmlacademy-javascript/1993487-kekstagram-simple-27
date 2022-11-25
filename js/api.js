const LINK_GET_DATA = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const LINK_SEND_DATA = 'https://27.javascript.pages.academy/kekstagram-simple';
const ERROR_WARNING = 'Не удалось загрузить фотографии других пользователей';
const ERROR_WARNING_FORM = 'Не удалось отправить форму. Попробуйте ещё раз';

const getData = (onSuccess, onError) => {
  fetch(LINK_GET_DATA)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((posts) => onSuccess(posts))
    .catch(() => onError(ERROR_WARNING));
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    LINK_SEND_DATA,
    {
      method: 'POST',
      body,
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(ERROR_WARNING_FORM);
      }
    })
    .catch(() => onFail(ERROR_WARNING_FORM));
};

export { getData, sendData };
