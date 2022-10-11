//DOM
const div = document.getElementById('app'),
parrafo = document.getElementById('id'),
lista= document.getElementsByClassName('lista'),
paises= document.getElementsByTagName('li'),
contenedor= document.getElementsByTagName('main')[0];


/* console.log(div);
console.log(parrafo); */
/* console.log(lista[0]);
console.log(paises[0]);
console.log(paises[1]);
console.log(paises[2]);
console.log(paises[3]); */

//iterar HTMLCollection
for (const pais of paises) {
    console.log(pais.innerText);
}

paises[0].innerText="ARGENTINA";
parrafo.innerText= "<h3>CHIPRE</h3>";

paises[0].innerHTML= "<h3>CHIPRE</h3> <p>Lorem ipsum</p>";

/* contenedor.className="container" */

//crear elementos
 let parrafo2= document.createElement('p');

 parrafo2.innerHTML= "<h4>Esto es un parrafo creado en JS</h4>";

 /* document.body.append(parrafo2) */
contenedor.appendChild(parrafo2);

//remover elementos

parrafo2.remove()
/* parrafo.remove() */

const inputNombre=document.getElementById('nombre'),
inputPass= document.getElementById('pass');

inputNombre.value='Joaquin';
inputPass.value='Joaquin';

const listaNombres= document.getElementById("nombres")

const personas=["Pedro", 'Jose', "Juan","lucia"];

for (const persona of personas) {
  let li = document.createElement('li');
  li.innerHTML=persona;
  listaNombres.appendChild(li)
}

//Template literals ``

let producto= {
  nombre:"Papas",
  precio: 230
}
let concatenado= "nombre de prodcuto: " + producto.nombre + ", precio: " + producto.precio;
console.log(concatenado);

let plantilla= `El Nombre del producto es: 
${producto.nombre}, su precio es :
 $ ${producto.precio} `;
 console.log(plantilla);//interpolación

const div2=document.getElementsByClassName('div')[0]

div2.innerHTML=`
     <div class="container">
      <h3>${producto.nombre}</h3>
      <p>${producto.precio}</p>     
     </div>
 
`;
