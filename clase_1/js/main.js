//ES5
var nombre = "Juan"; //NO SE USA MÁS

//ES6
//Declaración de variables
let nomb;
let apellido;
let anio;
let nombreCompletoDelUsuario;

//Asignación
nomb = "José";
apellido = "Gomez";
anio = 2022;

//Inicializar
let user = "Danny";
const DNI = "1234567890";

//Reasignación
user = "Pedro";

//DNI=3456765;//NO se puede

let numero1 = 23;
let numero2 = 75;
const IVA = 21;
const NUMERO = 56.79;

let resultadoSuma = numero1 + numero2;
let resultado2 = IVA + 34; //operacion matematica

//concatenacion de variables
nombreCompletoDelUsuario = nomb + " " + apellido;

//metodo de entrada prompt
//let nombreUser = prompt("Ingresa tu nombre");

//metodos de salida
console.log("Hola soy un mensaje en la consola");
/* console.log(nombreUser); */
console.log(resultadoSuma);
console.log(nombreCompletoDelUsuario);

//alert
//alert("Soy un mensaje molesto");

let usuario = prompt("Ingresa tu usuario");
let password = prompt("Ingresa tu password");

alert("Bienvenido/a " + usuario);

