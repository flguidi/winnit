"use strict";

// Elementos HTML
const divPantallaCarga = document.createElement('div');
divPantallaCarga.id = 'pantalla-carga';

const divContenedorCarga = document.createElement('div');
divContenedorCarga.id = 'contenedor-carga';

const divLogoCarga = document.createElement('div');
divLogoCarga.id = 'logo-carga';

const logoCarga = document.createElement('img');
logoCarga.src = "img/iconos/logo-carga.png";
divLogoCarga.appendChild(logoCarga);

const pPorcentajeCarga = document.createElement('p');
pPorcentajeCarga.id = 'porcentaje-carga';

document.body.appendChild(divPantallaCarga);
divContenedorCarga.appendChild(divLogoCarga);
divContenedorCarga.appendChild(pPorcentajeCarga);
divPantallaCarga.appendChild(divContenedorCarga);


// Contador
let contador = 0; // Valor inicial
const objetivo = 100; // Objetivo del contador (100%)
const duracion = 5000; // Duración total en milisegundos
const intervalo = 50; // Intervalo de actualización en milisegundos
const pasos = objetivo / (duracion / intervalo); // Cantidad de pasos para alcanzar el objetivo
document.body.classList.add('no-scroll');

const intervaloContador = setInterval(() => {
    contador += pasos;
    pPorcentajeCarga.innerHTML = Math.round(contador) + "%"

    if (contador >= objetivo) {
        clearInterval(intervaloContador);

        // Cuando termina la carga, se dispara la animación de finalización
        pPorcentajeCarga.innerHTML = "100%";
        divContenedorCarga.style.animation = 'implosion 1.6s ease-in-out forwards';
        divPantallaCarga.classList.add('finalizada');
        setTimeout(() => {
            document.body.classList.remove('no-scroll');
            divPantallaCarga.remove(); 
        }, 2000);
    }
}, intervalo);

function reestablecerRotacion() {

}
