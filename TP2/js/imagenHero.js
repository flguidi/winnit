"use strict";

document.addEventListener('DOMContentLoaded', () => {
    class Juego {
        constructor(titulo, categoria, img, url) {
            this.titulo = titulo;
            this.categoria = categoria;
            this.img = img;
            this.url = url;
        }
    }

    const juegos = [
        new Juego('4 en línea', 'Juegos clásicos', '4-en-linea.png', 'juego.html'),
        new Juego('Super Mario Bros', 'Juegos clásicos', 'super-mario-bros.jpg', ''),
        new Juego('Rabbids', 'Juegos populares', 'rabbids.jpg', ''),
        new Juego('Bloxd.io', 'Juegos de aventura', 'bloxd-io.jpeg', ''),
        new Juego('Alien Hominid', 'Juegos de acción', 'alien-hominid.jpg', ''),
        new Juego('Among Us', 'Juegos multijugador', 'among-us.webp'),
    ];

    // Elementos HTML
    const sectionHero = document.querySelector('#imagen-hero');
    const titulo = document.querySelector('#info-juego h1');
    const categoria = document.querySelector('#info-juego p');
    const flechaIzq = document.querySelector('.hero-flecha-izquierda');
    const flechaDer = document.querySelector('.hero-flecha-derecha');

    // Visibilidad de flechas
    sectionHero.addEventListener('mouseenter', () => {
        flechaIzq.classList.add('visible');
        flechaDer.classList.add('visible');
    });

    sectionHero.addEventListener('mouseleave', () => {
        flechaIzq.classList.remove('visible');
        flechaDer.classList.remove('visible');
    });

    // Cambio de imágenes
    const frecuencia = 10000; // Frecuencia de cambio de imágenes (ms)
    let intervalo; // Intervalo de cambio de imágenes
    let indice = 0; // Índice de imagen (comienza con '4 en línea')

    flechaIzq.addEventListener('click', () => {
        indice = (indice - 1 + juegos.length) % juegos.length;
        cambiarJuego();
        animarHero();
    });

    flechaDer.addEventListener('click', () => {
        indice = (indice + 1) % juegos.length;
        cambiarJuego();
        animarHero();
    });

    function animarHero() {
        clearInterval(intervalo); // Cada vez que se llama, se reinicia el intervalo
        intervalo = setInterval(() => {
            indice = (indice + 1) % juegos.length;
            cambiarJuego();
        }, frecuencia);
    }

    function cambiarJuego() {
        // Reinicio de animaciones
        sectionHero.classList.remove('difuminar-fondo');
        categoria.classList.remove('fade-out-in');
        titulo.classList.remove('desplazar');
        sectionHero.offsetWidth;
        sectionHero.classList.add('difuminar-fondo');
        categoria.classList.add('fade-out-in');
        titulo.classList.add('desplazar');

        // Delay para sincronizar cambio de imagen con efecto de desenfoque
        setTimeout(() => {
            titulo.textContent = juegos[indice].titulo;
            categoria.textContent = juegos[indice].categoria;
            sectionHero.style.backgroundImage = `url('img/hero/${juegos[indice].img}')`;
        }, 500);
    }

    // Luego de un tiempo de espera, se dispara la animación
    setTimeout(() => { 
        animarHero();
    }, 7000);

    // Botón de jugar
    const botonJugar = document.querySelector('#info-juego button');
    const flechaJugar = document.querySelector('#flecha-jugar');

    botonJugar.addEventListener('mouseenter', () => {
        flechaJugar.classList.add('desplazamiento-jugar');
    });

    botonJugar.addEventListener('mouseleave', () => {
        flechaJugar.classList.remove('desplazamiento-jugar');
    });

    botonJugar.addEventListener('click', () => {
        if (juegos[indice].titulo === '4 en línea') {
            window.location.href = 'juego.html';
        }
    });
});
