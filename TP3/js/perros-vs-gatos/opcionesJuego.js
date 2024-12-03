"use strict"

import {Juego} from './juego.js';
//Una vez que se carga el documento guardo todos los elementos del DOM necesarios para iniciar el juego
document.addEventListener('DOMContentLoaded', () => {
    //me traigo todos los elementos que voy a usar en la configuracion
    let btnJugar = document.getElementById('btn-jugar-especial');
    const previsualizacion = document.querySelector('.previsualizacion');
    const contenedorOpcTablero = document.querySelector('.contenedor-modos-tablero');
    const contenedorConfig = document.getElementById('contenedor-configuracion-juego');
    const canvas = document.getElementById('canvas');
    const contenedorbtnsJuego = document.querySelector('#contenedor-botones-canvas-juego');
    const cardResultado = document.getElementById('contenedor-card-ganador');
    const msgConfirmacion = document.getElementById('contenedor-mensaje-confirmacion');
    const contenedorPantallaJuego = document.querySelector('.contenedor-pantalla-juego');

    //si clickean el btn se activa la funcion que muestra la configuracion
    btnJugar.addEventListener('click', mostrarConfiguracionJuego);

    function mostrarConfiguracionJuego() {
        //le saco los estilos a la previsualizacion asi puedo ponerle el display:none que esta en la clase oculto
        previsualizacion.classList.remove('previsualizacion');
        previsualizacion.classList.add('oculto');
        mostrarConfigTablero()
    }
    //funcion para comenzar a mostrar la configuracion y modficiar el modo tablero
    function mostrarConfigTablero() {
        contenedorbtnsJuego.style.display = 'none';
        pantallaJuego.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(2, 87, 214, 0.5))';
        contenedorPantallaJuego.style.backgroundImage = "url(./img/pagina-juego/perros-vs-gatos/fondo-huellitas.png)";
        contenedorOpcTablero.classList.add('contenedor-modos-tablero-activo');
        contenedorOpcTablero.classList.remove('oculto');
        habilitarBotonesOpcTablero();
        mostrar2daParteConfig();

    }
    //funciona para mostrar y habilitar la segunda parte de la configuracion que es cuando se selecciona el tipo de ficha con la que se quiere jugar
    function mostrar2daParteConfig(){
        //si se aprieta alguna opcion de tablero, se sigue con la configuracion
        const txtTipoTablero = document.getElementById('tablero-elegido');
        const botonesTablero = contenedorOpcTablero.querySelectorAll('.btn-tipoTablero');
        botonesTablero.forEach(boton => {
            boton.addEventListener('click', () => {
                txtTipoTablero.textContent = cantFichasEnLinea + ' en linea';
                contenedorOpcTablero.classList.remove('contenedor-modos-tablero-activo');
                contenedorOpcTablero.classList.add('oculto');
                contenedorConfig.classList.remove('oculto');
                contenedorConfig.classList.add('contenedor-configuracion-juego-activo');
                gestionarDatosJuego();
                habilitarCambioFicha();
            });
        });
    }

    //funcion para guardar los datos seleccionados por el usuario e inicializar el juego o bien volver a configuracion inicial
    function gestionarDatosJuego() {

        let btnComenzarJuego = document.getElementById('btn-jugar-comenzar');

        btnComenzarJuego.addEventListener('click', () => {
            //oculto el contenedor de configuracion para mostrar el juego
            contenedorConfig.classList.remove('contenedor-configuracion-juego-activo');
            contenedorConfig.classList.add('oculto');
            inicializarJuego();
        })

        let btnVolverConfigTablero = document.getElementById('btn-volver-juego');

        btnVolverConfigTablero.addEventListener('click', () =>{
            contenedorConfig.classList.remove('contenedor-configuracion-juego-activo');
            contenedorConfig.classList.add('oculto');
            mostrarConfigTablero();
        });
        //si se aprieta el btn jugar se activa la funcion que crea el juego con los datos recolectados
    }


    let imgGato = './img/pagina-juego/perros-vs-gatos/ficha-gato-1.png';
    let imgPerro = './img/pagina-juego/perros-vs-gatos/ficha-perro-1.png';

    // funcion para habilitar el despliegue de las opciones de ficha
    function habilitarCambioFicha(){
        const btnCambarFichaGato = document.getElementById('btnModificarFichaGato');
        const btnCambarFichaPerro = document.getElementById('btnModificarFichaPerro');
        const contenedorOpcFichasPerro = document.getElementById('cajas-opc-fichas-perro');
        const contenedorOpcFichasGato = document.getElementById('cajas-opc-fichas-gato');
        const fichaprincipalGato = document.getElementById('fichaPrincipalGato');
        const fichaprincipalPerro = document.getElementById('fichaPrincipalPerro');

        btnCambarFichaGato.addEventListener('click', () => {
            contenedorOpcFichasGato.classList.toggle('objInvisible');
            contenedorOpcFichasPerro.classList.add('objInvisible');
        })

        btnCambarFichaPerro.addEventListener('click', () => {
            contenedorOpcFichasPerro.classList.toggle('objInvisible');
            contenedorOpcFichasGato.classList.add('objInvisible');
        })

        // La ficha principal toma la img de la ficha seleccionada para jugar 
        let fichasGato = document.querySelectorAll('.imgs-cat');
        fichasGato.forEach(btnFicha => {
            btnFicha.addEventListener('click', () => {
                imgGato = btnFicha.src;
                fichaprincipalGato.src = imgGato;
            });
        });

        let fichasPerro = document.querySelectorAll('.imgs-dog');
        fichasPerro.forEach(btnFicha => {
            btnFicha.addEventListener('click', () => {
                imgPerro = btnFicha.src;
                fichaprincipalPerro.src = imgPerro;
            });
        });
    };

    let cantFichasEnLinea = 4;
    //funcion que guarda que tipo de tablero se selecciono para jugar
    function habilitarBotonesOpcTablero() {
        document.getElementById('btn-opc1').addEventListener('click', () => {
            cantFichasEnLinea = 4;
        });

        document.getElementById('btn-opc2').addEventListener('click', () => {
            cantFichasEnLinea = 5;

        });

        document.getElementById('btn-opc3').addEventListener('click', () => {
            cantFichasEnLinea = 6;
        });

        document.getElementById('btn-opc4').addEventListener('click', () => {
            cantFichasEnLinea = 7;
        });
    }

//funcion para generar comportamineto dentro del juego con los btns de reset, home y pausar
//tambien para los btn dentro de la tarjeta de resultado 
    function habilitarOpcJuego(juego){
        const btnHome = document.getElementById('btn-home');
        const btnVolverConfig = document.getElementById('btn-card-volver-config');
        const btnReset = document.getElementById('btn-reset');
        const btnResetCard = document.getElementById('btn-card-reset');
        const btnNegarReset = document.getElementById('btn-confirmacion-no');
        const btnConfirmarReset = document.getElementById('btn-confirmacion-si');
        
        //btn de volver a confirguracion en el juego
        btnHome.addEventListener('click', ()=>{
            canvas.classList.add('oculto');
            contenedorbtnsJuego.style.display = 'none';
            msgConfirmacion.classList.add('oculto');
            mostrarConfigTablero();
            juego.pausar();
        });

        //btn reset del juevo, muestra 2 btn para confirmar positiva o negativamente
        btnReset.addEventListener('click', () =>{
            msgConfirmacion.classList.remove('oculto');
            juego.pausar();
        });

        btnNegarReset.addEventListener('click', ()=>{
            msgConfirmacion.classList.add('oculto');
            juego.reanudar();
        });

        btnConfirmarReset.addEventListener('click', ()=>{
            msgConfirmacion.classList.add('oculto');
            juego.inicializar();
        });

        //botones dentro de la card que dice el resultado, primero ocultan su contenedor y luego generan una accion
        btnResetCard.addEventListener('click', () =>{
            cardResultado.classList.remove('contenedor-card-ganador-activo')
            cardResultado.classList.add('oculto');
            juego.inicializar();
        })

        btnVolverConfig.addEventListener('click', () =>{
            cardResultado.classList.remove('contenedor-card-ganador-activo');
            cardResultado.classList.add('oculto');
            canvas.classList.add('oculto');
            mostrarConfigTablero();
            //deberia de pausar el juego o elimiar la instancia de juego asi no se sigure ejecutando
        })
    }

    //funcion para crear la instancia de juego y mostrar el canvas para poder empezar a jugar
    function inicializarJuego() {
        //creo la instancia juego con todos los datos necesarios y luego muestro el canvas
        const juego = new Juego('#canvas', cantFichasEnLinea, imgGato, imgPerro,cardResultado);
        canvas.classList.remove('oculto');
        contenedorbtnsJuego.style.display = 'flex';
        juego.jugar();
        habilitarOpcJuego(juego);
    }
});
