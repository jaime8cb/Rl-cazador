/* =====================================================
   EL CAZADOR
   SLIDER DE PORTADA
===================================================== */

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

const prevButton = document.querySelector(".slider-prev");
const nextButton = document.querySelector(".slider-next");

let currentSlide = 0;
let autoplay;


/* Cambiar imagen */

function showSlide(index) {

  if (index >= slides.length) {
    currentSlide = 0;
  }

  if (index < 0) {
    currentSlide = slides.length - 1;
  }

  slides.forEach((slide, i) => {
    slide.classList.toggle(
      "active",
      i === currentSlide
    );
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle(
      "active",
      i === currentSlide
    );
  });
}


/* Siguiente */

function nextSlide() {
  currentSlide++;

  showSlide(currentSlide);
}


/* Anterior */

function previousSlide() {
  currentSlide--;

  showSlide(currentSlide);
}


/* Botones */

nextButton.addEventListener("click", () => {

  nextSlide();

  restartAutoplay();

});


prevButton.addEventListener("click", () => {

  previousSlide();

  restartAutoplay();

});


/* Puntos */

dots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    currentSlide = index;

    showSlide(currentSlide);

    restartAutoplay();

  });

});


/* Autoplay */

function startAutoplay() {

  autoplay = setInterval(() => {

    nextSlide();

  }, 5000);

}


function restartAutoplay() {

  clearInterval(autoplay);

  startAutoplay();

}


/* =====================================================
   DESLIZAR CON EL DEDO EN MÓVIL
===================================================== */

const slider = document.querySelector(".hero-slider");

let touchStartX = 0;
let touchEndX = 0;


slider.addEventListener(
  "touchstart",
  (event) => {

    touchStartX = event.changedTouches[0].screenX;

  },
  { passive: true }
);


slider.addEventListener(
  "touchend",
  (event) => {

    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();

  },
  { passive: true }
);


function handleSwipe() {

  const distance = touchEndX - touchStartX;

  if (Math.abs(distance) < 50) {
    return;
  }

  if (distance < 0) {

    nextSlide();

  } else {

    previousSlide();

  }

  restartAutoplay();

}


/* =====================================================
   INICIO
===================================================== */

showSlide(0);

startAutoplay();