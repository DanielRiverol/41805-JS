//función tradicional
function saludo(param) {
  //codigo a ejecutar
}
//función anónima
const saludo1 = function (param) {
  //codigo a ejecutar
};
//función flecha
const saludo2 = (param, param2) => {
  //codigo a ejecutar
  return "hola " + param + " " + param2;
};

/* console.log(saludo2("Daniel", "Riv")); */
//objetos literal

const persona = {
  nombre: "Daniel",
  apellido: "Riv",
  edad: 39,
};
const persona1 = {
  nombre: "Eduardo",
  apellido: "Malbert",
  edad: 30,
  direccion: "calle falsa 123",
  casado: true,
};
/* console.log(persona); */

//notacion de punto (.)
/* console.log(persona.edad);
console.log(persona.nombre + " " + persona.apellido);
console.log(persona.direccion);
console.log(persona1);
console.log(persona1.edad); */

//Notacion de corchetes
/* 
console.log(persona1["nombre"]);
console.log(persona["edad"]);

persona.nombre = "Julian";
console.log(persona.nombre);

persona.direccion = "Zaragoza 123";
persona1["casado"] = false;
console.log(persona1.casado); */

//funcion Constructora
function Auto(modelo, marca, anio, color) {
  this.modelo = modelo;
  this.marca = marca;
  this.anio = anio;
  this.color = color;
  this.arrancar= function(){
   return "estoy en marcha";
   }
   this.frenar= ()=>{
    return "Estoy detenido"
   }
}
/* let marca = prompt("Ingresa la marca "); */
const auto1 = new Auto("golf", "VW", 2012, "negro");
const auto2 = new Auto("TT", " Audi", 2022, "perla");

/* console.log(auto1);
console.log(auto2);
console.log(auto2.marca="Pepito");
console.log(auto2); */

/* let mensaje= "Hola Como Estas?";

console.log(mensaje);
console.log(mensaje.length);
console.log(mensaje.toLowerCase());
console.log(mensaje.toUpperCase()); */

console.log(auto1.frenar())
auto2.arrancar()

console.log("frenar" in auto1 );

for (const propiedad in auto1) {
 console.log(propiedad + ": "+ auto1[propiedad]);
}
for (const propiedad in auto2) {
 console.log(propiedad + ": "+ auto2[propiedad]);
} 
console.log("marca" in auto1);
console.log(auto1.marca);