//realizar un menu interactivo simple que con do while

let opcion

do {
  opcion = prompt("Selecciona una opcion: A (Saludar), B (Ingresar nombre), 3 (Salir)")

  if (opcion === "A" || opcion === "a") {
         alert("Hola que tal, Bienvenido");
  } 
    else if (opcion === "B" || opcion === "b") {

    let nombre = prompt("Ingresa tu nombre:")
        alert(`Hola, Bienvenido ${nombre}`)

  } 
    else if (opcion !== "3") {
        alert("ERROR, opción no válida")
  }

} while (opcion !== "3")

/*con este ejercicio ponemos en practita la opcion de un prompt para que podamos interactuar 
con las diferentes opciones que se nos brindan*/