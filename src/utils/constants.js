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
export const profilePhotoSelector = ".profile__avatar";
export const profileNameElement = document.querySelector(profileNameSelector);
export const profileActivityElement = document.querySelector(
  profileActivitySelector
);
export const profilePhotoElement = document.querySelector(profilePhotoSelector);
export const popupDeleteCardSelector = ".popup_type_delete-card";
export const avatarSelector = ".profile__avatar";
export const avatarContainerElement = document.querySelector(
  ".profile__image-container"
);
export const popupTypeEditAvatarSelector = ".popup_type_edit-avatar";
export const popupEditAvatarForm = document.querySelector(
  ".popup__form_type_edit-avatar"
);
export const popupTypeAddCardSubmitButton = document
  .querySelector(popupTypeAddCardSelector)
  .querySelector(".popup__save-button");
export const popupTypeEditProfileSubmitButton = document
  .querySelector(popupTypeEditProfileSelector)
  .querySelector(".popup__save-button");
export const popupDeleteCardSubmitButton = document
  .querySelector(popupDeleteCardSelector)
  .querySelector(".popup__save-button");
export const popupTypeEditAvatarSubmitButton = document
  .querySelector(popupTypeEditAvatarSelector)
  .querySelector(".popup__save-button");
