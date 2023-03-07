// Constructor Destinatario
class Destinatario {
    constructor (nombre, numeroCuenta) {
        this.nombre = nombre;
        this.numeroCuenta = numeroCuenta;
        this.saldo = 0;
    }
}
//Funcion Renderizar Destinatarios

function renderizarDestinatarios (destinatarios) {
    bodyTabla.innerHTML = "";

    destinatarios.forEach( (destinatario) => {
        const tr = document.createElement("tr");

        const tdNombre = document.createElement("td");
        const span = document.createElement("span");
        span.innerHTML = `${destinatario.nombre}`,
        tdNombre.append(span);

        const tdCuenta = document.createElement("td");
        tdCuenta.innerHTML = `${destinatario.numeroCuenta}`;

        const tdSaldo = document.createElement("td");
        tdSaldo.innerHTML = `$${destinatario.saldo}`;

        tr.append(tdNombre);
        tr.append(tdCuenta);
        tr.append(tdSaldo);

        bodyTabla.append(tr)
    })
}

//Eventos agregar  y retirar saldo

const bodyTabla = document.getElementById("bodyTabla")
let saldoUsuario = parseInt(obtenerSaldo()) 
const listaDeDestinatarios = obtenerDestinatarios();
renderizarDestinatarios(listaDeDestinatarios);
//console.log(listaDeDestinatarios);

const formularioAgregarSaldo = document.getElementById("formularioAgregar");
const inputSaldoAgregar = document.getElementById("montoAgregar");
const formularioRetirarSaldo = document.getElementById("formularioRetirar");
const inputMontoRetirar = document.getElementById ("montoRetirar");
const formularioDestinatarios = document.getElementById("formularioDestinatarios");
const inputNombreDestinatario = document.getElementById("nombreDestinatario");
const inputNumeroCuenta = document.getElementById("cuentaDestinatario");
const formularioTransferir = document.getElementById("formularioTransferir");
const inputDestinatarioTransferir = document.getElementById("destinatarioTransferir");
const inputMontoTransferir = document.getElementById("montoTransferir")


formularioAgregarSaldo.addEventListener("submit", (event) => {

    event.preventDefault();

    saldoUsuario += parseInt(inputSaldoAgregar.value);
    saldoActual.innerHTML = `Tu saldo actual es $${saldoUsuario}`;
    inputSaldoAgregar.value = "";
    actualizarLS();
    
})

formularioRetirarSaldo.addEventListener("submit", (event) => {

    event.preventDefault();

    saldoUsuario -= parseInt(inputMontoRetirar.value);
    saldoActual.innerHTML = `Tu saldo actual es $${saldoUsuario}`;
    inputMontoRetirar.value = "";
    actualizarLS();
    
})

formularioDestinatarios.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = inputNombreDestinatario.value;
    const numeroCuenta = inputNumeroCuenta.value;

    inputNombreDestinatario.value = "";
    inputNumeroCuenta.value = "",

    listaDeDestinatarios.push(new Destinatario(nombre, numeroCuenta));
    //console.log(listaDeDestinatarios)
    renderizarDestinatarios(listaDeDestinatarios);

    actualizarDestinatariosLS();
})

formularioTransferir.addEventListener("submit", (event)=> {
    event.preventDefault();

    saldoUsuario -= parseInt(inputMontoTransferir.value);
    saldoActual.innerHTML = `Tu saldo actual es $${saldoUsuario}`;
    const nombrePersona = inputDestinatarioTransferir.value;
    const cantidadTransferir = inputMontoTransferir.value;
    
    const indicePersona = listaDeDestinatarios.findIndex((persona) => {
        return persona.nombre === nombrePersona
    })

    listaDeDestinatarios[indicePersona].saldo += parseInt(cantidadTransferir);
    
    
    inputDestinatarioTransferir.value = "";
    inputMontoTransferir.value = "",

    renderizarDestinatarios(listaDeDestinatarios);
    actualizarDestinatariosLS();
    actualizarLS();
})

inputDestinatarioTransferir.addEventListener("input", () => {
    const buscarDestinatario = inputDestinatarioTransferir.value;

    const destinatariosFiltrados = listaDeDestinatarios.filter ((destinatario) => {
        return destinatario.nombre.toLowerCase().includes(buscarDestinatario.toLowerCase());
    });

    renderizarDestinatarios(destinatariosFiltrados);
})


function obtenerSaldo () {
    const saldoActual = document.getElementById("saldoActual");
    let saldoInicial = 0;

    let saldoLS = localStorage.getItem("saldoActualKey");

    if (saldoLS !== null) {
        saldoInicial = parseInt(saldoLS);
        saldoActual.innerHTML = `Tu saldo actual es $${saldoInicial}`;
    }
    return saldoInicial;
}

function obtenerDestinatarios () {
    let destinatarios = [];

    let destinatariosLS = localStorage.getItem("destinatariosKey")

    if (destinatariosLS !== null) {
        destinatarios = JSON.parse(destinatariosLS)
    }
    return destinatarios
}

function actualizarLS () {
    localStorage.setItem("saldoActualKey", saldoUsuario);
}

function actualizarDestinatariosLS() {
    const listaDestinatariosJSON = JSON.stringify(listaDeDestinatarios);
    localStorage.setItem("destinatariosKey", listaDestinatariosJSON)

}