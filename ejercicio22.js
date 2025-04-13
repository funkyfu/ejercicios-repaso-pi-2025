//realizar un programa que identifique el tipo de transporte utilizando switch

let tipo = "bicicleta"

switch (tipo){
    case "carro":
    case "moto":
        console.log("Es un vehiculo de motor")
    break
    case "bicicleta": 
    case "patines":
        console.log("no es un vehiculo de motor")
    break
    default:
        console.log("Error, ingrese un tipo valido")
}

/*En este problema podemos validar consultas un poco específicas sobre
un/unos objetos en específico*/