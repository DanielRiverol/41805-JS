function Producto(nombre, precio, stock){
this.nombre=nombre;
this.precio= parseFloat(precio);
this.stock= stock;

this.sumarIva=()=>{
this.precio= this.precio*1.21;
}
}

/* class Producto {
  constructor(nombre, precio, stock) {
    this.nombre = nombre;
    this.precio = parseFloat(precio);
    this.stock = stock;

    this.sumarIva = () => {
      this.precio = this.precio * 1.21;
    };
  }
} */

const producto1 = new Producto("Arroz", 123, 12);
//Arrays

const numeros = [-1, 12, 30, -4, 5, 6, 7, 8, 9, 10, 11, 12,0, 13, 14];
console.log(numeros);
const nombres = ["Daniel", "Horacio", "Agustin", "Lucia"];
console.log(nombres);
const booleanos = [true, false, true, false, false];

console.log(booleanos);
const mixtos = [1, "Juan", true, 2.97];
console.log(mixtos);

/* console.log(numeros[3]); */
/* 
for (let i = 0; i < numeros.length; i++) {
 console.log(numeros[i]);
  
} */

//metodos 
//push agrega al final
nombres.push("David","Hector", "Juana");
console.log(nombres);

//pop() eliminar el ultimo elemento del array
nombres.pop();
//console.log(nombres);

//unshift agrega elemntos a principio

nombres.unshift("Pedro");
//console.log(nombres);

//shift
//nombres.shift();
//console.log(nombres);

//Splice elemina desde determinada posicion

//nombres.splice(1,3);
//console.log(nombres);

console.log(nombres.join(", "));

//slice
const nuevoarray=nombres.slice(2, 4)
console.log(nuevoarray);

//indexOf()
/* console.log(nombres.indexOf('Daniel'));
console.log(nombres.indexOf('Hector'));
console.log(nombres.indexOf('pepe')); */

//includes
/* 
console.log(nombres.includes('Daniel'));
console.log(nombres.includes('pepe'));
 */

const carrito=[];


console.log(carrito);

carrito.push(producto1)
carrito.push({nombre:"Fideos", precio:343, stock:9})

const producto2=new Producto('Papas', 300, 2000)
carrito.push(producto2)
console.log(carrito);

/* for (let i = 0; i < carrito.length; i++) {
   console.log(carrito[i]);
  
} */

for (const producto of carrito) {
  console.log("Producto: " + producto.nombre + " Precio: $" + producto.precio);
  console.log(producto.precio);
  console.log(producto.stock);
}
//Crear un funcion que construya objetos y otra que realice un push a un array

