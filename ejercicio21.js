//mostrar el valor de opcion según se solicite utilizando switch + string

let opcion = "editar"

switch(opcion){
    case`ver`:
        console.log("mostrar perfil")
        break
    case`editar`:
        console.log("editando datos")
         break
    case`salir`:
         console.log("saliendo del sistema")
         break
    default:
        console.log("la opcion no esta disponible")
}
    