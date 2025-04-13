/*crea un programa que muestra contador de suma hasta 100 
e indique cuantos numeros se utilizaron para ello*/

const numeros = (10, 15, 20, 25, 30, 5)
let suma = 0
let i = 0

while (suma < 100 && i < numeros.length) {
  suma += numeros(i)
  i++
}

console.log("Suma total:", suma)
console.log("Cantidad de números usados:", i)

/*utilizando el ciclo while y el arreglo i podemos validar la informacion 
de una manera más práctica y sencilla*/