//for(desde; hasta; actualizacion){}
//i++ equivale i=i+1

/* for (let i = -12; i < 10; i = i + 1) {
  console.log("Conteo: " + i);
} */

/* for (let i = 1; i <= 3; i++) {
  alert("Ya llegamos a la India?");
  alert("No");
}
alert("A ver.. ahora si"); */

/* for (let i = 1; i <= 3; i++) {
  let pregunta = prompt("");
  if (pregunta != "usted?") {
    let respuesta = "Si";
    alert(respuesta);
  } else {
    respuesta = "Asi es... espero haberlos iluminado... ";
    alert(respuesta);
  }
}
 */

/* let limite = parseInt(prompt(" Ingresa un numero de limite"));
let ingreso = parseInt(prompt("Ingresa un numero"));

for (let i = 0; i <= limite; i++) {
  let resultado = ingreso * i;
  console.log(ingreso + " * " + i + " = " + resultado);
} */

/* let numero = parseInt(prompt("Ingresa un número para saber si es primo"));
let esPrimo = true;
for (let i = 2; i <= numero - 1; i++) {
  if (numero % i === 0) {
    console.log("Además de dividir por 1 y por sí mismo, divide por ", i);
    esPrimo = false;
  }
}
if (esPrimo) {
  alert("Es primo");
} else {
  alert("No es primo");
}
 */
//break
/* let palabraClave = "messi";

for (let i = 1; i <= 3; i++) {
  let ingreso = prompt("Ingresa la palabra clave");
  if (ingreso === palabraClave) {
    alert("Adivinaste");
    break;
  }
  // dejarle un comentario al usuario que le diga que agotó los intentos
} */

//continue
/* for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log(i);
} */

//while

/* let contador = 0;
while (contador < 10) {
  console.log(contador);

  //condicion de salida
  contador++;
} */

/* let ingreso = prompt("Ingresa un producto . Para salir ingresa 0");

while (ingreso != "0") {
  console.log("Ingresaste el producto " + ingreso);
  //condicion de salida
  ingreso = prompt("Ingresa un producto . Para salir ingresa 0");
} */

//do while
let ingreso = "";

do {
  ingreso = prompt("Ingresa un producto . Para salir ingresa 0");
  console.log("Ingresaste el producto " + ingreso);
} while (ingreso != "0");
