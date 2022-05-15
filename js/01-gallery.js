import { galleryItems } from './gallery-items.js';
import * as basicLightbox from "https://cdn.jsdelivr.net/npm/basiclightbox@5.0.4/dist/basicLightbox.min.js"
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
   

const lightbox = galleryItems.map((item) => 
  `<img 
  src="${item.original}"
   width="800"
   height="600"></img>`).join(""); 


// gallery.onclick = () => {

//   basicLightbox.create(

//   `${lightbox}`
// ).show()
// }
// gallery.addEventListener("click", instance.show());




const instance = basicLightbox.create(
  `${lightbox}`
)

instance.show()


