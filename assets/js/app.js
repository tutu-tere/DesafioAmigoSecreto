/**1.Capturar lo ingresado en el input en un array cuando se oprima el boton agregar amigo
 * 2.recorrer el array para sortear entre los elementos
 * 3.mostrar el resultado en el html 
 */

//1. Capturar lo ingresado en el input en un array cuando se oprima el boton agregar amigo
let inputAmigo = document.getElementById("inputAmigo");
let amigos = [];
// Funcion para agregar amigos al array y mostrarlo en consola por ahora 
function agregarAmigo(){
if (inputAmigo.value === "") {
    alert("Por favor, inserte un nombre.");
}  // Si el input esta vacio, mostrar un alerta
else {
  amigos.push(inputAmigo.value);
} // Si el input tiene un valor, agregarlo al array
inputAmigo.value = "";  // Limpiar el input
console.log(amigos);
}

//2. Recorrer el array para sortear entre los elementos
function sortearAmigo(){
    let amigoSorteado = amigos[Math.floor(Math.random()*amigos.length)]; // Math.floor redondea hacia abajo, Math.random genera un numero aleatorio entre 0 y 1 y lo multiplica por la cantidad de elementos en el array
    console.log(amigoSorteado); 
    document.getElementById("resultado").innerHTML = amigoSorteado; // Mostrar el resultado en el html
}
// Adicional ocultar el resultado
function ocultarResultado(){
    document.getElementById("resultado").innerHTML = "";
}



