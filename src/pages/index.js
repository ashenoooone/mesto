import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import {
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
  avatarContainerElement,
  templateCardSelector,
  profileNameSelector,
  profileActivitySelector,
  popupTypeAddCardSelector,
  popupTypeEditProfileSelector,
  popupTypeZoomedCardSelector,
  popupDeleteCardSelector,
  avatarSelector,
  popupTypeEditAvatarSelector,
  popupTypeAddCardSubmitButton,
  popupTypeEditProfileSubmitButton,
  popupDeleteCardSubmitButton,
  popupTypeEditAvatarSubmitButton,
  popupEditAvatarForm,
} from "../utils/constants.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import "./index.css";
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort36",
  headers: {
    authorization: "d44c6c7e-d802-4b13-ab66-d4df3d277557",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  profileName: profileNameSelector,
  profileActivity: profileActivitySelector,
  avatar: avatarSelector,
});

api
  .getInitialProfileInfo()
  .then((profileInfo) => {
    userInfo.setUserInfo(profileInfo.name, profileInfo.about, profileInfo._id);
    userInfo.setUserAvatar(profileInfo.avatar);
  })
  .catch((e) => alert(e));

const popupDeleteCard = new PopupWithConfirmation(
  popupDeleteCardSelector,
  (card) => {
    popupDeleteCardSubmitButton.textContent = "Удаление...";
    api
      .deleteCard(card._cardId)
      .then((res) => {
        card.remove();
        popupDeleteCard.close();
      })
      .finally(() => {
        popupDeleteCardSubmitButton.textContent = "Да";
      })
      .catch((err) => {
        alert(err);
      });
  }
);
const popupAddCard = new PopupWithForm(popupTypeAddCardSelector, (data) => {
  popupTypeAddCardSubmitButton.textContent = "Создаю...";
  api
    .addCard(data.inputTitle, data.inputLink)
    .then((res) => {
      elements.addItem(
        createCard(res, templateCardSelector, popupDeleteCard, {
          putLike: api.putLike,
          deleteLike: api.deleteLike,
          userId: userInfo.getUserInfo().id,
        }),
        false
      );
      popupAddCard.close();
    })
    .finally(() => {
      popupTypeAddCardSubmitButton.textContent = "Создать";
    })
    .catch((e) => alert(e));
});
const popupEditProfile = new PopupWithForm(
  popupTypeEditProfileSelector,
  (data) => {
    popupTypeEditProfileSubmitButton.textContent = "Сохраняю...";
    api
      .editProfile(data.inputName, data.inputActivity)
      .then((res) => {
        userInfo.setUserInfo(res.name, res.about);
        popupEditProfile.close();
      })
      .finally(() => {
        popupTypeEditProfileSubmitButton.textContent = "Сохранить";
      })
      .catch((e) => alert(e));
  }
);

const popupEditAvatar = new PopupWithForm(
  popupTypeEditAvatarSelector,
  (data) => {
    popupTypeEditAvatarSubmitButton.textContent = "Сохраняю...";
    api
      .setNewAvatar(data.inputAvatarLink)
      .then((res) => {
        userInfo.setUserAvatar(data.inputAvatarLink);
        popupEditAvatar.close();
      })
      .finally(() => {
        popupTypeEditAvatarSubmitButton.textContent = "Сохранить";
      })
      .catch((e) => alert(e));
  }
);

const popupZoomedCard = new PopupWithImage(popupTypeZoomedCardSelector);

popupDeleteCard.setEventListeners();
popupZoomedCard.setEventListeners();
popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupEditAvatar.setEventListeners();

const elements = new Section(
  {
    data: api.getInitialCards(),
    renderer: (item) => {
      const card = createCard(item, templateCardSelector, popupDeleteCard, {
        putLike: api.putLike,
        deleteLike: api.deleteLike,
        userId: userInfo.getUserInfo().id,
      });
      elements.addItem(card, true);
    },
  },
  elementsList
);

elements.renderInitialCards();

function createCard(response, templateClass, popupDeleteCard, api) {
  const card = new Card(
    response,
    templateClass,
    popupZoomedCard,
    popupDeleteCard,
    api
  );
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

avatarContainerElement.addEventListener("click", () => {
  formValidators[popupEditAvatarForm.name].resetValidation();
  popupEditAvatar.open();
});
