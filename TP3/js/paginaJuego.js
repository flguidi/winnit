"use strict"

document.addEventListener('DOMContentLoaded', () => {
    // ---- Corazón ----
    const btnCorazon = document.getElementById('opc-corazon');
    const imgEstados = ['img/iconos/comentarios-juego/icono-corazon.png', 'img/iconos/tarjetas-juegos/corazon-rosa.png'];
    let indice = 0;
    btnCorazon.addEventListener('click', () => {
        indice = (indice + 1) % imgEstados.length;
        btnCorazon.src = imgEstados[indice];
    });

    // ---- Botón Compartir ----
    const listaItemsCompartir = document.querySelector('#lista-items-compartir');
    const btnCompartir = document.querySelector('#btn-compartir-juego');
    btnCompartir.addEventListener('click', () => {
        listaItemsCompartir.classList.toggle('hidden');
    });
    
    // ---- Botón de instrucciones ----
    const btnInstrucciones = document.getElementById('opc-instrucciones');
    const btnCerrar = document.getElementById('btn-cerrar-instrucciones');
    const caja = document.getElementById('caja-instrucciones');
    
    btnInstrucciones.addEventListener('click', () => {
        caja.classList.toggle('visible');
    });

    btnCerrar.addEventListener('click', () => {
        caja.classList.remove('visible');
    });
});
//------------------------- caja de valoracion en pag juego
const cajaValoracion = document.querySelector('.caja-valoracion-juego');
const estrella = document.getElementById('img-estrella');

cajaValoracion.addEventListener('mouseover', () => {
    estrella.classList.remove('filtro-oscuro');
});

cajaValoracion.addEventListener('mouseout', () => {
    estrella.classList.add('filtro-oscuro');
});
// funcionalidad para expandir pantalla del juego
const btnExpandir = document.getElementById('opc-expandir');

function pantallaCompleta() {
    const pantallaJuego = document.querySelector('.contenedor-pantalla-juego');
    if (!document.fullscreenElement) {
        pantallaJuego.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();

        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();

        }
    }
}

btnExpandir.addEventListener('click', pantallaCompleta);
