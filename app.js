let botonCorto = document.querySelector(".app__card-button--corto");
let botonEnfoque = document.querySelector(".app__card-button--enfoque");
let botonLargo = document.querySelector(".app__card-button--largo");
let htmlContexto = document.querySelector("html");
let imagenFondo = document.querySelector(".app__image");
let titulo = document.querySelector(".app__title");
let botones = document.querySelectorAll('.app__card-button')
let inputEnfoqueMusica = document.querySelector('#alternar-musica')
let musica = new Audio('./sonidos/luna-rise-part-one.mp3')
let audioIniciar = new Audio('./sonidos/play.wav')
let audioPausar = new Audio('./sonidos/pause.mp3')
let audioTerminar = new Audio('./sonidos/beep.mp3')
let TiempoSegundos = 5;
let idIntervalo = null;
let botonIniciarPausar = document.querySelector('#start-pause')

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
 inputEnfoqueMusica.addEventListener('change', function(){
    if (musica.paused) {
     musica.play()
     musica.currentTime = 0
    } else {
        musica.pause()
    }
    musica.loop = true
 })
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

function temporizador () {
    if (TiempoSegundos <= 0){
        reiniciarTiempo()
        audioTerminar.play() 
        return
        }
        TiempoSegundos -=1
    console.log(TiempoSegundos)
}
function iniciarPausarTemporizador () {
    if(idIntervalo) {
        reiniciarTiempo ()
        audioPausar.play()
        return
    } 
    audioIniciar.play()
idIntervalo = setInterval(temporizador, 1000)
}
function reiniciarTiempo () {
    clearInterval(idIntervalo)
    idIntervalo = null
    
}

botonIniciarPausar.addEventListener('click',iniciarPausarTemporizador)
