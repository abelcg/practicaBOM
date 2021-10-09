/* Temporizador

Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a 
decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 
 */

const circulo = document.querySelector(".progressCircle:nth-child(2)");
const radio = circulo.r.baseVal.value;
const circunferencia = radio * 2 * Math.PI;

circulo.style.strokeDasharray = `${circunferencia} ${circunferencia}`;
circulo.style.strokeDashoffset = circunferencia;

function setProgreso(percent) {
  const offset = (percent / 100) * circunferencia - circunferencia;
  circulo.style.strokeDashoffset = offset;
}

/* const input = document.querySelector("input");
setProgreso(input.value);

input.addEventListener("change", function (e) {
  if (input.value < 101 && input.value > -1) {
    setProgreso(input.value);
  }
}); */

// programo el temporizador

let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let timeStarted = 0;
let hs = document.getElementById("hs");
let min = document.getElementById("min");
let separador = document.getElementById("separador");
let seg = document.getElementById("seg");
let horaTotal = 0;
let minTotal = 0;
let segTotal = 0;
let btnPlayPause = document.getElementById("playPause");
let btnBorrar = document.getElementById("borrar");
let btnRestablecer = document.getElementById("restablecer");
let btnEstablecer = document.getElementById("establecer");
let switchBotones = document.getElementById("botones");
let alarmaTimer = new Audio("/alarma.mp3");
let toastPlaceholder = document.getElementById("toastPlaceholder");

function establecer() {
  segTotal = segundos.value;
  minTotal = minutos.value;
  horaTotal = horas.value;

  hs.innerHTML = `${horaTotal}`;
  separador.innerHTML = ":";
  min.innerHTML = `${minTotal}`;
  seg.innerHTML = `${segTotal}`;
}

btnEstablecer.addEventListener("click", establecer);

function alarm(){
 let toast = document.createElement("div");
 toast.innerHTML = `<div class="alert alert-info alert-dismissible fade show d-flex justify-content-center
 align-items-center position-absolute top-0 start-50 translate-middle-x" 
 role="alert">
 <strong>Se acabó el tiempo</strong>
 <button type="button" class="btn btn-sm" id="cancelAlarm" onclick="alarmMuted()">Detener Alarma</button>
 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onclick="alarmMuted()"></button>
</div>`

toastPlaceholder.append(toast);
alarmaTimer.play(); 
alarmaTimer.loop = true;
}

function alarmMuted(){
  alarmaTimer.muted = true;
}

function time() {

  if (horaTotal == 0 && minTotal == 0 && segTotal == 0) {
    hs.innerHTML = `00`;
    separador.innerHTML = ":";
    min.innerHTML = `00`;
    separador.innerHTML = ":";
    seg.innerHTML = `00`;
    clearInterval(timeStarted);
    alarm();
  } else if (segTotal < 60 && segTotal > 0) {
    segTotal--;
    if (segTotal < 10 && minTotal < 10 && horaTotal < 10) {
      hs.innerHTML = "0" + `${horaTotal}`;
      separador.innerHTML = ":";
      min.innerHTML = "0" + `${minTotal}`;
      seg.innerHTML = "0" + `${segTotal}`;
    } else if (segTotal < 10 && minTotal < 10 && horaTotal >= 10) {
      hs.innerHTML = `${horaTotal}`;
      separador.innerHTML = ":";
      min.innerHTML = "0" + `${minTotal}`;
      seg.innerHTML = "0" + `${segTotal}`;
    } else if (segTotal < 10 && minTotal >= 10 && horaTotal < 10) {
      hs.innerHTML = "0" + `${horaTotal}`;
      separador.innerHTML = ":";
      min.innerHTML = `${minTotal}`;
      seg.innerHTML = "0" + `${segTotal}`;
    } else if (segTotal < 10 && minTotal >= 10 && horaTotal >= 10) {
      hs.innerHTML = `${horaTotal}`;
      separador.innerHTML = ":";
      min.innerHTML = `${minTotal}`;
      seg.innerHTML = "0" + `${segTotal}`;
    } else if (segTotal >= 10 && minTotal < 10 && horaTotal < 10) {
      hs.innerHTML = "0" + `${horaTotal}`;
      separador.innerHTML = ":";
      min.innerHTML = "0" + `${minTotal}`;
      seg.innerHTML = `${segTotal}`;
    } else if (segTotal >= 10 && minTotal < 10 && horaTotal >= 10) {
      hs.innerHTML = `${horaTotal}`;
      separador.innerHTML = ":";
      min.innerHTML = "0" + `${minTotal}`;
      seg.innerHTML = `${segTotal}`;
    } else if (segTotal >= 10 && minTotal >= 10 && horaTotal < 10) {
      hs.innerHTML = "0" + `${horaTotal}`;
      separador.innerHTML = ":";
      min.innerHTML = `${minTotal}`;
      seg.innerHTML = `${segTotal}`;
    } else {
      hs.innerHTML = `${horaTotal}`;
      separador.innerHTML = ":";
      min.innerHTML = `${minTotal}`;
      seg.innerHTML = `${segTotal}`;
    }
  } else if (minTotal < 60 && minTotal > 0) {
    segTotal = 59;
    minTotal--;
  } else if (horaTotal < 24 && horaTotal > 0) {
    minTotal = 59;
    horaTotal--;
  }
  let porcentaje = segTotal + minTotal * 60 + horaTotal * 3600;
  let porcentajeTotal = porcentaje * 1.66666667
  setProgreso(porcentajeTotal);
}

function startPause() {
  time();
  timeStarted = setInterval(time, 1000);
  btnPlayPause.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
    <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
  </svg>`;
  let timerParpadeo = document.getElementById("temporizador");
  timerParpadeo.style.animationPlayState = "paused";
  btnPlayPause.removeEventListener("click", startPause);
}

function pause() {
  clearInterval(timeStarted);
  timeStarted = 0;

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
  let timerParpadeo = document.getElementById("temporizador");
  timerParpadeo.style.animationPlayState = "running";

  btnPlayPause.addEventListener("click", startPause);
}

function borrar() {
  clearInterval(timeStarted);
  hs.innerHTML = `00`;
  separador.innerHTML = ":";
  min.innerHTML = `00`;
  separador.innerHTML = ":";
  seg.innerHTML = `00`;

  porcentaje = 0;
  setProgreso(porcentaje);

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
  btnPlayPause.addEventListener("click", startPause);
}

function restablecer() {
  hs.innerHTML = `${horaTotal}`;
  separador.innerHTML = ":";
  min.innerHTML = `${minTotal}`;
  seg.innerHTML = `${segTotal}`;
  establecer();
}

switchBotones.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "playPause":
      if (timeStarted === 0) {
        startPause();
      } else {
        pause();
      }
      break;
    case "borrar":
      borrar();
      break;
    case "restablecer":
      restablecer();
      break;
  }
});
