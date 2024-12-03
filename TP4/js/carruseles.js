"use strict";

document.addEventListener("DOMContentLoaded", () => {
    class Tarjeta {
        constructor(nombre, img, precio, puntaje) {
            this.nombre = nombre;
            this.img = img;
            this.precio = precio;
            this.puntaje = puntaje;
        }
    }
    
    const tarjetas = {
        accion: [
            new Tarjeta("Shadow Ninja Revenge", "ac_shadow-ninja-revenge.jpg", 0, 4.7),
            new Tarjeta("Cursed Treasure 2", "ac_cursed-treasure-2.jpg", 0, 3.8),
            new Tarjeta("Endless Waves Survival", "ac_endless-waves-survival.jpg", 1299, 4.0),
            new Tarjeta("Endless Siege", "ac_endless-siege.jpg", 0, 3.2),
            new Tarjeta("Ninja Hands", "ac_ninja-hands.jpg", 1400, 4.9),
            new Tarjeta("Battle Simulator", "ac_battle-simulator.png", 0, 4.7),
            new Tarjeta("Merge Cannon: Chicken Defense", "ac_chicken-defense.png", 0, 3.8),
            new Tarjeta("Merge Tanks", "ac_merge-tanks.png", 1299, 4.0),
            new Tarjeta("Stickman Archero Fight", "ac_stickman-archero-fight.png", 0, 3.2),
            new Tarjeta("Stickman WWII", "ac_stickman-ww2.png", 2499, 4.9),
        ],
        aventura: [
            new Tarjeta("Daily Room Escape", "av_daily-room-escape.jpg", 0, 4.2),
            new Tarjeta("Senya and Oscar 2", "av_senya-and-oscar-2.jpg", 1250, 3.0),
            new Tarjeta("OneBit Adventure", "av_onebit-adventure.jpg", 399, 3.7),
            new Tarjeta("Dead Land Survival", "av_dead-land-survival.jpg", 0, 4.5),
            new Tarjeta("Battle Arena", "av_battle-arena.jpg", 0, 4.7),
            new Tarjeta("Age of Tanks", "av_age-of-tanks.png", 0, 4.2),
            new Tarjeta("Build & Crush", "av_build-and-crush.png", 1399, 4.0),
            new Tarjeta("Hero 3", "av_hero-3.png", 399, 3.7),
            new Tarjeta("Ninja Parkour", "av_ninja-parkour.png", 0, 4.5),
            new Tarjeta("Space Wars", "av_space-wars.png", 0, 4.7),
        ],
        clasicos: [
            new Tarjeta("Pac-Man", "cl_pac-man.jpg", 450, 4.8),
            new Tarjeta("Bubble Pop", "cl_bubble-pop.jpg", 799, 4.3),
            new Tarjeta("Domino Battle", "cl_domino-battle.jpg", 1299, 3.2),
            new Tarjeta("Space Alien Invaders", "cl_space-alien-invaders.jpg", 0, 4.9),
            new Tarjeta("Piles of Mahjong", "cl_piles-of-mahjong.jpg", 0, 3.9),
            new Tarjeta("DuckPark.io", "cl_duckpark-io.png", 599, 4.8),
            new Tarjeta("Shell Shockers", "cl_shell-shockers.png", 799, 4.3),
            new Tarjeta("Snake.io", "cl_snake-io.png", 1299, 3.2),
            new Tarjeta("Taming.io", "cl_taming-io.png", 0, 4.9),
            new Tarjeta("Worm Hunt", "cl_worm-hunt.png", 0, 3.9),
        ],
        destacados: [
            new Tarjeta("Number Blocks", "number-blocks.jpg", 0, 4.5),
            new Tarjeta("Crazy Flips 3D", "ds_crazy-flips-3d.png", 599, 4.1),
            new Tarjeta("Doodle Road", "ds_doodle-road.png", 399, 4.6),
            new Tarjeta("Drift Boss", "ds_drift-boss.png", 0, 4.3),
            new Tarjeta("Jump Guys", "ds_jump-guys.png", 0, 4.8),
            new Tarjeta("Kour.io", "ds_kour-io.png", 799, 4.2),
            new Tarjeta("Lines", "ds_lines.png", 2999, 4.4),
            new Tarjeta("Smash Karts", "ds_smash-karts.png", 499, 4.7),
        ],
        futbol: [
            new Tarjeta("CGFC-24", "fb_cgfc-24.jpg", 1599, 4.5),
            new Tarjeta("Pongoal", "fb_pongoal.jpg", 0, 4.1),
            new Tarjeta("Penalty Shooters", "fb_penalty-shooters.jpg", 0, 4.3),
            new Tarjeta("Soccer Random", "fb_soccer-random.jpg", 630, 4.2),
            new Tarjeta("Foosball 3D", "fb_foosball-3d.jpg", 0, 4.6),
            new Tarjeta("International Super Animal Soccer", "fb_international-super-animal-soccer.png", 1599, 4.5),
            new Tarjeta("Mini Caps Soccer", "fb_mini-caps-soccer.png", 0, 4.1),
            new Tarjeta("Penalty Rivals", "fb_penalty-rivals.png", 0, 4.3),
            new Tarjeta("Pill Soccer", "fb_pill-soccer.png", 799, 4.2),
            new Tarjeta("Soccer Challenge", "fb_soccer-challenge.png", 0, 4.6),
        ]
    }

    // Para cada categoría, se obtiene su tipo y contenedor, y se crea el carrusel correspondiente
    document.querySelectorAll('.categoria').forEach(categoria => {
        const contenedorCarrusel = categoria.querySelector('.carrusel');
        const divTarjetas = document.createElement('div');
        divTarjetas.className = 'carrusel-contenido';
        
        const tipo = categoria.dataset.tipo;
        if (tarjetas[tipo]) {
            crearCarrusel(tarjetas[tipo], divTarjetas);
        }
        
        crearBotones(contenedorCarrusel, divTarjetas);
        contenedorCarrusel.appendChild(divTarjetas);
    });

    // Crea un carrusel de tarjetas en un contenedor dado
    function crearCarrusel(tarjetas, contenedor) {
        for (let t of tarjetas) {
            // --- CONTENEDOR PRINCIPAL (posee contenedor de imágen y contenedor de texto) ---
            const divTarjeta = document.createElement('div');
            divTarjeta.className = "tarjeta";
        
            // --- 1. CONTENEDOR DE IMAGEN ---
            const divImagen = document.createElement('div');
            divImagen.className = "contenedor-imagen-tarjeta";
            
            // Ímagen del juego
            const imgJuego = document.createElement('img');
            imgJuego.src = `img/tarjetas/${t.img}`;
            imgJuego.alt = t.nombre;
        
            // Botón de favoritos
            const btnFavoritos = document.createElement('button');
            btnFavoritos.className = "icono-corazon";
            const imgCorazon = document.createElement('img');
            imgCorazon.src = "img/iconos/tarjetas-juegos/corazon-blanco.png";
            imgCorazon.alt = "Agregar a favoritos";
            btnFavoritos.appendChild(imgCorazon);
            let agregadoAFav = false;
            btnFavoritos.addEventListener('click', () => {
                agregadoAFav = agregarAFavoritos(agregadoAFav, imgCorazon);
            })

            // Se crea el contenedor de puntaje
            const divPuntaje = document.createElement('div');
            divPuntaje.className = "puntaje-juego";
            const imgEstrella = document.createElement('img');
            imgEstrella.src = "img/iconos/tarjetas-juegos/estrella.png";
            imgEstrella.alt = "Estrella de puntaje de juego";
            const pPuntaje = document.createElement('p');
            pPuntaje.textContent = t.puntaje.toFixed(1); // Puntaje con un solo decimal
            divPuntaje.appendChild(imgEstrella);
            divPuntaje.appendChild(pPuntaje);
        
            // Se agregan los elementos al contenedor
            divImagen.appendChild(imgJuego);
            divImagen.appendChild(btnFavoritos);
            divImagen.appendChild(divPuntaje);
        
            // --- 2. CONTENEDOR DE TEXTO ---
            const divTexto = document.createElement('div');
            divTexto.className = "contenedor-texto-tarjeta";
            const divTextoInterno = document.createElement('div');
        
            // Nombre del juego
            const pNombreJuego = document.createElement('p');
            pNombreJuego.className = "tarjeta-nombre-juego";
            pNombreJuego.textContent = t.nombre;
        
            // Precio del juego
            const pPrecioJuego = document.createElement('p'); 
            pPrecioJuego.className = "tarjeta-precio-juego"; 
            if (t.precio == 0) {
                pPrecioJuego.textContent = "Gratis"
                pPrecioJuego.className = "juego-gratis"; // Se agrega la clase CSS '.juego-gratis'
            } else {
                pPrecioJuego.textContent = `$ ${t.precio.toFixed(2)}`
            }
      
            // Se agregan los elementos al contenedor de texto
            divTextoInterno.appendChild(pNombreJuego);
            divTextoInterno.appendChild(pPrecioJuego);
            divTexto.appendChild(divTextoInterno);

            // Botones de jugar/comprar
            if (t.precio == 0) {
                // Botón Jugar
                const btnJugar = document.createElement('button');
                btnJugar.className = "icono-play";
                const imgJugar = document.createElement('img');
                imgJugar.src = "img/iconos/tarjetas-juegos/jugar.png";
                imgJugar.alt = "Jugar";
                btnJugar.appendChild(imgJugar);
                divTexto.appendChild(btnJugar);
            } else {
                // Botón comprar
                const btnComprar = document.createElement('button');
                btnComprar.className = "icono-carrito";
                const imgComprar = document.createElement('img');
                imgComprar.src = "img/iconos/tarjetas-juegos/carrito-agregar.png";
                imgComprar.alt = "Comprar";
                btnComprar.appendChild(imgComprar);
                divTexto.appendChild(btnComprar);
                
                // Comportamiento
                let agregadoACarrito = false;
                btnComprar.addEventListener('click', () => {
                    agregadoACarrito = agregarACarrito(btnComprar, imgComprar, agregadoACarrito)
                });
            }
            
            // Se agregan todos los elementos a la tarjeta y la tarjeta al carrusel
            divTarjeta.appendChild(divImagen);
            divTarjeta.appendChild(divTexto);
            contenedor.appendChild(divTarjeta);
        }
    }

    // Agrega comportamiento al botón "Agregar a favoritos"
    function agregarAFavoritos(agregadoAFav, imgCorazon) {
        if (agregadoAFav) {
            imgCorazon.src = "img/iconos/tarjetas-juegos/corazon-blanco.png";
            return false;
        } else {
            imgCorazon.src = "img/iconos/tarjetas-juegos/corazon-rosa.png";
            return true;
        }
    }

    // Agrega comportamiento al botón "Agregar al carrito"
    function agregarACarrito(btnComprar, imgComprar, agregadoACarrito) {
        if (agregadoACarrito) {
            btnComprar.classList.remove('quitar');
            imgComprar.src = "img/iconos/tarjetas-juegos/carrito-agregar.png";
            return false;
        } else {
            btnComprar.classList.add('quitar');
            imgComprar.src = "img/iconos/tarjetas-juegos/carrito-quitar.png";
            return true;
        }
    }

    function crearBotones(contenedor, contenido) {
        const btnPrev = document.createElement('button');
        btnPrev.classList.add('flecha-carrusel-prev');
        btnPrev.textContent = '❮';

        const btnSig = document.createElement('button');
        btnSig.classList.add('flecha-carrusel-sig');
        btnSig.textContent = "❯";

        btnPrev.addEventListener('click', () => {
            deslizarCarrusel(contenido, -window.innerWidth / 2)
        });
        btnSig.addEventListener('click', () => { 
            deslizarCarrusel(contenido, window.innerWidth / 2)
        });
    
        contenedor.appendChild(btnPrev);
        contenedor.appendChild(btnSig);

        contenedor.addEventListener('mouseenter', () => {
            btnPrev.classList.add('visible');
            btnSig.classList.add('visible');
        });
        contenedor.addEventListener('mouseleave', () => {
            btnPrev.classList.remove('visible');
            btnSig.classList.remove('visible');
        });
    }

    function deslizarCarrusel(contenido, direccion) {
        contenido.scrollBy({
            left: direccion,
            behavior: 'smooth'
        });
    }
});

/*
----------------------------- Ejemplo de tarjeta generada en HTML -----------------------------
<div class="tarjeta">
    <div class="contenedor-imagen-tarjeta">
        <img src="img/cards/ac_chicken-defense.png" alt="Juego de acción">
        <button class="icono-corazon-favoritos">
            <img src="img/iconos/tarjetas-juegos/corazon-blanco.png"
                alt="Corazón para clickear los juegos favoritos">
        </button>
        <div class="puntaje-juego">
            <img src="img/iconos/tarjetas-juegos/estrella.png" alt="Estrella de puntaje juego">
            <p>0.0</p>
        </div>
    </div>
    <div class="contenedor-texto-tarjeta">
        <div>
            <p class="tarjeta-nombre-juego">Nombre del juego</p>
            <p class="tarjeta-precio-juego">$000.00</p>
        </div>
        <button class="iconos-tarjetas-play-carrito">
            <img src="img/iconos/tarjetas-juegos/icono-play.png" alt="Icono play">
        </button>
    </div>
</div> 
*/
