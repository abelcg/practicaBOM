let fecha = document.querySelector("#fecha");
let hora = document.querySelector("#hora");

function obtenerFecha() {
  let time = new Date();

  /* console.log(time);
    console.log(time.getMonth()); // 0-11 corresponde a los meses del año
    console.log(time.getDay()); // 0-6 corresponde a los días de la semana
    console.log(time.getDate()); // 1-31 corresponde a la fecha de cada día
    console.log(time.getFullYear());
    console.log(time.getHours());
    console.log(time.getMinutes());
    console.log(time.getSeconds()); */

  let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  // fecha objetivo
  fecha.innerHTML = `${diasSemana[time.getDay()]} ${time.getDate()} de ${
    meses[time.getMonth()]
  } del ${time.getFullYear()}`;

  //moficar segundos
  let segundos = time.getSeconds();
  let horas = time.getHours();
  let minutos = time.getMinutes();

  if (segundos < 10) {
    // agregar un 0 delante del número

    segundos = "0" + segundos;
  }
  if (horas < 10) {
    // agregar un 0 delante del número

    horas = "0" + horas;
  }
  if (minutos < 10) {
    // agregar un 0 delante del número

    minutos = "0" + minutos;
  }

  //modificar hora
  hora.innerHTML = `${horas}:${minutos}:${segundos}`;
}

setInterval(obtenerFecha, 1000);

function cambiarColor(color) {

  switch (color) {
    case "rosa":
      fecha.className = "fecha relojRosa";
      hora.className = "hora relojRosa";
      break;
    case "verde":
      fecha.className = "fecha relojVerde";
      hora.className = "hora relojVerde";
      break;
    case "celeste":
      fecha.className = "fecha relojCeleste";
      hora.className = "hora relojCeleste";
      break;

    default:
        fecha.className = "fecha relojVerde";
        hora.className = "hora relojVerde";
      break;
  }
}
