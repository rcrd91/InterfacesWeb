function hamburgerMenu(boton, menu, link) {
  //capturamos click do botón e links

  d.addEventListener("click", (e) => {
    if (e.target.matches(boton)) {
      d.querySelector(boton).classList.toggle("close");
      d.querySelector(menu).classList.toggle("nav--show");
    }

    // click sobre opcions do menú

    if (e.target.matches(link)) {
      d.querySelector(boton).classList.remove("close");
      d.querySelector(menu).classList.remove("nav--show");
    }
  });
}

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".off-canvas__burger", ".nav", ".nav__link");
});
