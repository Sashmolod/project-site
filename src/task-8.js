import * as app from "./app.js";

//console.table(app.galleryItems);

const createImageCard = image => {
  const containerRef = document.createElement("li");
  containerRef.classList.add("gallery__item");

  const imagePreviewRef = document.createElement("a");
  imagePreviewRef.classList.add("gallery__link");
  imagePreviewRef.href = image.original;

  const imageOriginalRef = document.createElement("img");
  imageOriginalRef.classList.add("gallery__image");
  imageOriginalRef.src = image.preview;
  imageOriginalRef.setAttribute("data-source", image.original);
  imageOriginalRef.alt = image.description;
  imageOriginalRef.setAttribute("data-index", image.index);

  containerRef.appendChild(imagePreviewRef);
  imagePreviewRef.appendChild(imageOriginalRef);

  return containerRef;
};

const imageCards = app.galleryItems.map(image => createImageCard(image));

//console.log(imageCards);

const galleryListRef = document.querySelector(".js-gallery");
//console.log(galleryListRef);

galleryListRef.append(...imageCards);


