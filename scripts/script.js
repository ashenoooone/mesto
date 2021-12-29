const popupEditForm = document.querySelector(".popup__form_type-edit");
const popupAddCardForm = document.querySelector(".popup__form_type_add-card");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseButtons = document.querySelectorAll(".popup__close-button");
const popupEditName = document.querySelector(".popup__input_type_name");
const popupEditActivity = document.querySelector(".popup__input_type_activity");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");
const addButton = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const elementsList = document.querySelector(".elements");
const cardTemplate = document.querySelector(".template__card");
const popupAddName = document.querySelector(".popup__input_type_title");
const popupAddLink = document.querySelector(".popup__input_type_link");
const popupZoomedCard = document.querySelector(".popup_type_zoomedCard");
const popups = Array.from(document.querySelectorAll(".popup"));
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function createCard(cardName, cardLink) {
  const newItem = cardTemplate.content.cloneNode(true).querySelector(".card");
  const newItemTitle = newItem.querySelector(".card__title");
  const newItemImage = newItem.querySelector(".card__image");
  const newItemLikeButton = newItem.querySelector(".card__like-button");
  const newItemDeleteButton = newItem.querySelector(".card__delete-button");
  newItemTitle.textContent = cardName;
  newItemImage.alt = cardName;
  newItemImage.src = cardLink;
  newItemLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-button_active");
  });
  newItemDeleteButton.addEventListener("click", (evt) => {
    evt.target.parentElement.remove();
  });
  newItem.addEventListener("click", (item) => {
    if (item.target.classList.contains("card")) {
      openPopupZoomedCard(newItemTitle.textContent, newItemImage.src);
    }
  });
  return newItem;
}

function openPopupZoomedCard(cardTitle, cardImage) {
  popupZoomedCard.querySelector(".zoomedCard__title").textContent = cardTitle;
  popupZoomedCard.querySelector(".zoomedCard__image").alt = cardTitle;
  popupZoomedCard.querySelector(".zoomedCard__image").src = cardImage;
  openPopup(popupZoomedCard);
}

function renderInitialElemens() {
  initialCards.forEach((card) => {
    elementsList.append(createCard(card.name, card.link));
  });
}

renderInitialElemens();

function resetValidation(popup) {
  const inputList = Array.from(popup.querySelectorAll(".popup__input"));
  const button = popup.querySelector(".popup__save-button");
  if (
    inputList.some((input) => {
      return !input.validity.valid;
    })
  ) {
    button.classList.add("popup__save-button_inactive");
  } else {
    button.classList.remove("popup__save-button_inactive");
  }
  inputList.forEach((input) => {
    const inputErrorSpan = popup.querySelector(`.${input.id}-error`);
    input.classList.remove("popup__input_type_error");
    inputErrorSpan.textContent = "";
  });
}

let escapeHandler = (evt) => {};

function addEscapeHandler(popup) {
  return (escapeHandler = (evt) => {
    if (evt.key === "Escape") {
      closePopup(popup);
    }
  });
}

function closePopup(popup) {
  document.removeEventListener("keydown", escapeHandler);
  popup.classList.remove("popup_active");
}

function openPopup(popup) {
  document.addEventListener("keydown", addEscapeHandler(popup));
  popup.classList.add("popup_active");
}

function popupAddCardSubmit(evt) {
  evt.preventDefault();
  elementsList.prepend(createCard(popupAddName.value, popupAddLink.value));
  closePopup(evt.target.closest(".popup"));
}

function popupEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = evt.target.querySelector(
    ".popup__input_type_name"
  ).value;
  profileActivity.textContent = evt.target.querySelector(
    ".popup__input_type_activity"
  ).value;
  closePopup(evt.target.closest(".popup"));
}

popupCloseButtons.forEach((item) => {
  item.addEventListener("click", (evt) => {
    closePopup(evt.target.closest(".popup"));
  });
});
editButton.addEventListener("click", () => {
  popupEditName.value = profileName.textContent;
  popupEditActivity.value = profileActivity.textContent;
  resetValidation(popupEditProfile);
  openPopup(popupEditProfile);
});
popupEditForm.addEventListener("submit", popupEditProfileSubmit);
addButton.addEventListener("click", () => {
  popupAddCardForm.reset();
  resetValidation(popupAddCard);
  openPopup(popupAddCard);
});
popupAddCardForm.addEventListener("submit", popupAddCardSubmit);
popups.forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});
