document.title = "Clase 15 | Comisión 41805";
const titulo = document.querySelector("h1 span"),
  tituloSecundario = document.querySelector("h2"),
  card = document.querySelector(".card");
const btn = document.querySelector("#btn"),
  contenedor = document.querySelector(".contenedor"),
  lista = document.querySelector("#lista");

titulo.innerText = "Clase 15";
tituloSecundario.innerText = "Ajax y fetch";

//Array Servicios
/* const servicios = [
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
 */
const pedirServicios = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(servicios);
    }, 2000);
  });
};
let productos = [];

const renderServicios = (arr) => {
  let html;
  for (const item of arr) {
    const { id, nombre, img, precio } = item;

    html = `
      <div class="card">
          <div class="card-image">
           <img src="../img/${img}">
          </div>
        <div class="card-content">
          <span class="card-title">${nombre.toUpperCase()}</span>
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

/* pedirServicios().then((res) => {
  productos = res;
  contenedor.innerText = "";
  renderServicios(productos);
}); */


//fetch
/* fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=> response.json())
.then(datos=> {
  console.log(datos);
  console.log(datos[0]);
  console.log(datos[0].title);
  console.log(datos[0].body);
  datos.forEach(post => {
    console.log(post);
    const li = document.createElement('li');
    li.innerHTML=`
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    `
lista.appendChild(li);


  }) */

/*   fetch('https://jsonplaceholder.typicode.com/posts',{
    method:"POST",
    body:JSON.stringify({
      title:"HOLA",
      body:"Post de prueba",
      userId:1
    }),
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    }
  })
.then((response)=> response.json())
.then(datos=> {

console.log(datos);
}) */

fetch('./js/data.json')
.then(response=> response.json())
.then(datos=>{
//console.log(datos);

//renderServicios(datos)


})


//ASYNC y AWAIT
async function servicio(){
  const response = await fetch('./js/data.json')

  const datos = await response.json()
  console.log(datos);
  renderServicios(datos)
}

servicio()