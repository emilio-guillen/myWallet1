let nombreUsuario = prompt("Escribe un nombre de usuario:");
let contraseniaUsuario = prompt("Escribe una contraseña:");
let saldoInicial = parseFloat(prompt ("Ingresa tu saldo inicial:"));
let saldoActual = saldoInicial;

alert("Registro correcto, ingresa con tus credenciales");


function validarUsuario(){
    let usuarioIngresado = prompt("Ingresa tu usuario:");
    while (usuarioIngresado != nombreUsuario){
        alert("Usuario incorrecto, intenta nuevamente:");
        usuarioIngresado = prompt("Ingresa tu usuario:");
    };
    return usuarioIngresado;
}

function validarContrasenia(){
    let contraseniaIngresada = prompt("Ingresa tu contraseña:");
    while (contraseniaIngresada != contraseniaUsuario){
        contraseniaIngresada = prompt("Contraseña incorrecta, intenta de nuevo:");
    }
    return contraseniaIngresada;
}

function iniciarSesion(){
    if (validarUsuario(),validarContrasenia()) {
        return alert(`Bienvenido ${nombreUsuario}`);
    }
}

function mostrarSaldo(){
    return alert(`Tu saldo actual es de ${saldoActual}`);
}

function agregarSaldo(){
    abono = parseFloat(prompt("Ingresa la cantidad a abonar"));
    saldoActual += confirmarCantidad(abono);
    mostrarSaldo();
    return saldoActual;
}

function retirarDinero(){
    retiro = parseFloat(prompt("Ingresa la cantidad a retirar"));
    saldoActual -= validarSaldo(retiro);
    alert(`Retiro exitoso, tu nuevo saldo es de ${saldoActual}`);
    return;
}

function modificarDatos(){
    alert("Para modificar tus datos personales necesitamos validar tu identidad");
    validarContrasenia();
    nombreUsuario = prompt("Ingresa tu nuevo usuario:");
    contraseniaUsuario = prompt("Ingresa tu nueva contraseña:");
    alert(`Tu nuevo usuario es ${nombreUsuario} y tu contraseña es ${contraseniaUsuario}`)
    return nombreUsuario, contraseniaUsuario;
}

function transferir(){
    destinatario = prompt("Ingresa el correo electronico del destinatario:");
    cantidad = parseFloat(prompt("Ingresa la cantidad a transferir"));
    saldoActual -= validarSaldo(cantidad);
    alert(`Transferencia enviada a ${destinatario} de manera exitosa, tu nuevo saldo es de ${saldoActual}`);
    return;
}

function confirmarCantidad(cantidad){
    if (prompt(`La cantidad ingresada es ${cantidad}, ¿Confirmar? s/n`) == "s"){
        return cantidad;
    }
    else{
        nuevaCantidad = parseInt(prompt("Ingresa la cantidad correcta"));
        confirmarCantidad(nuevaCantidad);
        return nuevaCantidad
    }
}

function validarSaldo(dinero){
    confirmarCantidad(dinero);
    while (dinero > saldoActual){
        dinero = parseFloat(prompt(`La cantidad excede tu saldo actual el cual es de ${saldoActual}, ingresa otra cantidad:`));
        confirmarCantidad(dinero);
    }
    return dinero;
}

function cerrarSesion(){
    alert("Hasta luego " + nombreUsuario)
}


iniciarSesion();
mostrarSaldo();
agregarSaldo();
retirarDinero();
modificarDatos();
transferir();
cerrarSesion()



