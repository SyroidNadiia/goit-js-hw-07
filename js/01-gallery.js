import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const elementGalleryMakeup = createElementGallery(galleryItems);

// console.log(createElementGallery(galleryItems));
galleryRef.insertAdjacentHTML('beforeend', elementGalleryMakeup);


function createElementGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>
        `
    })
    .join('');

// console.log(markup[1]);
}


galleryRef.addEventListener('click', onElementGalleryClick)

function onElementGalleryClick(event) {

  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  console.log(event.target.dataset.source);
  
}