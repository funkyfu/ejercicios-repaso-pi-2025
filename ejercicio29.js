//crear un programa que valide los número pares dentro de los números indicados

const numeros = (2, 7, 10, 15, 22, 33)
let contadorPares = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        contadorPares++
    }
}

console.log(`La cantidad de números pares es: ${contadorPares}`)