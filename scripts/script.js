const popupEditForm = document.querySelector(".popup__form_type_edit");
const popupAddCardForm = document.querySelector(".popup__form_type_add_card");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelectorAll(".popup__close-button");
const popupEditName = document.querySelector(".popup__input_type_name");
const popupEditActivity = document.querySelector(".popup__input_type_activity");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");
const addButton = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const elementsList = document.querySelector(".elements");
const cardTemplate = document.querySelector(".template__card");
const popupAddName = document.querySelector(".popup__input_type_name");
const popupAddLink = document.querySelector(".popup__input_type_link");
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
function renderInitialElemens() {
  for (let i = 0; i < initialCards.length; i++) {
    const newItem = cardTemplate.content.cloneNode(true).querySelector(".card");
    newItem.querySelector(".card__title").textContent = initialCards[i].name;
    newItem.querySelector(".card__image").alt = initialCards[i].name;
    newItem.querySelector(".card__image").src = initialCards[i].link;
    newItem
      .querySelector(".card__like-button")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("card__like-button_active");
      });
    newItem
      .querySelector(".card__delete-button")
      .addEventListener("click", (evt) => {
        evt.target.parentElement.remove();
      });
    elementsList.insertAdjacentElement("beforeend", newItem);
  }
}
renderInitialElemens();

function popupAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = cardTemplate.content.cloneNode(true).querySelector(".card");
  const newCardName = newCard.querySelector(".card__title");
  const newCardImage = newCard.querySelector(".card__image");
  newCardName.textContent = popupAddName.value;
  newCardImage.src = popupAddName.value;
  newCardImage.src = popupAddLink.value;
  newCard
    .querySelector(".card__like-button")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like-button_active");
    });
  newCard
    .querySelector(".card__delete-button")
    .addEventListener("click", (evt) => {
      evt.target.parentElement.remove();
    });
  elementsList.insertAdjacentElement("beforeend", newCard);
  evt.target.closest(".popup").classList.remove("popup_active");
}

function popupEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = this.querySelector(".popup__input_type_name").value;
  profileActivity.textContent = this.querySelector(
    ".popup__input_type_activity"
  ).value;
  evt.target.closest(".popup").classList.remove("popup_active");
}
popupCloseButton.forEach((item) => {
  item.addEventListener("click", () => {
    item.closest(".popup").classList.remove("popup_active");
  });
});
editButton.addEventListener("click", () => {
  popupEditProfile.classList.add("popup_active");
  popupEditName.value = profileName.textContent;
  popupEditActivity.value = profileActivity.textContent;
});
popupEditForm.addEventListener("submit", popupEditProfileSubmit);
addButton.addEventListener("click", () => {
  popupAddCard.classList.add("popup_active");
  popupAddLink.value = "";
  popupAddName.value = "";
});
popupAddCardForm.addEventListener("submit", popupAddCardSubmit);
