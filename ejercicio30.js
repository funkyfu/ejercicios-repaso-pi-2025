//crea un programa que busque un nombre e indique si esta o no en la lista

const nombres = ["Ana", "Carlos", "Pedro", "Lucía"]
let encontrado = false

for (let i = 0; i < nombres.length; i++) {
  if (nombres[i] === "Lucía") {
    encontrado = true
    break 
  }
}

if (encontrado) {
  console.log("Nombre encontrado")
} else {
  console.log("Nombre no encontrado, intente nuevamente")  
}