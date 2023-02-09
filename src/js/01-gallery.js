import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const galleryList = document.querySelector(".gallery");

const createGalleryItemMarkup = items => items
  .map(({preview,original,description}) => `
  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionSpeed: 250
});

