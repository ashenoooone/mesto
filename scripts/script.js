const popupForm = document.querySelector(".popup__form");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelectorAll(".popup__close-button");
const popupName = document.querySelector(".popup__input_type_name");
const popupActivity = document.querySelector(".popup__input_type_activity");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");
const addButton = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");
const elementsList = document.querySelector(".elements");
const cardTemplate = document.querySelector(".template__card");
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
    newItem.querySelector(".card__title").alt = initialCards[i].name;
    newItem.querySelector(".card__image").src = initialCards[i].link;
    elementsList.insertAdjacentElement("beforeend", newItem);
  }
}
renderInitialElemens();
function popupSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileActivity.textContent = popupActivity.value;
  popupClose();
}
popupCloseButton.forEach((item) => {
  item.addEventListener("click", () => {
    item.closest(".popup").classList.remove("popup_active");
  });
});
editButton.addEventListener("click", () => {
  popupEditProfile.classList.add("popup_active");
});
popupForm.addEventListener("submit", popupSubmit);
addButton.addEventListener("click", () => {
  popupAddCard.classList.add("popup_active");
});
document.querySelectorAll(".card__like-button").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("card__like-button_active");
  });
});
