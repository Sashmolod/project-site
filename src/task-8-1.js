const refs = {
  gallery: document.querySelector(".js-gallery"),
  largeImage: document.querySelector(".lightbox__image"),
  modal: document.querySelector(".lightbox"),
  closeModalBtn: document.querySelector(".lightbox__button"),
  closeModal: document.querySelector(".lightbox__content"),
};

const { gallery, largeImage, modal, closeModalBtn, closeModal } = refs;

gallery.addEventListener("click", onGalleryClick);
closeModalBtn.addEventListener("click", onCloseGalleryBtn);
closeModal.addEventListener("click", onBackDropClick);

function onGalleryClick(event) {
  event.preventDefault();
  window.addEventListener("keydown", onPressEscape);
  //console.dir(event.target);
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imageRef = event.target;
  const largeImageURL = imageRef.dataset.source;
  largeImage.src = largeImageURL;
  modal.classList.add("is-open");
  closeModal.classList.add("lightbox", "is-open");
}

function onCloseGalleryBtn() {
  window.removeEventListener("keydown", onPressEscape);
  modal.classList.remove("is-open");
  closeModal.classList.remove("lightbox", "is-open");
  largeImage.src = "";
}

function onBackDropClick(event) {
  if (event.target === event.currentTarget) {
    onCloseGalleryBtn();
  }
}

function onPressEscape(event) {
  if (event.code === "Escape") {
    onCloseGalleryBtn();
  }
}
