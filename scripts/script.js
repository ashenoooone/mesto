const form = document.querySelector(".form");
const formOpenButton = document.querySelector(".profile__edit-button");
const formCloseButton = document.querySelector(".form__close-button");
const formSaveButton = document.querySelector(".form__save-button");
const likeButtons = document.querySelectorAll(".elements__like-button");
const formName = document.querySelector(".form__input_type_name");
const formActivity = document.querySelector(".form__input_type_activity");
const profileName = document.querySelector(".profile__name");
const profileActivity = document.querySelector(".profile__activity");

function formOpen() {
  form.classList.add("form_active");
  formName = profileName;
  formActivity = profileActivity;
}

function formClose() {
  form.classList.remove("form_active");
}
function formSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = formName.value;
  profileActivity.textContent = formActivity.value;
  formClose();
}
formOpenButton.addEventListener("click", formOpen);
formCloseButton.addEventListener("click", formClose);
form.addEventListener("submit", formSubmit);
