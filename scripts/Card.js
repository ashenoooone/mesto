import { openPopupZoomedCard } from "./index.js";
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

  _likeClickHandler() {
    this._likeButton.classList.add("card__like-button_active");
  }

  _deleteCardHandler() {
    this._element.remove();
    this._element = null;
  }

  _openPopupHandler(evt) {
    // данная проверка нужна т.к событие вешается на весь элемент сразу => будет
    //  срабатывать при нажатии на любой дочерний элемент), а чтобы она работала только
    //  при клике на картинку пришлось добавить такое условие,
    //  (не вешал прослушиватель на картинку по той причине,
    //  что затемнение делал через псевдоэлемент =>
    //  при клике на кратинку тригерится именно .card), впринципе можно сделать
    //  затемнение через box-shadow для картинки и тогда вешать прослушиватель
    //  на картинку, но прошлые ревью пропустили и я решил что и так сойдет)
    if (evt.target.classList.contains("card")) {
      openPopupZoomedCard(this._name, this._link);
    }
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._likeClickHandler();
    });
    this._deleteButton.addEventListener("click", () => {
      this._deleteCardHandler();
    });
    this._element.addEventListener("click", (item) => {
      this._openPopupHandler(item);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector(".card__title");
    this._imageElement = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._titleElement.textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._setEventListeners();
    return this._element;
  }
}
