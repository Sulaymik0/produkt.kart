const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openButton = document.querySelector(".footer__button");
const closeButton = document.querySelector(".modal .modal-close");
const emailForm = document.querySelector("#email-form");

function openModal(event) {
  event.preventDefault();
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
}

function closeModal() {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

emailForm.addEventListener("submit", (event) => {
  event.preventDefault();
});