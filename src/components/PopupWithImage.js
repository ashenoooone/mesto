import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(cardTitle, cardImage) {
    this._element.querySelector(".zoomed-card__title").textContent = cardTitle;
    this._element.querySelector(".zoomed-card__image").alt = cardTitle;
    this._element.querySelector(".zoomed-card__image").src = cardImage;
    this._element.classList.add("popup_active");
    document.addEventListener("keydown", super._handleEscClose.bind(this));
  }
}
