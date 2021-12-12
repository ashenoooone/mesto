const popupEditForm = document.querySelector(".popup__form_type-edit");
const popupAddCardForm = document.querySelector(".popup__form_type_add-card");
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
const templateCardZoom = document.querySelector(".template__card-zoom");
const page = document.querySelector(".page");
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
    const newItemTitle = newItem.querySelector(".card__title");
    const newItemImage = newItem.querySelector(".card__image");
    const newItemLikeButton = newItem.querySelector(".card__like-button");
    const newItemDeleteButton = newItem.querySelector(".card__delete-button");
    const newItemZoomedCard = templateCardZoom.content
      .cloneNode(true)
      .querySelector(".popup");
    const newItemZoomedCardName =
      newItemZoomedCard.querySelector(".zoomedCard__title");
    const newItemZoomedCardImage =
      newItemZoomedCard.querySelector(".zoomedCard__image");
    const newItemZoomedCardCloseButton = newItemZoomedCard.querySelector(
      ".popup__close-button"
    );
    newItemTitle.textContent = initialCards[i].name;
    newItemImage.alt = initialCards[i].name;
    newItemImage.src = initialCards[i].link;
    newItemZoomedCard.id = newItemTitle.textContent;
    newItemZoomedCardName.textContent = newItemTitle.textContent;
    newItemZoomedCardImage.src = newItemImage.src;
    newItemZoomedCardImage.alt = newItemTitle.textContent;
    newItemZoomedCardCloseButton.addEventListener("click", (evt) => {
      evt.currentTarget.closest(".popup").classList.remove("popup_active");
    });
    newItem.addEventListener("click", (evt) => {
      if (
        newItemZoomedCard.id == newItemTitle.textContent &&
        evt.target.classList.contains("card")
      ) {
        newItemZoomedCard.classList.add("popup_active");
      }
    });
    newItemLikeButton.addEventListener("click", (evt) => {
      evt.target.classList.toggle("card__like-button_active");
    });
    newItemDeleteButton.addEventListener("click", (evt) => {
      evt.target.parentElement.remove();
    });
    page.insertAdjacentElement("afterend", newItemZoomedCard);
    elementsList.insertAdjacentElement("beforeend", newItem);
  }
}

renderInitialElemens();

function popupAddCardSubmit(evt) {
  evt.preventDefault();
  const newCard = cardTemplate.content.cloneNode(true).querySelector(".card");
  const newCardTitle = newCard.querySelector(".card__title");
  const newCardImage = newCard.querySelector(".card__image");
  const newCardLikeButton = newCard.querySelector(".card__like-button");
  const newCardDeleteButton = newCard.querySelector(".card__delete-button");
  const newItemZoomedCard = templateCardZoom.content
    .cloneNode(true)
    .querySelector(".popup");
  const newItemZoomedCardName =
    newItemZoomedCard.querySelector(".zoomedCard__title");
  const newItemZoomedCardImage =
    newItemZoomedCard.querySelector(".zoomedCard__image");
  const newItemZoomedCardCloseButton = newItemZoomedCard.querySelector(
    ".popup__close-button"
  );
  newCardTitle.textContent = popupAddName.value;
  newCardImage.alt = popupAddName.value;
  newCardImage.src = popupAddLink.value;
  newItemZoomedCard.id = newCardTitle.textContent;
  newItemZoomedCardName.textContent = newCardTitle.textContent;
  newItemZoomedCardImage.src = newCardImage.src;
  newItemZoomedCardImage.alt = newCardTitle.textContent;
  newItemZoomedCardCloseButton.addEventListener("click", (evt) => {
    evt.currentTarget.closest(".popup").classList.remove("popup_active");
  });
  newCard.addEventListener("click", (evt) => {
    if (
      newItemZoomedCard.id == newCardTitle.textContent &&
      evt.target.classList.contains("card")
    ) {
      newItemZoomedCard.classList.add("popup_active");
    }
  });
  newCardLikeButton.addEventListener("click", (evt) => {
    evt.target.classList.toggle("card__like-button_active");
  });
  newCardDeleteButton.addEventListener("click", (evt) => {
    evt.target.parentElement.remove();
  });
  page.insertAdjacentElement("afterend", newItemZoomedCard);
  elementsList.insertAdjacentElement("beforeend", newCard);
  evt.target.closest(".popup").classList.remove("popup_active");
}

function popupEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = evt.target.querySelector(
    ".popup__input_type_name"
  ).value;
  profileActivity.textContent = evt.target.querySelector(
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
