//verificar si los datos asignados son correctos de lo contrario indicar que no lo son 

let usuario = "admin"
let contrasena = 1234

if(usuario === "admin" && contrasena === 1234){
    console.log(`Acceso permitido: BIENVENIDO`)
}
else{
    console.log(`Acceso Denegado: Vuelva a Intentarlo`)
}

//con este programa podemos validar de manera básica la validacion de datos para un inicio de sesion
