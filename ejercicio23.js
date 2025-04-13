//crear un programa donde verifique el número de días según el mes

let mes = "marzo"

switch(mes){
    case "abril":
    case "junio":
    case "septiebre":
    case "noviembre":
        console.log("el mes cuenta con 30 días")
    break
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("el mes cuenta con 31 días")
    break
    case "febrero":
        console.log("El mes cuenta con 28 días") 
    break
    default:
        console.log("ERROR, ingrese un mes valido")          
}

/*en ese ejercicio validamos que podemos saber los números que cuenta el mes 
siempre y cuando indiquemos uno de los meses del año, de lo contario no podremos
realizar la verificación según lo indicado*/