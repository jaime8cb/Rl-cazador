/* =========================
   CAMBIO DE CATEGORÍAS
========================= */

const menuTabs = document.querySelectorAll(".menu-tab");
const menuCategories = document.querySelectorAll(".menu-category");

menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        const category = tab.dataset.category;

        menuTabs.forEach(button => {
            button.classList.remove("active");
        });

        menuCategories.forEach(section => {
            section.classList.remove("active");
        });

        tab.classList.add("active");

        document
            .getElementById(category)
            .classList.add("active");

    });

});


/* =========================
   MENÚ MÓVIL
========================= */

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


mobileMenuButton.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* Cerrar menú al pulsar un enlace */

const mobileLinks =
    mobileMenu.querySelectorAll("a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


/* =========================
   CAMBIO DE IDIOMA
========================= */

const languageButton =
    document.getElementById("languageButton");

let englishMode = false;

languageButton.addEventListener("click", () => {

    englishMode = !englishMode;

    if (englishMode) {

        languageButton.textContent = "EN";

        document.querySelector(".mini-logo small").textContent =
            "TORRELODONES · MADRID";

        document.querySelector(
            '.desktop-nav a[href="#inicio"]'
        ).textContent = "Home";

        document.querySelector(
            '.desktop-nav a[href="#restaurante"]'
        ).textContent = "Restaurant";

        document.querySelector(
            '.desktop-nav a[href="#carta"]'
        ).textContent = "Menu";

        document.querySelector(
            '.desktop-nav a[href="#historia"]'
        ).textContent = "Our story";

        document.querySelector(
            '.desktop-nav a[href="#contacto"]'
        ).textContent = "Contact";

        document.querySelector(
            ".reservation-button"
        ).textContent = "Book";

        document.querySelector(
            ".main-button"
        ).textContent = "View menu";

    } else {

        languageButton.textContent = "ES";

        document.querySelector(
            '.desktop-nav a[href="#inicio"]'
        ).textContent = "Inicio";

        document.querySelector(
            '.desktop-nav a[href="#restaurante"]'
        ).textContent = "El restaurante";

        document.querySelector(
            '.desktop-nav a[href="#carta"]'
        ).textContent = "Carta";

        document.querySelector(
            '.desktop-nav a[href="#historia"]'
        ).textContent = "Nuestra historia";

        document.querySelector(
            '.desktop-nav a[href="#contacto"]'
        ).textContent = "Contacto";

        document.querySelector(
            ".reservation-button"
        ).textContent = "Reservar";

        document.querySelector(
            ".main-button"
        ).textContent = "Ver la carta";

    }

});