/* let ingreso1 = prompt("Ingresa un número");
let ingreso2 = parseFloat(prompt("Ingresa un número"));
ingreso1 = parseFloat(ingreso1)
//parseInt()
//parseFloat()

let resultado= ingreso1 + ingreso2;

console.log(resultado); */

/* let usuario = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu password");

alert("Bienvenido/a " + usuario); */

//condicionales  true=verdadero/ false=falso => valores booleanos

/* let numero = 12; // = asignacion
//== comparacion
if (numero == 10) {
  console.log("el numero es 10");
} else {
  console.log("El numero es distinto de 10");
} */

let leftOrRight = "derecha";

if (leftOrRight == "izquierda") {
  console.log("Homero va a las cataratas");
} else {
  console.log("Homero va para el arcoiris");
}

//let usuario = prompt("Ingresa tu usuario");
//let password = prompt("Ingresa tu password")
/* if(usuario == ""){
    console.log("El campo no debe estar vacío");
}else{
    console.log('Bienvenido/a ' + usuario);
} */

let usuarioGuardado = "Pedro";
/* if (usuario == usuarioGuardado) {
  console.log("Bienvenido Pedro como estas?");
} else {
  console.log("Bienvenido/a " + usuario);
} */

//if()else if() else

let valor = "100";

/* if (valor < 20) {
  console.log("El valor es menor a 20");
} else if (valor < 80) {
  console.log("El valor es menor a 80");
}else if(valor < 100){
    console.log("El valor es menor a 100");
}else{
    console.log("El valor es " + valor);
}
 */

//variable booleana
/* let esMayor= valor === 100; 

console.log(esMayor);

if(esMayor){
console.log("El numero es igual");

}else{
    console.log("el numero es " + valor);
} */

let usuario = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu password");
let user = "Juan";
let pass = "1234";
//operador AND

/* if (usuario != "" && password != "") {
    console.log("Bienvenido/a : " + usuario);
} else {
    console.log("Usuario o contraseña incorrectos");
} */
/* if (usuario == user && password == pass) {
    console.log("Bienvenido/a : " + usuario);
} else {
    console.log("Usuario o contraseña incorrectos");
} */

//OR ||
/* if (usuario == user || password == pass) {
    console.log("Bienvenido/a : " + usuario);
} else {
    console.log("Usuario o contraseña incorrectos");
} */

if (usuario == "Juan" || usuario == "JUAN") {
  console.log("Hola Juan como estas");
} else {
  console.log("Hola " + usuario);
}
