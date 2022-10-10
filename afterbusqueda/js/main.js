const servicios = [
  { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },
  { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
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

function Servicio(id, nombre, precio, img){
  this.id=id;
  this.nombre=nombre;
  this.precio=precio;
  this.img=img;
}

console.log(servicios);

const nuevoServicio= new Servicio(10,"depi definitiva",3500,"img.jpg");
const nuevoServicio2= new Servicio(11,"pilling",3500,"img.jpg");

console.log(nuevoServicio);

function cargarServicio(arr, valor){
  arr.push(valor);
}
cargarServicio(servicios, nuevoServicio);
cargarServicio(servicios, nuevoServicio2);
console.log(servicios);
//funciones de flitrado

function filtrarServicio(arr, filtro){
  const filtrado = arr.filter((servicio)=>{
    return servicio.nombre.includes(filtro);
  })
 return filtrado;
}

function filtrarPorPrecio(arr, filtro) {
   return arr.filter((servicio)=>{
    return servicio.precio >= filtro ;
  })

}

function filtrar(arr, filtro, param){
  return arr.filter((el)=>{
    if(param == 'precio'){
      return el[param] <= parseFloat(filtro);
    }else{
      return el[param].includes(filtro);
    }
  })

}


const carrito=[];
/* let dato=prompt("Ingresa un servicio a buscar")

console.log(filtrarServicio(servicios, dato)); */

/* let porPrecio = prompt("Busca tu precio") */
/* 
console.log(filtrarPorPrecio(servicios, porPrecio));
console.log(filtrarPorPrecio(servicios, 4500)); */
/* 
console.log(filtrar(servicios, 6000, 'precio'));
console.log(filtrar(servicios, "mani", 'nombre')); */

const menorPrecio=filtrar(servicios, 1600, 'precio')
console.log(carrito);
console.log(menorPrecio);

for (const servicio of menorPrecio) {
  
  cargarServicio(carrito, servicio)
}
console.log(carrito);