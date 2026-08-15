/* =========================================================
   EL CAZADOR
   JAVASCRIPT
========================================================= */


/* =========================================================
   IDIOMAS
========================================================= */

let currentLanguage = "es";

const languageButton = document.getElementById("languageButton");


function updateLanguage() {

    const elements = document.querySelectorAll("[data-es][data-en]");

    elements.forEach(element => {

        const spanish = element.getAttribute("data-es");
        const english = element.getAttribute("data-en");

        if (currentLanguage === "es") {
            element.textContent = spanish;
        } else {
            element.textContent = english;
        }

    });


    document.documentElement.lang = currentLanguage;

    updateLanguageButton();
}


function updateLanguageButton() {

    if (currentLanguage === "es") {

        languageButton.innerHTML = `
            <span>ES</span>
            <span class="language-separator">/</span>
            <span>EN</span>
        `;

    } else {

        languageButton.innerHTML = `
            <span>ES</span>
            <span class="language-separator">/</span>
            <span>EN</span>
        `;

    }

}


languageButton.addEventListener("click", () => {

    currentLanguage = currentLanguage === "es" ? "en" : "es";

    updateLanguage();

});


/* =========================================================
   BARRA SUPERIOR AL HACER SCROLL
========================================================= */

const topbar = document.querySelector(".topbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        topbar.style.background = "rgba(16, 24, 19, 0.98)";

    } else {

        topbar.style.background = "rgba(20, 31, 25, 0.94)";

    }

});


/* =========================================================
   ANIMACIONES AL ENTRAR EN PANTALLA
========================================================= */

const animatedElements = document.querySelectorAll(
    ".menu-category, .info-card, .history-content, .info-services"
);


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* =========================================================
   CERRAR ANIMACIÓN DE NAVEGACIÓN
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function () {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            setTimeout(() => {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }, 50);

        }

    });

});


/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================================= */

const footerYear = document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.textContent = `© ${new Date().getFullYear()} El Cazador`;

}


/* =========================================================
   INICIAR
========================================================= */

updateLanguage();