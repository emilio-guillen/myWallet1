class Usuario {
    constructor (nombre, email, contraseña, saldo) {
        this.nombre = nombre
        this.email = email
        this.contraseña = contraseña
        this.saldo = saldo
    }
    
    añadirSaldo (cantidad) {
        this.saldo += cantidad
        alert(`El nuevo saldo de ${this.nombre} es ${this.saldo}`)
    }
    retirar (cantidad) {
        this.saldo -= cantidad
        alert(`Tu nuevo saldo es ${this.saldo}`)
    }
    transferir (cantidad,destinatario) {
        this.retirar(cantidad);
        destinatario.añadirSaldo(cantidad)
    }

}
const usuario1 = new Usuario ("Emilio", "emilio@mail.com", "password123", 200)
const usuario2 = new Usuario ("Romina", "romi@mail.com", "password123", 500)
const usuario3 = new Usuario ("Mario", "mario@mail.com", "password123", 400)
const usuario4 = new Usuario ("Fany", "fany@mail.com", "password123", 600)

const usuarios = [usuario1, usuario2, usuario3, usuario4]

function bienvenida (usuario){
    alert(`Bienvenido ${usuario.nombre}, tu saldo es ${usuario.saldo}`)
}
function despedida (usuario){
    alert(`Adiós ${usuario.nombre}`)
}
function menu (opcion) {
    while (opcion != 4) {
        switch(opcion){
            case "1":
            cantidad = parseFloat(prompt("¿Cuánto deseas añadir?:"))
            usuario1.añadirSaldo(cantidad)
            break;
            case "2":
            cantidad = parseFloat(prompt("¿Cuánto deseas retirar?:"))
            usuario1.retirarSaldo(cantidad)
            break;
            case "3":
            cantidad = parseFloat(prompt("¿Cuánto deseas transferir?:"))
            destinatario = escogerDestinatario()
            usuario1.transferir(cantidad, destinatario)
            break;
            default:
            alert("Opción inválida")
            break;
        }
        opcion=prompt("¿Qué deseas hacer? 1. Añadir saldo 2. Retirar 3. Transferir 4. Salir")
    }
}

bienvenida(usuario1)
usuarios.forEach((usuario)=>{
    console.log(usuario.nombre)
})
let opcion=prompt("¿Qué deseas hacer? 1. Añadir saldo 2. Retirar 3. Transferir 4. Salir")
menu(opcion)
despedida(usuario1)


function escogerDestinatario() {
    destinatario = prompt("Escribe el nombre del destinatario (Lista en la consola)")
    switch(destinatario){
        case "Romina":
        return usuario2;
        case "Mario":
        return usuario3;
        case "Fany":
        return usuario4;
        default:
        alert("Opción inválida")
        break;
    }
}

