import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards, validationSettings } from "./constants.js";
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
const formValidators = {};

initialCards.forEach((item) => {
  elementsList.append(createCard(item.name, item.link, ".template__card"));
});

function createCard(name, link, templateClass) {
  const card = new Card(name, link, templateClass);
  return card.generateCard();
}

formList.forEach((item) => {
  const formValidator = new FormValidator(validationSettings, item);
  formValidators[item.name] = formValidator;
  formValidators[item.name].enableValidation();
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

function submitPopupAddCard(evt) {
  evt.preventDefault();
  elementsList.prepend(
    createCard(popupAddName.value, popupAddLink.value, ".template__card")
  );
  popupAddCardForm.reset();
  closePopup(popupAddCard);
}

function submitPopupEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = popupEditName.value;
  profileActivity.textContent = popupEditActivity.value;
  closePopup(popupEditProfile);
}

popupCloseButtons.forEach((item) => {
  item.addEventListener("click", (evt) => {
    closePopup(evt.target.closest(".popup"));
  });
});
editButton.addEventListener("click", () => {
  popupEditName.value = profileName.textContent;
  popupEditActivity.value = profileActivity.textContent;
  formValidators[popupEditForm.name].resetValidation();
  openPopup(popupEditProfile);
});
popupEditForm.addEventListener("submit", submitPopupEditProfile);
addButton.addEventListener("click", () => {
  formValidators[popupAddCardForm.name].resetValidation();
  openPopup(popupAddCard);
});
popupAddCardForm.addEventListener("submit", submitPopupAddCard);
popups.forEach((popup) => {
  popup.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      closePopup(popup);
    }
  });
});
