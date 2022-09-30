
const numeros = [1, 2, 3, 4, 5, 6];

/* let nombre = "pedro";
alert(nombre);
console.log("hola"); */

function mayorQue(n) {
  return (m) => m > n;
}
let mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez);

/* console.log(mayorQueDiez(12));
console.log(mayorQueDiez(8)); */

function calculo(op) {
  switch (op) {
    case "+":
      return (n1, n2) => n1 + n2;
      break;

    case "-":
      return (n1, n2) => n1 - n2;
      break;

    default:
      return 0;
      break;
  }
}
/* 
let suma = calculo("-");
console.log(suma(12, 34)); */


function porCadaUno(arr, fn){

    for (const elemento of arr) {
        fn(elemento)
        }

}

let num = 0
function sumar(numero){
  num = num + numero
}

porCadaUno(numeros,sumar);
console.log(num);

const triplicado=[];

porCadaUno(numeros,(elemento)=>{
  triplicado.push(elemento*3)
})
/* console.log(numeros);
console.log(triplicado); */

//forEach
/* 
numeros.forEach((num)=>{
  console.log(num);
}) */
const productos = [
  { id: 1, nombre: "Arroz", precio: 124 },
  { id: 2, nombre: "Papa", precio: 90 },
  { id: 3, nombre: "Tomate", precio: 204 },
  { id: 4, nombre: "Morrón", precio: 870 },
  { id: 5, nombre: "Pan", precio: 240 },
  { id: 6, nombre: "Fideos", precio: 124 },
  { id: 7, nombre: "Fideos", precio: 124 },
];
//find

const encontrado = productos.find((el)=> {
 return el.nombre === "Fideos" 
})
const encontrado1 = productos.find((el)=> {
   return el.nombre === "Peras"
} )

console.log(encontrado);
console.log(encontrado1);

//some
const existe= productos.some((el)=>{
  return el.precio === 90
})

/* console.log(existe); */
//MAP

const nombres = productos.map((producto)=>{
  return { id: producto.id,
          nombre: producto.nombre,
          precio: producto.precio * 1.15
          }
})

/* console.log(nombres); */

//filter
const filtrado= productos.filter((el)=>{
  return el.precio > 150
})

/* console.log(filtrado); */

//reduce

const total= numeros.reduce((acc, el)=>{
 return acc + el;
},0)

const totalCompra= productos.reduce((acc,el)=>{
return acc + el.precio
},0)

/* console.log(totalCompra); */

//sort
/* const nums=[-9,0,23,33,-12];
console.log(nums);
nums.sort((a,b)=> b - a);
console.log(nums); */
//DATE
const date = new Date();
console.log(date.getDate()+"/"+(date.getMonth() +1) );
console.log(date.toDateString() );
console.log(date.toLocaleString() );
console.log(date.toLocaleDateString() );