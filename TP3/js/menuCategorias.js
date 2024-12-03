"use strict";

document.addEventListener('DOMContentLoaded', () => {
    class Categoria {
        constructor(descripcion, img) {
            this.descripcion = descripcion;
            this.img = img;
        }
    }

    // Cada categoría es un JSON con una imágen y una descripción
    const categorias = [
        new Categoria("Inicio", "inicio.png"),
        new Categoria("Recientes", "recientes.png"),
        new Categoria("Favoritos", "favoritos.png"),
        new Categoria("Nuevos", "nuevos.png"),
        new Categoria("Trending", "trending.png"),
        new Categoria("Random", "random.png"),
        new Categoria("Acción", "accion.png"),
        new Categoria("Autos", "autos.png"),
        new Categoria("Aventura", "aventura.png"),
        new Categoria("Básquet", "basquet.png"),
        new Categoria("Billar", "billar.png"),
        new Categoria("Cartas", "cartas.png"),
        new Categoria("Clásicos", "clasicos.png"),
        new Categoria("Defensa de torre", "defensa-torre.png"),
        new Categoria("Disparos", "disparos.png"),
        new Categoria("Escape", "escape.png"),
        new Categoria("Fútbol", "futbol.png"),
        new Categoria("Flash", "flash.png"),
        new Categoria("Lógica", "logica.png"),
        new Categoria("Minecraft", "minecraft.png"),
        new Categoria("Motos", "motos.png"),
        new Categoria("Multijugador", "multijugador.png"),
        new Categoria("Puzzle", "puzzle.png"),
        new Categoria("Terror", "terror.png"),
        new Categoria("Etiquetas", "etiquetas.png")
    ];

    // Creación de lista de categorías
    const listaCategorias = document.querySelector("#lista-categorias");
    for (let c of categorias) {
        // Se crean elementos HTML y establecen atributos
        const li = document.createElement('li');
        
        const a = document.createElement('a');
        a.href = '#';
        
        const img = document.createElement('img');
        img.src = `img/menu-categorias/${c.img}`;
        
        const span = document.createElement('span');
        span.textContent = c.descripcion;

        // Se agregan al documento
        a.appendChild(img);
        a.appendChild(span);
        li.appendChild(a);
        listaCategorias.appendChild(li);

        // Se agrega comportamiento al hacer hover en cada ítem
        a.addEventListener('mouseenter', () => {
            a.classList.add('seleccionado');
            span.classList.add('seleccionado');
        });
        
        a.addEventListener('mouseleave', () => {
            a.classList.remove('seleccionado');
            span.classList.remove('seleccionado');
        });
    }

    // Menú hamburguesa
    const iconoMenu = document.querySelector('#menu-hamburguesa');
    const menuCategorias = document.querySelector('.contenedor-menu-categorias');

    iconoMenu.addEventListener('click', () => {
        menuCategorias.classList.toggle('abierto');
    });
});
