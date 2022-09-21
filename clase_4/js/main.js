//switch
/* let ingreso = prompt(
  "Ingresa una opción \n 1-Café solo \n 2-Café con leche \n 3-Té \n 4-Té con leche \n 5-Agua caliente"
);
switch (ingreso) {
  case "1":
    console.log("Selccionaste Cafe");

  break;
  case "2":
    console.log("Selccionaste Cafe copn leche");

    break;
  case "3":
    console.log("Selccionaste Té");

    break;
  case "4":
    console.log("Selccionaste Té con leche");

    break;
  case "5":
    console.log("Selccionaste Agua Caliente");
    break;

  default:
    console.log("opcion no valida");
    break;
}
 */

//Funciones
function saludar() {
  console.log("Hola tarola");
}
//llamar a la funcion
/* saludar();
saludar();
saludar();
saludar(); */

/* function ingresoNombre() {
  let ingresoNombre = prompt("ingresa tu nombre");
  console.log(ingresoNombre);
} */
//ingresoNombre()
/* let ingresoNombre = prompt("ingresa tu nombre");
let ingresoApellido = prompt("ingresa tu apellido");

function saludoPersonal(nombre, apellido) {
  console.log("Hola " + nombre + " " + apellido);
}

saludoPersonal(ingresoNombre, ingresoApellido);
saludoPersonal("Dani", "Riv");
saludoPersonal("Paula", "Juarez"); */
/* let resultado = 0;

function sumar(num1, num2) {
  return num1 + num2;
}

function mostrar(papas) {
  console.log(papas);
} */

/* sumar(99, 10);

mostrar("El resultado de la opearcion es:" + resultado);
mostrar(resultado); */

/* resultado = sumar(12, -34);
mostrar(resultado);
 */

function calcular(num1, num2, operador) {
  switch (operador) {
    case "+":
      return num1 + num2;
    //break;

    case "-":
      return num1 - num2;
    //break;

    case "*":
      return num1 * num2;
    // break;

    case "/":
      return num1 / num2;
    // break;

    default:
      return 0;
    // break;
  }
}

/* let resultadoSuma = calcular(12, 56, "+");
let division = calcular(43, 0, "/");
console.log(resultadoSuma);
//Sale por default
console.log(calcular(12, 90, 45));
console.log(division);
 */

let resultado = 0;

function sumar(num1, num2) {
  let resultado = 0;
  resultado = num1 + num2;
}
function restar(num1, num2) {
  let resultado = 0;
  resultado = num1 - num2;
}
resultado = sumar(3, 5);
console.log(resultado);
resultado = restar(12, 67);
console.log(resultado);

//funciones anomimas
const nombreCompleto = function (nombre, apellido) {
  return nombre + " " + apellido;
};
console.log(nombreCompleto("Juan", "perez"));
nombreCompleto("Juan", "perez");

console.log(nombreCompleto("Juan", "perez"));
