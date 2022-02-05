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
    this._element.classList.remove("popup_active");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
    this._form.reset();
  }
  setEventListeners() {
    const closeButton = this._element.querySelector(".popup__close-button");
    closeButton.addEventListener("click", () => this.close());
    this._element.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup")) {
        this.close();
      }
    });
    this._form.addEventListener("submit", (evt) => {
      this._submitFunc(evt);
    });
  }
}
