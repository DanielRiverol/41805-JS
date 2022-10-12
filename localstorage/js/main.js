const span = document.querySelector("span"),
  guardar = document.querySelector(".btn-success"),
  mostrar = document.querySelector(".btn-primary"),
  borrar = document.querySelector(".btn-danger");

///funciones
function crearLS() {
  const ingreso = document.getElementById("ingreso");
  localStorage.setItem("valor", ingreso.value);
}
function mostrarLS() {
  span.innerText = localStorage.getItem("valor");
}
function borrarLS() {
  localStorage.removeItem("valor")
}

//listeners
guardar.addEventListener("click", crearLS);
mostrar.addEventListener('click', mostrarLS)

borrar.addEventListener("click", borrarLS)