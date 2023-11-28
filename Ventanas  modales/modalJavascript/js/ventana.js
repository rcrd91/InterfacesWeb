const $d = document,
  $botonAbrir = $d.querySelector("#openShow"),
  $ventana = $d.querySelector("#modalShow"),
  $botonCerrar = $d.querySelector("#cerrar1"),
  $botonAbrir2 = $d.querySelector("#openShowmodal"),
  $ventana2 = $d.querySelector("#modalShowModal"),
  $botonCerrar2 = $d.querySelector("#cerrar2");

function abrir(boton, modal) {
  boton.addEventListener("click", (e) => {
    modal.showModal();
  });
}

function cerrar(boton, modal) {
  boton.addEventListener("click", (e) => {
    modal.close();
  });
}

//chamada as funcions

abrir($botonAbrir, $ventana);

cerrar($botonCerrar, $ventana);

abrir($botonAbrir2, $ventana2);

cerrar($botonCerrar2, $ventana2);
