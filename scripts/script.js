const popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup__form");
const popupOpenButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelector(".popup__close-button");
const popupName = document.querySelector(".popup__input_type_name");
const popupActivity = document.querySelector(".popup__input_type_activity");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");
const likeButton = document.querySelectorAll(".card__like-button");
const addButton = document.querySelector(".profile__add-button");
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
const elementsList = document.querySelector(".elements");
function renderCards() {
  for (let i = 0; i < initialCards.length; i++) {
    const newItem = cardTemplate.content.cloneNode(true).querySelector(".card");
    const element = initialCards[i];
    console.log(newItem, element);
    newItem.querySelector(".card__title").textContent = element.name;
    newItem.querySelector(".card__image").alt = element.name;
    newItem.querySelector(".card__image").src = element.link;
    elementsList.append(newItem);
  }
}
renderCards();
function popupOpen() {
  popup.classList.add("popup_active");
  popupName.value = profileName.textContent;
  popupActivity.value = profileActivity.textContent;
}

function popupClose() {
  popup.classList.remove("popup_active");
}
function popupSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileActivity.textContent = popupActivity.value;
  popupClose();
}
popupCloseButton.addEventListener("click", popupClose);
popupOpenButton.addEventListener("click", popupOpen);
popupForm.addEventListener("submit", popupSubmit);
addButton.addEventListener("click", popupOpen);
likeButton.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("card__like-button_active");
  });
});
