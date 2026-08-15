/* =========================================
   EL CAZADOR
   JAVASCRIPT
========================================= */

function reservar() {

  /*
    Sustituye este número por el teléfono real
    cuando quieras activar directamente la llamada.
  */

  const telefono = "";

  if (telefono) {
    window.location.href = "tel:" + telefono;
    return;
  }

  /*
    Si todavía no se ha puesto el teléfono,
    mostramos un mensaje sin romper la web.
  */

  alert("Para reservar, contacta con El Cazador.");
}


/* =========================================
   ANIMACIÓN SUAVE DE ENTRADA
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const elements = document.querySelectorAll(
    ".menu-category, .info-card, .story-content"
  );

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.08
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

});


/* =========================================
   EVITAR COMPORTAMIENTOS DE SCROLL
   EN LAS CATEGORÍAS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const categoryGrid = document.querySelector(".category-grid");

  if (categoryGrid) {
    categoryGrid.style.overflow = "visible";
    categoryGrid.style.overflowX = "visible";
  }

});