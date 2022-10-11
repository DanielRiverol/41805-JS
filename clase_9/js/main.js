document.title = "Clase 9 | Comisión 41805";
//querySelector
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2");

titulo.innerText = "Clase 9";
tituloSecundario.innerText = "Eventos";

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

//Eventos opcion 1

/* btnSearch.addEventListener("click", ()=>{
  console.log('Click');
})
 */
// opcion 2
/* btnSearch.onclick = ()=>{
  console.log('Click');
 } */
/* 
 parrafo[0].addEventListener("mouseup", ()=>{
      parrafo[0].style= 'color: blue;'
 }) */

input.addEventListener("keydown", () => {
  console.log(input.value);
  parrafo[0].innerText = input.value;
});
//change
const inputNombre=document.querySelector('#nombre'),
inputEdad= document.querySelector('#edad');

inputNombre.addEventListener('change', ()=>{
    console.log("Evento change");
})
inputEdad.addEventListener('change', ()=>{
    console.log("Evento change");
})


const select= document.querySelector('#paises')
select.addEventListener('change', ()=>{
  console.log("cambio");
  let opcion = select.options[select.selectedIndex].value;
  parrafo[0].innerText= opcion
  console.log(opcion);
})

inputNombre.addEventListener('input', ()=>{
  console.log(inputNombre.value);
})

/* input.addEventListener('input', ()=>{
  let resultado = buscarServicio(servicios,input.value.toLowerCase());
  console.log(resultado);
}) */
btnSearch.addEventListener('click', ()=>{
  let resultado= filtrarServicio(servicios,input.value.toLowerCase() )
  console.log(resultado);
  parrafo[0].innerHTML= `
  <h3>${resultado[0].nombre}</h3>
  <p>${resultado[0].precio}</p>
  <img src="./img/${resultado[0].img}" alt="">`
})

//evento submit
const formulario = document.querySelector('form')
console.log(formulario);


formulario.addEventListener('submit', (e)=>{
  e.preventDefault();
  let form = e.target;
  console.log(form);
  console.log(form.children[0].value);
  console.log(form.children[1].value);
  console.log(form.children[2]);
})
