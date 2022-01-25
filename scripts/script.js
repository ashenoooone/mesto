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
const popupAddName = document.querySelector(".popup__input_type_title");
const popupAddLink = document.querySelector(".popup__input_type_link");
const popupZoomedCard = document.querySelector(".popup_type_zoomedCard");
const popups = Array.from(document.querySelectorAll(".popup"));
const formList = Array.from(document.querySelectorAll(".popup__form"));
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
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

initialCards.forEach((item) => {
  const card = new Card(item.name, item.link, ".template__card");
  elementsList.append(card.generateCard());
});

formList.forEach((item) => {
  const formValidator = new FormValidator(
    {
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__save-button",
      inactiveButtonClass: "popup__save-button_inactive",
      inputErrorClass: "popup__input_type_error",
    },
    item
  );
  item.formValidator = formValidator;
  item.formValidator.enableValidation();
});

export function openPopupZoomedCard(cardTitle, cardImage) {
  popupZoomedCard.querySelector(".zoomedCard__title").textContent = cardTitle;
  popupZoomedCard.querySelector(".zoomedCard__image").alt = cardTitle;
  popupZoomedCard.querySelector(".zoomedCard__image").src = cardImage;
  openPopup(popupZoomedCard);
}

function closePopup(popup) {
  popup.classList.remove("popup_active");
  document.removeEventListener("keydown", escapeHadler);
}

function openPopup(popup) {
  popup.classList.add("popup_active");
  document.addEventListener("keydown", escapeHadler);
}

function escapeHadler(evt) {
  const popup = document.querySelector(".popup_active");
  if (evt.key === "Escape") {
    closePopup(popup);
  }
}

function popupAddCardSubmit(evt) {
  evt.preventDefault();
  const card = new Card(
    popupAddName.value,
    popupAddLink.value,
    ".template__card"
  );
  elementsList.prepend(card.generateCard());
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
  popupEditForm.formvalidator.resetValidation();
  openPopup(popupEditProfile);
});
popupEditForm.addEventListener("submit", popupEditProfileSubmit);
addButton.addEventListener("click", () => {
  popupAddCardForm.reset();
  popupAddCardForm.formValidator.resetValidation();
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
