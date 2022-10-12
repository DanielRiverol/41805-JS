let btn = document.getElementById("guardar"),
  checkbox = document.getElementById("check");
const email = document.getElementById("email");
const password = document.getElementById("password"),
  p = document.querySelector("p");
btn.innerText = "Registrar";

function guardar(valor) {
  let user = { usuario: email.value, pass: password.value };
  if (user.usuario == "" || user.pass == "") {
    p.innerText = "Los campos no deben estar vacios";
    return;
  } else {
    if (valor === "sessionStorage") {
      sessionStorage.setItem("item", JSON.stringify(user));
    }
    if (valor === "localStorage") {
      localStorage.setItem("item", JSON.stringify(user));
    }
  }
  return user;
}
function recuperarDatos(datos) {
  if (datos) {
    email.value = datos.usuario;
    password.value = datos.pass;
  }
}
//email.value= "Ingresa tu nombre"
recuperarDatos(JSON.parse(localStorage.getItem("item")));

//ejecutando el inicio de sesion
btn.addEventListener("submit", (event) => {
  console.log(event.target);
  event.preventDefault();
  if (checkbox.checked) {
    guardar("localStorage");
  } else {
    guardar("sessionStorage");
  }
});
