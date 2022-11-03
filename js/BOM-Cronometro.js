/* Cronómetro

Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar
 */

//defino las constantes para progress bar circular
const circulo = document.querySelector(".progressCircle:nth-child(2)");
const radio = circulo.r.baseVal.value;
const circunferencia = radio * 2 * Math.PI;

circulo.style.strokeDasharray = `${circunferencia} ${circunferencia}`;
circulo.style.strokeDashoffset = circunferencia;

function setProgreso(percent) {
  const offset = circunferencia - (percent / 100) * circunferencia;
  circulo.style.strokeDashoffset = offset;
}

/* const input = document.querySelector('input');
setProgreso(input.value);

input.addEventListener('change', function(e) {
  if (input.value < 101 && input.value > -1) {
    setProgreso(input.value);
  }  
}) */

// programo el cronometro

let minutos = 0;
let segundos = 0;
let centesimas = 0;
let timeStarted = 0;
let min = document.getElementById("min");
let separador = document.getElementById("separador");
let seg = document.getElementById("seg");
let centeseg = document.getElementById("centeseg");

let btnPlayPause = document.getElementById("playPause");
let btnReset = document.getElementById("reiniciar");
let btnVuelta = document.getElementById("vuelta");
let switchBotones = document.getElementById("botones");
let vueltas = document.getElementById("vueltas");
let cantVueltas = 0;
/* let parpadeo = 0; */

btnPlayPause.addEventListener("click", startPause);
/* btnVuelta.addEventListener("click", vuelta); */
btnReset.addEventListener("click", reset);

function time() {
  let minTotal, segTotal, centeTotal;
  centesimas++;

  if (centesimas > 99) {
    segundos++;
    centesimas = 0;
  }
  if (segundos > 59) {
    minutos++;
    segundos = 0;
  }

  if (centesimas < 10) {
    // agregar un 0 delante del número

    centeTotal = "0" + centesimas;
  } else {
    centeTotal = centesimas;
  }
  if (segundos < 10) {
    // agregar un 0 delante del número

    segTotal = "0" + segundos;
  } else {
    segTotal = segundos;
  }
  if (minutos < 10) {
    // agregar un 0 delante del número

    minTotal = "0" + minutos;
  } else {
    minTotal = minutos;
  }
  /* centeTotal = ("0" + centesimas).slice(-2);
  segTotal = ("0" + segundos).slice(-2);
  minTotal = ("0" + minutos).slice(-2);
 */
  /* min.innerHTML =`${minTotal}`;
  separador.innerHTML =':';
  seg.innerHTML =`${segTotal}`;
  centeseg.innerHTML =`${centeTotal}`; */

  if (segTotal <= 59 && minTotal == 0) {
    min.innerHTML = ``;
    separador.innerHTML = "";
    seg.innerHTML = `${segTotal}`;
    centeseg.innerHTML = `${centeTotal}`;
  } else {
    if (minTotal >= 1) {
      min.innerHTML = `${minTotal}`;
      separador.innerHTML = ":";
      seg.innerHTML = `${segTotal}`;
      centeseg.innerHTML = `${centeTotal}`;
    }
  }
  let porcentaje = segTotal * 1.66666667;
  setProgreso(porcentaje);
}

function startPause() {
  time();
  timeStarted = setInterval(time, 10);
  btnPlayPause.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
</svg>`;
 let cronometroParpadeo = document.getElementById("cronometro");
  cronometroParpadeo.style.animationPlayState = "paused";
  /* stopColor() */
  btnPlayPause.removeEventListener("click", startPause);
  /* btnPlayPause.addEventListener("click", stopColor); */
}

function pause() {
  clearInterval(timeStarted);
  timeStarted = 0;
 /*  parpadeo = setInterval(setOpacityColor, 2000); */
  btnPlayPause.innerHTML = ` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-play-fill"
  viewBox="0 0 16 16"
>
  <path
    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
  />
</svg>`;
let cronometroParpadeo = document.getElementById('cronometro');
cronometroParpadeo.style.animationPlayState = 'running'; 
/* setOpacityColor() */

  btnPlayPause.addEventListener("click", startPause);
}

 

/* function setOpacityColor() {
  let cronometroParpadeo = document.getElementById("cronometro");
  cronometroParpadeo.style.opacity =
    cronometroParpadeo.style.opacity == "1" ? "0" : "1";
  cronometroParpadeo.style.color =
    cronometroParpadeo.style.color == "rgb(66, 139, 202)"
      ? "white"
      : "rgb(66, 139, 202);";
}

function stopColor() {
  clearInterval(parpadeo);
} */

function reset() {
  clearInterval(timeStarted);
  min.innerHTML = `00`;
  separador.innerHTML = ":";
  seg.innerHTML = `00`;
  centeseg.innerHTML = `00`;
  cantVueltas = 0;
  porcentaje = 0;
  setProgreso(porcentaje);
  minutos = 0;
  segundos = 0;
  centesimas = 0;
  btnPlayPause.innerHTML = ` <svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-play-fill"
  viewBox="0 0 16 16"
>
  <path
    d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
  />
</svg>`;
  vueltas.innerHTML = "";
  btnPlayPause.addEventListener("click", startPause);
}

const vuelta = (time = "00:0000") => {
  cantVueltas++;
  if (cantVueltas <= 10) {
    vueltas.innerHTML += `<p>${time}</p>`;
    let porcent = 0;
    setProgreso(porcent);
  } else {
    pause();
  }
};

switchBotones.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "playPause":
      if (timeStarted === 0) {
        startPause();
      } else {
        pause();
      }
      break;
    case "reiniciar":
      reset();
      break;
    case "vuelta":
      vuelta(
        `${cantVueltas + 1}° vuelta_  ${
          minutos === 0 ? "" : minutos + " : "
        } ${segundos} . ${centesimas}`
      );
      break;
  }
});
