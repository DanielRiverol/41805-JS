document.title = "Clase 12 | Comisión 41805";
//querySelector
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2");

titulo.innerText = "Clase 12";
tituloSecundario.innerText = "Operadores avanzados";

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

/* const usuario = {
  nombre: "Juan",
  apellido: "Lopez",
  edad: 18,
};
const usuario1 = null; */

//Valores truthy o falsy
/* if(undefined){
  console.log("este valor es truthy");
}else{
  console.log("este valor es falsy");
} */

// operador ternario

let temperatura = 30;
/* if(temperatura>30){
    tituloSecundario.innerText= 'Día Caluroso'
}else{
  tituloSecundario.innerText= 'Día Agradable'
} */

//condicion ? true : false

/* temperatura > 30
  ? (tituloSecundario.innerText = "Día Caluroso")
  : (tituloSecundario.innerText = "Día Agradable"); */

let permiso;
/*  if(usuario.edad >=18){
    permiso= true;
  }else{
    permiso=false
  }

  if (permiso){
    tituloSecundario.innerText = "Podes entrar al casino"
  }else{
    tituloSecundario.innerText = "Acceso denegado"
   //ejemplo de posible aplicacionde un ternario
    if(){

    }else{

    }
  } */

/* permiso=usuario.edad>=18 ? true : false;
  console.log(permiso);
  permiso ? tituloSecundario.innerText = "Podes entrar al casino" : tituloSecundario.innerText = "Acceso denegado"; */

//OP AND
/* const usuario = {
  nombre: "Juan",
  apellido: "Lopez",
  edad: 12,
}; */
const usuario1 = null;
let carrito;
/*  if(carrito.length == 0){
    tituloSecundario.innerText ="El carrito esta vacio" 
  } */

//carrito.length === 0 && (tituloSecundario.innerText = "El carrito esta vacio");

//const ingreso = usuario.edad >= 18 && "Podes entrar al casino";

//console.log(ingreso);

//OR operador1 || operador2

//console.log(usuario || "El usuario no existe");
//console.log(usuario1 || "El usuario no existe");

/* let carritoLS= JSON.parse(localStorage.getItem('carrito'))

if(carritoLS){
  carrito= carritoLS
}else{
  carrito = []
} */
//carrito = JSON.parse(localStorage.getItem('carrito')) || [];

/* console.log(usuario.nombre || "Propiedad no existe");
console.log(usuario1?.nombre || "Propiedad no existe"); */

//DESESTRUCTURACIÓN

const usuario = {
  nombre: "Juan",
  apellido: "Lopez",
  edad: 12,
  telefono:{
    casa:122422434,
    trabajo:3242423
  }
};

/* let nombreUsuario = usuario.nombre;
let apeUsuario = usuario.apellido;
let edadUsuario = usuario.edad;
console.log(nombreUsuario);
console.log(apeUsuario);
console.log(edadUsuario); */
const {nombre, apellido, telefono:{casa}}= usuario
console.log(nombre);
console.log(apellido);
console.log(casa);
/*  const {casa , trabajo}=telefono
 console.log(casa);
 console.log(trabajo); */

 function DESESTRUCTURACION({nombre, edad}){
  console.log(nombre, edad);
 }
 DESESTRUCTURACION(usuario)

 //Spread ...
 const nombres=["Juan", "Pedro", "Pablo"]
 console.log(nombres);
 console.log(...nombres);

 const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

 console.log(Math.min(...numeros));

 const precio= servicios.map(el=>el.precio)

 console.log(precio)
 console.log(Math.min(...precio));
 console.log(Math.max(...precio));