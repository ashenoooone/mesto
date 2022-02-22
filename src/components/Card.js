export class Card {
  constructor(response, cardSelector, popup, confirmationPopup, api) {
    this._name = response.name;
    this._link = response.link;
    this._likes = response.likes;
    this._id = response._id;
    this._owner = response.owner;
    this._cardSelector = cardSelector;
    this._popup = popup;
    this._confirmationPopup = confirmationPopup;
    this._api = api;
    this._response = response;
  }
  _getTemplate() {
    const card = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return card;
  }

  _likeClickHandler() {
    if (!this._likeButton.classList.contains("card__like-button_active")) {
      this._api
        .putLike(this._element._cardId)
        .then((res) => {
          this._likeButton.classList.add("card__like-button_active");
          this._likesElement.textContent++;
        })
        .catch((err) => alert(err));
    } else {
      this._api
        .deleteLike(this._element._cardId)
        .then((res) => {
          this._likeButton.classList.remove("card__like-button_active");
          this._likesElement.textContent--;
        })
        .catch((err) => alert(err));
    }
  }

  _deleteCardHandler() {
    this._confirmationPopup.open(this._element);
  }

  _openPopupHandler() {
    this._popup.open(this._name, this._link);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._likeClickHandler();
    });
    this._deleteButton.addEventListener("click", () => {
      this._deleteCardHandler();
    });
    this._imageElement.addEventListener("click", (item) => {
      this._openPopupHandler(item);
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector(".card__title");
    this._imageElement = this._element.querySelector(".card__image");
    this._likeButton = this._element.querySelector(".card__like-button");
    this._deleteButton = this._element.querySelector(".card__delete-button");
    this._likesElement = this._element.querySelector(".card__like-counter");
    this._likesElement.textContent = this._likes.length;
    this._titleElement.textContent = this._name;
    this._imageElement.src = this._link;
    this._imageElement.alt = this._name;
    this._element._cardId = this._id;
    this._element._owner = this._owner;
    if (this._likes.some((el) => el._id == "f803110ccd9630f1871c1819")) {
      this._likeButton.classList.add("card__like-button_active");
    }
    if (this._element._owner._id != "f803110ccd9630f1871c1819") {
      this._deleteButton.remove();
    }
    this._setEventListeners();
    return this._element;
  }
}
