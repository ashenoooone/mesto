export class FormValidator {
  constructor(data, form) {
    this._form = form;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._button = this._form.querySelector(this._submitButtonSelector);
  }

  _showErrorMessage(input, errorMessage) {
    this._errorElement = this._form.querySelector(`.${input.id}-error`);
    this._errorElement.textContent = errorMessage;
    input.classList.add(this._inputErrorClass);
  }

  _hideErrorMessage(input) {
    this._errorElement = this._form.querySelector(`.${input.id}-error`);
    this._errorElement.textContent = "";
    input.classList.remove(this._inputErrorClass);
  }

  _inputValidity(input) {
    if (!input.validity.valid) {
      this._showErrorMessage(input, input.validationMessage);
    } else {
      this._hideErrorMessage(input);
    }
  }

  _toggleButton() {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  _setEventListeners() {
    this._toggleButton();
    this._inputList.forEach((input) => {
      input.addEventListener("input", (e) => {
        this._inputValidity(input);
        this._toggleButton();
      });
    });
  }

  resetValidation() {
    this._toggleButton();
    this._inputList.forEach((input) => {
      this._hideErrorMessage(input);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}
