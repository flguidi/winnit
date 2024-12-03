export class CasilleroLanzamiento {
    constructor(x, y, tamanio, columna) {
        this.x = Math.round(x);
        this.y = Math.round(y);
        this.xOriginal = this.x;
        this.yOriginal = this.y;
        this.tamanio = Math.round(tamanio);
        this.columna = columna;

        this.img = new Image();
        this.img.src = './img/pagina-juego/perros-vs-gatos/flecha-lanzamiento.png';
        this.anchoImg = 30;
        this.altoImg = 30;
        this.imgCargada = false;
        this.img.onload = () => {
            this.imgCargada = true;
        };
        this.visible = false;
        this.activado = false;

        this.contadorMovimiento = 0;
        this.framesCambioDireccion = 15; // Cantidad de frames antes de un cambio de dirección
        this.vy = .5; // Velocidad de movimiento en Y de la imagen
    }

    /**
     * Actualiza el casillero de lanzamiento, movimiendo verticalmente la flecha cuando éste está activo.
     */
    actualizar() {
        if (this.activado) {
            this.contadorMovimiento++;
            if (this.contadorMovimiento < this.framesCambioDireccion) {
                this.y += this.vy;
            } else {
                this.contadorMovimiento = 0;
                this.vy *= -1; // Se invierte la dirección
            }
        } else {
            this.x = this.xOriginal;
            this.y = this.yOriginal;
        }
    }

    /**
     * Muestra una imagen de flecha cuando es seleccionada una ficha.
     */
    dibujar(ctx) {
        if (this.imgCargada && this.visible) {
            ctx.save();
            if (!this.activado) {
                ctx.globalAlpha = 0.5;
            }
            ctx.drawImage(this.img, this.x, this.y, this.tamanio, this.tamanio);
            ctx.restore();
        }
    }

    /**
     * Verifica si una ficha puede ser soltada (cuando el centro de ésta se ubica dentro del casillero de lanzamiento)
     */
    sePuedeSoltarFicha(ficha) {
        const enRangoHorizontal = ficha.x >= this.x && ficha.x <= this.x + this.tamanio;
        const enRangoVertical = ficha.y >= this.y && ficha.y <= this.y + this.tamanio;
        return enRangoHorizontal && enRangoVertical;
    }
}