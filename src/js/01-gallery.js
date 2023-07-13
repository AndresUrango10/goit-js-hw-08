import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// console.log(galleryItems);

const LIST_UL = document.querySelector('.gallery');

const IMG = galleryItems
  .map(({ preview, original, description }) => {
    return `
     <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>`;
  })
  .join('');
LIST_UL.insertAdjacentHTML('beforeend', IMG);

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
// console.log(lightbox);
