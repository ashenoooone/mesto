export class Popup {
  constructor(popupSelector) {
    this._element = document.querySelector(popupSelector);
    this._handleEscClose = function (evt) {
      if (evt.key === "Escape") {
        this.close();
      }
    }.bind(this);
  }
  open() {
    this._element.classList.add("popup_active");
    document.addEventListener("keydown", this._handleEscClose);
  }
  close() {
    this._element.classList.remove("popup_active");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  setEventListeners() {
    const closeButton = this._element.querySelector(".popup__close-button");
    closeButton.addEventListener("click", () => this.close());
    this._element.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup")) {
        this.close();
      }
    });
  }
}
