//funciones
function saludar(nombre, apellido, mensaje) {
  /* let nombreCompleto = nombre + " " + apellido;
  let saludoFinal = mensaje + " " + nombreCompleto; */
  return mensaje + " " + nombre + " " + apellido;
}
/* let saludo = saludar("Jose", "Perez", "Como estas?");
console.log(saludo);
console.log(saludar("Maria", "Lopez", "Hola")); */
//simulador de cajero automatico

let pinGuardado = "5701";
function login() {
  let ingresar = false;
  for (let i = 2; i >= 0; i--) {
    let ingresoPIN = prompt(
      "Ingresa tu PIN. Tenés " + (i + 1) + " oportunidades"
    );
    if (ingresoPIN === pinGuardado) {
      alert("Bienvenido ingreso exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error");
    }
  }

  return ingresar;
}

let exito = login();

if (exito) {
  let saldo = 20000;
  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
  );

  while (opcion != "X" && opcion != "x") {
    //menu cajero
    switch (opcion) {
      case "1":
        alert("tu saldo es " + saldo);
        break;
      case "2":
        let retiro = parseInt(prompt("Ingresa el monto a retirar"));
        if (retiro <= saldo) {
          saldo = saldo - retiro;
          alert("retiro extiso tu saldo es $" + saldo);
        } else {
          alert("Saldo insuficiente");
        }
        break;
      case "3":
        let deposito = parseInt(prompt("Ingresa el monto a depositar"));
        saldo = saldo + deposito;
        alert("Depósito extiso tu saldo es $" + saldo);
        break;

      default:
        alert("opcion no valida");
        break;
    }
    opcion = prompt(
      "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }
} else {
  alert("Retendremos tu tarjeta.Comunicate al 0800.notesolucionamosnada");
}
