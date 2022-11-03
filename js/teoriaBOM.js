let contador = 1;

function saludar(prueba) {
  document.write("<br>Hola mundo");
  if(contador == 5){
    //   quiero detener el uso del setInterval
    window.clearInterval(identificador)
  }
  contador++;
}

// ejecutar una funcion pasado un cierto tiempo

// window.setTimeout(saludar, 3000);

// setTimeout(function () {
//   saludar("algo");
// }, 4000);

// setTimeout(() => {
//   document.write("<br>Hola mundo");
// }, 5000);

//cuando quieramos ejecutar una funcion cada cierto tiempo en milisegundos

let identificador = window.setInterval(saludar, 4000);
