//Calcular el precion final con el descuento aplicado a monto total//

let precioNormal = 200
let descuento = 20

let precioConDescuento = Math.abs(precioNormal * descuento / 100 - precioNormal) 

console.log(`El precio con el descuento aplicado es de: ${precioConDescuento}`)

/*En este ejercicio pudimo poner en práctica la aritmetica básica en union con la aplicación 
del descuento en un producto o precio*/