"use strict";

/**
 * Esta clase representa una ficha del juego con su posición x-y, radio, velocidad x-y e imagen.
 */
export class Ficha {
    constructor(x, y, radio, equipo, rutaImagen) {
        // Tamaño y posición
        this.x = Math.round(x); // Valor X del centro de la ficha
        this.y = Math.round(y); // Valor Y del centro de la ficha
        this.xOriginal = this.x;
        this.yOriginal = this.y;
        this.radio = Math.round(radio);
        this.limiteInferior;

        // Movimiento
        this.vx = 0; // Velocidad horizontal
        this.vy = 0; // Velocidad vertical
        this.friccion = 0.2; // Fricción que disminuye fuerza de rebote
        this.gravedad = 0.5; // Gravedad que afecta caída

        // Estados
        this.seleccionada = false;
        this.preparada = false;
        this.enCaida = false;
        this.colocada = false;
        this.resaltada = false;
        this.equipo = equipo;

        // Carga de imagen
        this.img = new Image();
        this.img.src = rutaImagen;
        this.imgCargada = false;
        this.img.onload = () => {
            this.imgCargada = true;
        };
    }

    /**
     * Actualiza la posición de la ficha simulando la gravedad y el rebote.
     */
    actualizar() {
        if (this.preparada && this.enCaida) {
            this.vy += this.gravedad;
            this.y += this.vy;
            
            if (this.y > this.limiteInferior) {
                this.y = this.limiteInferior;
                this.vy *= -1;
                this.vy *= this.friccion;
            }
        }
    }

    /**
     * Dibuja la ficha teniendo en cuenta: 1) si pertenece al jugador oponente; 2) si pertenece al conjunto ganador.
     */
    dibujar(ctx, equipoJugadorActual) {
        if (this.imgCargada) {
            // Imagen de ficha
            ctx.drawImage(this.img, this.x - this.radio, this.y - this.radio, this.radio * 2, this.radio * 2);

            // Se oscurecen las fichas del oponente
            if (this.equipo != equipoJugadorActual && !this.colocada) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
                ctx.fill();
                ctx.closePath();
            }

            // Se resaltan las fichas ganadoras
            if (this.resaltada) {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.fill();
                ctx.closePath();
            }
        }
    }

    /**
     * Verifica si la ficha está siendo seleccionada (arrastrada) por el mouse.
     */
    seleccionar(coordenadasMouse) {
        const distX = coordenadasMouse.x - (this.x);
        const distY = coordenadasMouse.y - (this.y);
        const distancia = Math.sqrt(distX * distX + distY * distY);
        
        // Si la distancia es menor o igual al radio, el mouse está sobre la ficha
        return distancia <= this.radio && !this.colocada;
    }
}
