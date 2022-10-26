document.title = "Clase 14 | Comisión 41805";
//querySelector
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor");

titulo.innerText = "Clase 14";
tituloSecundario.innerText = "Asincronía y promesas";

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

//Asincronía

function square(num) {
  return num * num;
}

function logSquare(num) {
  console.log(square(num));
}

//logSquare(2);

//evento a boton
btn.addEventListener("click", () => {
  card.classList.add("active");

  setTimeout(() => {
    card.classList.remove('active')
  }, 2500);
});

/* console.log("Inicio");

setTimeout(() => {
  console.log("Mitad, me ejecuto despues de 3s");
}, 0);

console.log("Final"); */

/* for (const letra of "Hola") {
  setTimeout(() => {
    console.log(letra);
  }, 3000);
}
for (const letra of "tarola") {
   setTimeout(() => {
    console.log(letra);
  }, 2000);
} */

/* let contador=0

const intervalo = setInterval(()=>{
  contador++;
console.log("Contador : " + contador);

if(contador >= 5){
  clearInterval(intervalo)
  console.log("Se detuvoi el ciontador");
}
},1000); */
//PROMESAS
/* console.log(new Promise((resolve,reject)=>{

})); */

let hamburguesa=true;
let noHayHamburguesa=false;

const pedirHamburguesa=(respuesta)=>{

  return new Promise((resolve,reject)=>{
        if(respuesta){
          resolve("Su pedido está listo")
        }else{
          reject("No hay papas fritas!!!")
        }
  })

}

/* console.log(pedirHamburguesa(hamburguesa));
console.log(pedirHamburguesa(noHayHamburguesa)); */

//THEN
/* pedirHamburguesa(hamburguesa)
.then((respuesta)=>{
    console.log(respuesta);
})


//catch
pedirHamburguesa(noHayHamburguesa)
.catch((respuesta)=>{
    console.log(respuesta);
})
 */
/* pedirHamburguesa(noHayHamburguesa)
.then((respuesta)=>{
    console.log(respuesta);
}).catch((respuesta)=>{
  console.log(respuesta);
}).finally(()=>{
  console.log("Gracias vuelva prontos!!!!!");
}) */





/* console.log("Final"); */

const pedirProductos= ()=>{

  return new Promise((resolve,reject)=>{
   
     setTimeout(() => {
      resolve(servicios)
     }, 2000);
    
})
}
let productos = [];

const renderProductos = (arr) => {
  // función que genere la vista de los productos
  let html;
  for (const item of arr) {
    const { id, nombre, img, precio } = item;

    html = `
        <div class="card">
      <div class="card-image">
        <img src="../img/${img}">
        <span class="card-title">${nombre.toUpperCase()}</span>
      </div>
      <div class="card-content">
        
      <p>$${precio}</p>
      
      </div>
      <div class="card-action">
        <button class="btn" id="${id}">Comprar</button>
      </div>
      </div>
     `;
    
    contenedor.innerHTML += html;
  }
};


pedirProductos()
.then((res)=>{
    productos= res;
contenedor.innerText="";
renderProductos(productos)    
})