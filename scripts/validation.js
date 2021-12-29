const showErrorMessage = (form, input, errorMessage, inputErrorClass) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = errorMessage;
  input.classList.add(`${inputErrorClass}`);
};

const hideErrorMessage = (form, input, inputErrorClass) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  errorElement.textContent = "";
  input.classList.remove(`${inputErrorClass}`);
};

const inputValidity = (form, input, inputErrorClass) => {
  if (!input.validity.valid) {
    showErrorMessage(form, input, input.validationMessage, inputErrorClass);
  } else {
    hideErrorMessage(form, input, inputErrorClass);
  }
};

const disableButton = (inputList, button, inactiveButtonClass) => {
  console.log(button);
  if (hasInvalidInput(inputList)) {
    button.classList.add(`${inactiveButtonClass}`);
    button.disabled = true;
  } else {
    button.classList.remove(`${inactiveButtonClass}`);
    button.disabled = false;
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const setEventListeners = (
  form,
  inputSelector,
  submitButtonSelector,
  inputErrorClass,
  inactiveButtonClass
) => {
  const inputList = Array.from(form.querySelectorAll(`${inputSelector}`));
  const button = form.querySelector(`${submitButtonSelector}`);
  disableButton(inputList, button, inactiveButtonClass);
  inputList.forEach((input) => {
    input.addEventListener("input", (e) => {
      inputValidity(form, input, inputErrorClass);
      disableButton(inputList, button, inactiveButtonClass);
    });
  });
};

const enableValidation = (obj) => {
  const formList = document.querySelectorAll(`${obj.formSelector}`);
  formList.forEach((form) => {
    setEventListeners(
      form,
      obj.inputSelector,
      obj.submitButtonSelector,
      obj.inputErrorClass,
      obj.inactiveButtonClass
    );
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__input_type_error",
});
