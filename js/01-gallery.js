import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"
// Change code below this line
// console.log(galleryItems);
const gallery = document.querySelector("div.gallery")
const GalleryItems = galleryItems.map((item) => 
    
    `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`)
  .join("");
    
gallery.insertAdjacentHTML("afterbegin", GalleryItems);


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
    height="600"></img>`
  )
instance.show()
 
 } )

 