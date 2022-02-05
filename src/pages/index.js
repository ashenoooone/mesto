import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  initialCards,
  validationSettings,
  elementsList,
  popupEditForm,
  popupAddCardForm,
  editButton,
  popupEditName,
  popupEditActivity,
  addButton,
  formList,
  formValidators,
} from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { Popup } from "../components/Popup.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import "./index.css";
const popupAddCard = new PopupWithForm(".popup_type_add-card", (data) => {
  elements.addItem(
    createCard(data.inputTitle, data.inputLink, ".template__card"),
    false
  );
  popupAddCard.close();
});
const popupEditProfile = new PopupWithForm(
  ".popup_type_edit-profile",
  (data) => {
    userInfo.setUserInfo(data.inputName, data.inputActivity);
    popupEditProfile.close();
  }
);
const popupZoomedCard = new PopupWithImage(".popup_type_zoomed-card");
popupZoomedCard.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
const elements = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = createCard(item.name, item.link, ".template__card");
      elements.addItem(card, true);
    },
  },
  elementsList
);
elements.renderInitialCards();
const userInfo = new UserInfo({
  profileName: ".profile__name",
  profileActivity: ".profile__activity",
});

function createCard(name, link, templateClass) {
  const card = new Card(name, link, templateClass, popupZoomedCard);
  return card.generateCard();
}

formList.forEach((item) => {
  const formValidator = new FormValidator(validationSettings, item);
  formValidators[item.name] = formValidator;
  formValidators[item.name].enableValidation();
});

editButton.addEventListener("click", () => {
  popupEditName.value = userInfo.getUserInfo().name;
  popupEditActivity.value = userInfo.getUserInfo().activity;
  formValidators[popupEditForm.name].resetValidation();
  popupEditProfile.open();
});
addButton.addEventListener("click", () => {
  formValidators[popupAddCardForm.name].resetValidation();
  popupAddCard.open();
});
