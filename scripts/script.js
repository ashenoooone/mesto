const popupForm = document.querySelector(".popup__form");
const editButton = document.querySelector(".profile__edit-button");
const popupCloseButton = document.querySelectorAll(".popup__close-button");
const popupName = document.querySelector(".popup__input_type_name");
const popupActivity = document.querySelector(".popup__input_type_activity");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");
const likeButton = document.querySelectorAll(".card__like-button");
const addButton = document.querySelector(".profile__add-button");
const popupAddCard = document.querySelector(".popup_type_add-card");
const popupEditProfile = document.querySelector(".popup_type_edit-profile");

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
likeButton.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("card__like-button_active");
  });
});
