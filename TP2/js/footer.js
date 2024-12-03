"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const columnas = document.querySelectorAll('.lista-footer');

    function habilitarMenuMobile() {
        for (let columna of columnas) {
            // Se contraen todas las listas
            const lista = columna.querySelector('ul');
            lista.style.maxHeight = '0';
            columna.classList.remove('desplegada');

            // Se añaden event listeners a los títulos de las columnas
            const titulo = columna.querySelector('.titulo-columna');
            titulo.addEventListener('click', desplegarMenu);
        }
    }
    
    function desplegarMenu(event) {
        const columna = event.currentTarget.parentNode;
        const lista = columna.querySelector('ul'); // Lista <ul> de la columna

        // Se cierran otras listas abiertas
        for (let otraColumna of columnas) {
            const otraLista = otraColumna.querySelector('ul');
            
            if (columna !== otraColumna && otraColumna.classList.contains('desplegada')) {
                otraColumna.classList.remove('desplegada');
                otraLista.style.maxHeight = '0'; // Oculta la lista
                break;
            }
        }
        
        let desplegada = columna.classList.contains('desplegada');
        
        if (desplegada) { // Si la columna está desplegada, la cierra
            lista.style.maxHeight = '0';
            columna.classList.remove('desplegada');
        } else { // Sino, la abre
            lista.style.maxHeight = `${lista.scrollHeight}px`; // Calcula y asigna la altura máxima
            columna.classList.add('desplegada');
        }
    }

    function deshabilitarMenuMobile() {
        for (let columna of columnas) {
            const titulo = columna.querySelector('.titulo-columna'); // Título de la columna
            columna.classList.remove('desplegada');
            const lista = columna.querySelector('ul');
            lista.style.maxHeight = `${lista.scrollHeight}px`;
            titulo.removeEventListener('click', desplegarMenu);
        }
    }

    function comprobarDimensiones() {
        if (window.innerWidth <= 800) {
            habilitarMenuMobile();
        } else {
            deshabilitarMenuMobile();
        }
    }

    comprobarDimensiones();
    window.addEventListener('resize', comprobarDimensiones);
});