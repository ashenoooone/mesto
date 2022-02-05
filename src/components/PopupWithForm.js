import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
  constructor(selector, submitFunc) {
    super(selector);
    this._submitFunc = submitFunc;
    this._form = this._element.querySelector(".popup__form");
  }
  _getInputValues() {
    this._inputList = Array.from(
      this._element.querySelectorAll(".popup__input")
    );
    this._inputValues = {};
    this._inputList.forEach((item) => {
      this._inputValues[item.name] = item.value;
    });
    return this._inputValues;
  }
  close() {
    super.close();
    this._form.reset();
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitFunc(this._getInputValues());
    });
  }
}
