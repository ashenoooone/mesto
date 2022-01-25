import { openPopupZoomedCard } from "./script.js";
export class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const card = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return card;
  }

  _setEventListeners() {
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("card__like-button_active");
      });
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", (evt) => {
        evt.target.parentElement.remove();
      });
    this._element.addEventListener("click", (item) => {
      if (item.target.classList.contains("card")) {
        openPopupZoomedCard(this._name, this._link);
      }
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._setEventListeners();
    return this._element;
  }
}
