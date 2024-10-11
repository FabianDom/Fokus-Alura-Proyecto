let botonCorto = document.querySelector(".app__card-button--corto");
let botonEnfoque = document.querySelector(".app__card-button--enfoque");
let botonLargo = document.querySelector(".app__card-button--largo");
let htmlContexto = document.querySelector("html");
let imagenFondo = document.querySelector(".app__image");
let titulo = document.querySelector(".app__title");
let botones = document.querySelectorAll('.app__card-button')
let musica = document.querySelector('#alternar-musica')

function cambiarContexto(contexto) {
  htmlContexto.setAttribute("data-contexto", contexto);
  imagenFondo.setAttribute("src", `/imagenes/${contexto}.png`);
  switch (contexto) {
    case "enfoque":
      titulo.innerHTML = `Optimiza tu productividad,<br>
      <strong class="app__title-strong">sumérgete en lo que importa.</strong>`;
      break;
    case "descanso-corto":
      titulo.innerHTML = `¿Qué tal tomar un respiro?<br>
      <strong class="app__title-strong">¡Haz una pausa corta!</strong>`;
      break;
    case "descanso-largo":
              titulo.innerHTML = `Hora de volver a la superficie<br>
      <strong class="app__title-strong">Haz una pausa larga.</strong>`
      break;

    default:
      break;
  }
  botones.forEach(function(contexto) {
    contexto.classList.remove('active')
  })
}
botonCorto.addEventListener("click", function () {
  cambiarContexto("descanso-corto");
  botonCorto.classList.add('active')
});

botonEnfoque.addEventListener("click", function () {
  cambiarContexto("enfoque");
  botonEnfoque.classList.add('active')
});

botonLargo.addEventListener("click", function () {
  cambiarContexto("descanso-largo");
  botonLargo.classList.add('active')
});
