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

// Función para mostrar la lista de amigos
function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  amigos.forEach(amigo => {
      let li = document.createElement("li");
      li.textContent = amigo;
      listaAmigos.appendChild(li);
  });
}

// Recorrer el array para sortear entre los elementos
function sortearAmigo() {
  let nombreAmigo = document.getElementById("amigoSorteado").value;

  if (nombreAmigo === "") {
      alert("Por favor, ingresa tu nombre para sortear.");
      return;
  }

  if (amigos.length < 2) {
      alert("Necesitas al menos dos amigos para sortear un amigo secreto.");
      return;
  }

  // Crear una copia del array de amigos excluyendo a la persona que pulsa el botón
  let amigosExcluidos = amigos.filter(amigo => amigo !== nombreAmigo);

  // Verificar que aún haya amigos en la lista excluida
  if (amigosExcluidos.length === 0) {
      alert("No hay suficientes amigos para realizar el sorteo.");
      return;
  }

  // Seleccionar un amigo aleatorio
  let amigoSorteado = amigosExcluidos[Math.floor(Math.random() * amigosExcluidos.length)];
  
  // Mostrar el resultado en el HTML
  document.getElementById("resultado").innerHTML = "Amigo secreto de " + nombreAmigo + " es: " + amigoSorteado;

  // Eliminar el amigo sorteado del array original
  amigos.splice(amigos.indexOf(amigoSorteado), 1);
  mostrarAmigos();
  console.log(amigoSorteado + " ha sido sorteado y eliminado de la lista.");
}
// Adicional ocultar el resultado
function ocultarResultado(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("listaAmigos").innerHTML = "";
}

