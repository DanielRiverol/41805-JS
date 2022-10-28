const inputSearch = document.querySelector("#inputSearch"),
  btnSearch = document.querySelector("#btnSearch"),
  cardContainer = document.querySelector(".card-container");

//function asincrona
//Esta function tiene que ser asincrona
const URL = "./data/data.json";
const fetchAPI = async (URL) => {
  const respuesta = await fetch(URL);
  const personajes = await respuesta.json();
  console.log(personajes[0]);
crearHtml(personajes)
};

fetchAPI(URL);

//fetch(url).then(response=> response.json()).then(data=>{
//  console.log(data)})
/* 
//ESTO NO LO PODEMOS HACER SIN UN BACKEND
fetch(url,{
  method:"POST",
  body:......,
  headers:....
})
*/
function crearHtml(arr){
let html='';
arr.forEach((personaje)=>{
  const {name,dateOfBirth, house,image}= personaje; 

  html=`
  <div class="card">
      <img src="${image}" alt="">
      <div class="card-body">
          <h3>${name}</h3>
          <p>${dateOfBirth}</p>
          <p>${house}</p>
      </div>
  </div>`;


  cardContainer.innerHTML += html;
})


}
//Implementar un funcion busqueda