// funciones para manejar tiempo

// mostrar un mensaje pasado un tiempo x desde que cargo la pagina
/* function saludar(){
    
} */


let contador = 1;
let saludar = ()=>{
    if (contador === 5) {
        clearInterval(identificador)
    }
    document.write('Hola Mundo');
    contador++
}

//window.setTimeout(saludar, 2000)

//setTimeout(()=>{document.write('Hola Mundo')}, 4000);

// llamar a una funcion  cada cierto tiempo en milisegundos

let identificador = window.setInterval(saludar, 1000);



