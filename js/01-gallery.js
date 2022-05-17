import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector("div.gallery")
const galleryItemsNew = galleryItems.map((item) => 
    
    `<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`)
  .join("");
    
gallery.insertAdjacentHTML("afterbegin", galleryItemsNew);


gallery.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const selectedColor = event.target.dataset.source;

  const instance = basicLightbox.create(
    `<img 
   src= "${selectedColor}"
    width="800"
    height="600"></img>`,
    {
      onShow: (instance) => { window.addEventListener('keydown', closeOnEscape,) },
      onClose: (instance) => {window.removeEventListener('keydown', closeOnEscape,)}
    }
  );
  instance.show();
  function closeOnEscape(event) {
  if (event.code === 'Escape') {
    instance.close()
  }
}
});


