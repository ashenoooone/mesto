const form = document.querySelector(".form");
const formOpenButton = document.querySelector(".profile__edit-button");
const formCloseButton = document.querySelector(".form__close-button");
const formSaveButton = document.querySelector(".form__save-button");
const likeButtons = document.querySelectorAll(".elements__like-button");

function formOpen() {
  form.classList.add("form_active");
  document.body.classList.add("hidden");
}

function formClose() {
  form.classList.remove("form_active");
  document.body.classList.remove("hidden");
}
function formSubmit(evt) {
  evt.preventDefault();
  let formName = document.querySelector(".form__name").value;
  let formActivity = document.querySelector(".form__activity").value;
  let profileName = document.querySelector(".profile__name");
  let profileActivity = document.querySelector(".profile__activity");
  profileName.textContent = formName;
  profileActivity.textContent = formActivity;
  form.classList.remove("form_active");
  document.body.classList.remove("hidden");
}
formOpenButton.addEventListener("click", formOpen);
formCloseButton.addEventListener("click", formClose);
form.addEventListener("submit", formSubmit);
likeButtons.forEach((item) => {
  item.addEventListener("click", (likeClick) => {
    item.classList.toggle("elements__like-button_active");
  });
});
