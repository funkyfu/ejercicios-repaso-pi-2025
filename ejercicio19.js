//ralizar una calculadora con las operaciones basica utilzando if else if

let numero1 = 12
let numero2 = 4
let operacion = "*"
let resultado

if (operacion === "+") {
    resultado = numero1 + numero2
}
else if (operacion === "-") {
    resultado = numero1 - numero2
}
else if (operacion === "*") {
    resultado = numero1 * numero2
}
else if (operacion === "/") {
    resultado = numero1 / numero2
}
else {
    resultado = "Error de operacion"
}

/*Con este codigo podemos practicar para realizar una calculadora indicando 
la operacion que deseamos realizar*/