document.addEventListener("click", (e) => {
  switch (e.target) {
    case document.querySelector("#openModal1"):
      document.querySelector("#modal1").showModal();
      document.querySelector("#modal1").classList.add("is-visible");
      break;
    case document.querySelector("#openModal2"):
      document.querySelector("#modal2").showModal();
      document.querySelector("#modal2").classList.add("is-visible");
      break;
    case document.querySelector("#cerrar1"):
      document.querySelector("#modal1").close();
      document.querySelector("#modal1").classList.remove("is-visible");
      break;
    case document.querySelector("#cerrar2"):
      document.querySelector("#modal2").close();
      document.querySelector("#modal2").classList.remove("is-visible");
      break;
  }
});
