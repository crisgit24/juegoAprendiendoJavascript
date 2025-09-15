let listadeNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if(numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en  ${numeroIntentos} ${(numeroIntentos==1) ? ' intento' : ' intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        numeroIntentos++;
        limpiarCampo();
    }
}
function generarNumeroAleatorio() {
    let numeroGenerado= Math.floor(Math.random() * numeroMaximo) + 1;
    if(listadeNumerosSorteados.length === numeroMaximo){
        asignarTextoElemento('p', 'Ya se han sorteado todos los numeros posibles');

    }else{

        if(listadeNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            listadeNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function limpiarCampo() {
    document.querySelector('#valorUsuario').value='';}
function accionesIniciales() {
    asignarTextoElemento('h1', 'Proyecto Inicial - Logica de Programacion 2');
    asignarTextoElemento('p', 'Adivina el numero');
    numeroSecreto = generarNumeroAleatorio();
    numeroIntentos = 1;
}
function reiniciarJuego() {
    //limpiarcampo
    limpiarCampo();
    //mostrar el mensaje inicial
    //generar numero secreto
    //reiniciar contador de intentos
    accionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

accionesIniciales();