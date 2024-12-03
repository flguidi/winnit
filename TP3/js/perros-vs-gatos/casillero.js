"use strict";

/**
 * Esta clase representa un casillero del tablero de juego. El mismo tiene un par de coordenadas x-y.
 */
export class Casillero {
    constructor(x, y, tamanio, fila, columna) {
        this.x = Math.round(x); // x = 3.54 px -> 4px
        this.y = Math.round(y);
        this.tamanio = Math.round(tamanio);
        this.fila = fila;
        this.columna = columna;
        this.ficha = null;
        this.resaltado = false;
        
        this.img = new Image();
        this.img.src = './img/pagina-juego/perros-vs-gatos/casillero-madera-clara.png';
        this.imgCargada = false;
        this.img.onload = () => {
            this.imgCargada = true;
        };
    }

    /**
     * Dibuja el casillero teniendo en cuenta su estado (resaltado o no resaltado).
     */
    dibujar(ctx) {
        // Si el casillero está resaltado, se oscurece el fondo del mismo
        if (this.resaltado) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(
                Math.round(this.x), 
                Math.round(this.y), 
                Math.round(this.tamanio), 
                Math.round(this.tamanio)
            );
        }

        // Imagen del casillero
        ctx.drawImage(this.img, this.x, this.y, this.tamanio, this.tamanio);
    }

    /**
     * Coloca una ficha en el casillero. Retorna true si se pudo colocar, o false si ya había una ficha.
     */
    colocarFicha(ficha) {
        if (!this.tieneFicha()) { 
            this.ficha = ficha;
            return true;
        }
        return false;
    }

    /**
     * Verifica si hay una ficha en el casillero.
     */
    tieneFicha() { 
        return this.ficha != null;
    }
}
