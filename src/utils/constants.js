export const initialCards = [
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

export const validationSettings = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-button",
  inactiveButtonClass: "popup__save-button_inactive",
  inputErrorClass: "popup__input_type_error",
};

export const elementsList = ".elements";
export const popupEditForm = document.querySelector(".popup__form_type-edit");
export const popupAddCardForm = document.querySelector(
  ".popup__form_type_add-card"
);
export const editButton = document.querySelector(".profile__edit-button");
export const popupEditName = document.querySelector(".popup__input_type_name");
export const popupEditActivity = document.querySelector(
  ".popup__input_type_activity"
);
export const addButton = document.querySelector(".profile__add-button");
export const formList = Array.from(document.querySelectorAll(".popup__form"));
export const formValidators = {};
export const templateCardSelector = ".template__card";
export const profileNameSelector = ".profile__name";
export const profileActivitySelector = ".profile__activity";
export const popupTypeAddCardSelector = ".popup_type_add-card";
export const popupTypeEditProfileSelector = ".popup_type_edit-profile";
export const popupTypeZoomedCardSelector = ".popup_type_zoomed-card";
