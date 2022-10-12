document.title = "Clase 10 | Comisión 41805";
//querySelector
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2");

titulo.innerText = "Clase 10";
tituloSecundario.innerText = "Storage y JSON";

//Array Servicios
const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1200, img: "esculpidas.webp" },
  { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  {
    id: 8,
    nombre: "radiofrecuencia",
    precio: 12800,
    img: "radiofrecuencia.png",
  },
  {
    id: 9,
    nombre: "micropigmentación",
    precio: 7800,
    img: "micropigmentacion.jpeg",
  },
];

//funciones de busqueda
function buscarServicio(arr, filtro) {
  const encontrado = arr.find((el) => {
    return el.nombre.includes(filtro);
  });
  return encontrado;
}
function filtrarServicio(arr, filtro) {
  const filtrado = arr.filter((el) => {
    return el.nombre.includes(filtro);
  });
  return filtrado;
}

//Variables
const parrafo = document.getElementsByTagName("p"),
  parrafoClases = document.getElementsByClassName("parrafo"),
  contenedor = document.getElementById("contenedor"),
  input = document.getElementById("ingreso");

const btnSearch = document.querySelector("#btnSearch");

//evento submit
const formulario = document.querySelector("form");


/* formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let form = e.target;
  console.log(form);
  console.log(form.children[0].value);
  console.log(form.children[1].value);
}); */


//localStorage setItem
localStorage.setItem('bienvenida', 'Hola tarola');
localStorage.setItem('valido', true);
localStorage.setItem('numero', 239);
//getItem

let saludo= localStorage.getItem('bienvenida')
let booleano= localStorage.getItem('valido')
let numeroGuardado= localStorage.getItem('numero')

console.log(saludo);
console.log(booleano);
console.log(numeroGuardado);

//sessionStorage
sessionStorage.setItem('bienvenida', 'hola');
sessionStorage.setItem('booleano', false);
sessionStorage.setItem('edad', 39);
sessionStorage.setItem('lista', [39,2,7,1,9,0]);

let saludo2 = sessionStorage.getItem('bienvenida')
let esValido = (sessionStorage.getItem('booleano')== true)
let edad = parseInt(sessionStorage.getItem('edad'))
let lista = sessionStorage.getItem('lista').split(',')

/* console.log(typeof saludo2);
console.log(typeof esValido);
console.log(typeof edad);
console.log(typeof lista); */

for (let i = 0; i < sessionStorage.length; i++) {
 /*  let clave = sessionStorage.key(i)
  console.log("Key o Clave: " + clave);
  console.log("Valor asignado:  " + sessionStorage.getItem(clave)); */
}
//remover items
localStorage.removeItem('bienvenida');
localStorage.clear()

const producto1= {
  nombre:"Arroz",
  precio: 230
}

const enJSON= JSON.stringify(producto1)

console.log(producto1);
console.log( enJSON);

localStorage.setItem('producto', enJSON)

console.log(JSON.parse(localStorage.getItem('producto')));

