window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.style.background = "rgba(6,8,22,0.9)";
  } else {
    nav.style.background = "rgba(6,8,22,0.6)";
  }

});

const galleryItems = document.querySelectorAll(".gallery-item img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

const closeBtn = document.querySelector(".close");

galleryItems.forEach((img) => {

  img.addEventListener("click", () => {

    lightbox.classList.add("active");

    lightboxImg.src = img.src;

  });

});

closeBtn.addEventListener("click", () => {

  lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

  if(e.target !== lightboxImg){

    lightbox.classList.remove("active");

  }

});