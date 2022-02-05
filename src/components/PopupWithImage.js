import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._element.querySelector(".zoomed-card__title");
    this._image = this._element.querySelector(".zoomed-card__image");
  }
  open(cardTitle, cardImage) {
    this._title.textContent = cardTitle;
    this._image.alt = cardTitle;
    this._image.src = cardImage;
    super.open();
  }
}
