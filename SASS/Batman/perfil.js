const d = document;

function subirImagen(e) {
  let files = e.target.files;

  let image = files[0];

  let imageURL = URL.createObjectURL(image);

  d.querySelector(".profile .img").style.backgroundImage =
    "url('" + imageURL + "')";
}

d.querySelector("#file-uploader").addEventListener("change", subirImagen);
