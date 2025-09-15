let numeroIntentos = 1;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en  ${numeroIntentos} ${(numeroIntentos==1) ? ' intento' : ' intentos'}`);
    } else{
        if(numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        numeroIntentos++;
    }
}
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}
numeroSecreto = generarNumeroAleatorio();
console.log(numeroSecreto);
asignarTextoElemento('h1', 'Proyecto Inicial - Logica de Programacion 2');
asignarTextoElemento('p', 'Adivina el numero');