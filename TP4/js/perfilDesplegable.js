"use strict";

document.addEventListener('DOMContentLoaded', () => {
    //Traigo los elementos html que voy a manipular
    const iconoPerfil = document.getElementById('icono-perfil'); //const porque los valores de las variables no pueden ser re-asignados
    const perfilDesplegable = document.getElementById('contendor-perfil-desplegable');
    const cruzSalir = document.getElementById('cerrar-perfil');

    //Agrego un evento de escucha: cuando el usuario haga click ejecute las sig sentencias
    iconoPerfil.addEventListener('click', () => {
        perfilDesplegable.classList.toggle('abierto');
    });

    cruzSalir.addEventListener('click', () => {
        perfilDesplegable.classList.remove('abierto');
    });
});
