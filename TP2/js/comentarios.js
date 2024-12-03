"use strict";

const contenedorComentarioPersonal = document.querySelector('#contenedor-historial-comentarios');

// Función para renderizar el comentario
function renderizarComentario(rutaImagen, nombreUsuario, tiempoComentarioRealizado, puntaje, comentario) {
    // Crear el contenedor principal
    const contenedorComentario = document.createElement('div');
    contenedorComentario.id = "contenedor-comentario-realizado";

    // Crear caja de avatar y estrellas
    const cajaAvatarContenedorEstrellas = document.createElement('div');
    cajaAvatarContenedorEstrellas.id = "caja-avatar-contenedor-estrellas";

    // Crear caja de avatar
    const cajaAvatar = document.createElement('div');
    cajaAvatar.id = "caja-avatar";

    // Crear imagen de avatar
    const avatarImg = document.createElement('img');
    avatarImg.src = rutaImagen;
    avatarImg.alt = "Avatar de usuario";
    avatarImg.className = "avatar";

    // Crear contenedor de texto del avatar
    const textoAvatar = document.createElement('div');

    // Crear el nombre del comentarista
    const nombreComentario = document.createElement('p');
    nombreComentario.textContent = nombreUsuario;

    // Crear el tiempo del comentario
    const tiempoComentario = document.createElement('p');
    tiempoComentario.id = "tiempo-comentario";
    tiempoComentario.textContent = tiempoComentarioRealizado;

    // Agregar el texto al contenedor de texto
    textoAvatar.appendChild(nombreComentario);
    textoAvatar.appendChild(tiempoComentario);

    // Agregar imagen y texto a la caja de avatar
    cajaAvatar.appendChild(avatarImg);
    cajaAvatar.appendChild(textoAvatar);

    // Crear contenedor de iconos de historial de comentarios
    const contenedorIconos = document.createElement('div');
    contenedorIconos.id = "contenedor-iconos-historial-comentarios";

    // Crear iconos
    const iconos = [
        { src: "img/iconos/comentarios-juego/icono-compartir.png", alt: "Icono para compartir" },
        { src: "img/iconos/comentarios-juego/icono-bandera.png", alt: "Icono bandera" },
        { src: "img/iconos/comentarios-juego/icono-corazon.png", alt: "Icono corazón para poner me gusta al comentario" }
    ];

    iconos.forEach(icono => {
        const iconoDiv = document.createElement('div');
        iconoDiv.className = "icono-con-linea";

        const iconoImg = document.createElement('img');
        iconoImg.src = icono.src;
        iconoImg.alt = icono.alt;

        iconoDiv.appendChild(iconoImg);
        contenedorIconos.appendChild(iconoDiv);
    });

    // Agregar la caja de avatar y el contenedor de iconos al contenedor principal
    cajaAvatarContenedorEstrellas.appendChild(cajaAvatar);
    cajaAvatarContenedorEstrellas.appendChild(contenedorIconos);
    contenedorComentario.appendChild(cajaAvatarContenedorEstrellas);

    // Crear contenedor de estrellas puntuadas
    const contenedorEstrellas = document.createElement('div');
    contenedorEstrellas.id = "contenedor-estrellas-puntuadas";

    // Crear estrellas
    for (let i = 0; i < puntaje; i++) {
        const estrellaAmarilla = document.createElement('img');
        estrellaAmarilla.src = "img/iconos/comentarios-juego/estrella-amarilla.png";
        estrellaAmarilla.alt = "Icono estrella";
        estrellaAmarilla.className = "estrella-puntuada";
        contenedorEstrellas.appendChild(estrellaAmarilla);
    }

    for (let i = 0; i < 5 - puntaje; i++) {
        const estrellaBlanca = document.createElement('img');
        estrellaBlanca.src = "img/iconos/comentarios-juego/estrella-blanca.png";
        estrellaBlanca.alt = "Icono estrella";
        estrellaBlanca.className = "estrella-puntuada";
        contenedorEstrellas.appendChild(estrellaBlanca);
    }

    // Agregar el contenedor de estrellas al contenedor principal
    contenedorComentario.appendChild(contenedorEstrellas);

    // Crear el comentario histórico
    const comentarioHistorico = document.createElement('div');
    const comentarioTexto = document.createElement('p');
    comentarioTexto.id = "comentario-historico";
    comentarioTexto.textContent = comentario;
    comentarioHistorico.appendChild(comentarioTexto);
    
    // Agregar el comentario histórico al contenedor principal
    contenedorComentario.appendChild(comentarioHistorico);

    // Crear caja para el botón de responder
    const cajaBotonResponder = document.createElement('div');
    cajaBotonResponder.id = "caja-boton-responder";

    // Crear botón
    const botonResponder = document.createElement('button');
    botonResponder.className = "btn-comentar-responder";
    botonResponder.textContent = "Responder";

    // Agregar el botón a la caja de botón responder
    cajaBotonResponder.appendChild(botonResponder);
    
    // Agregar la caja de botón responder al contenedor principal
    contenedorComentario.appendChild(cajaBotonResponder);

    // Agregar el botón "Ver más comentarios"
    const botonVerMas = document.createElement('button'); 
    botonVerMas.className = "btn-ver-mas-comentarios"; 
    botonVerMas.textContent = "Ver respuestas"; 
    
    // Crear un elemento de imagen para el icono
    const iconoFlecha = document.createElement('img');
    iconoFlecha.src = 'img/iconos/tarjetas-juegos/jugar.png'; // Ruta a tu imagen
    iconoFlecha.alt = 'Icono flecha'; // Texto alternativo
    iconoFlecha.className = 'icono-flecha-abajo'; // Clase para aplicar estilos si es necesario

    // Agregar la imagen al botón
    botonVerMas.appendChild(iconoFlecha);

    // Agregar el botón al contenedor principal
    contenedorComentario.appendChild(botonVerMas);

    // Agregar el contenedor principal al DOM
    contenedorComentarioPersonal.appendChild(contenedorComentario); 
}


// Llamar a la función para renderizar el comentario
    renderizarComentario(
        'img/iconos/comentarios-juego/avatar-perro-shitzu.png',
        'Eliana',
        'Hace 5 días',
        5,
        'Es una adicción, ¡no puedo parar de jugar! Aguanten los perritos<3'
    );

    renderizarComentario(
        'img/iconos/comentarios-juego/avatar-gatito.png',
        'Julieta',
        'Hace 6 días',
        4,
        'El juego está buenísimo!!! Me encantan los michis :3'
    );

    renderizarComentario(
        'img/iconos/comentarios-juego/avatar-perro-galgo.png',
        'Franco',
        'Hace un mes',
        4,
        'Que juegazooooo!!! Me encanta!!! Soy team perritos'
    );


// Función para agregar el botón "Más comentarios"
function agregarBotonMasComentarios() {
    const botonMasComentarios = document.createElement('button');
    botonMasComentarios.textContent = "Más comentarios";
    botonMasComentarios.className = "btn-mas-comentarios";

    // Agregar el botón una sola vez, al final de los comentarios
    contenedorComentarioPersonal.appendChild(botonMasComentarios);
}

// Agregar el botón "Más comentarios" al final de todos los comentarios
agregarBotonMasComentarios();


//Selecciona todas las estrellas
const estrellas = document.querySelectorAll('.estrella');

for (let i = 0; i < estrellas.length; i++) {
    //Añade un evento de escucha a cada estrella
    estrellas[i].addEventListener('click', function() {
        for (let j = 0; j < estrellas.length; j++) {
            if (j <= i) {
                //Cambia las estrellas anteriores a amarillas
                estrellas[j].src = "img/iconos/comentarios-juego/estrella-amarilla.png";
            } else {
                //Deja las estrellas posteriores a blanca
                estrellas[j].src = "img/iconos/comentarios-juego/estrella-blanca.png";
            }
        }
    });
}


/* ----------------------------- Ejemplo de tarjeta generada en HTML -----------------------------

 <div id="contenedor-comentario-realizado">
    <div id="caja-avatar-contenedor-estrellas">
        <div id="caja-avatar">
            <img src="img/iconos/comentarios-juego/avatar-gato.png" alt="Avatar con imágen de gato" class="avatar">
            <div>
                <p>Lalalalal</p>
                <p id="tiempo-comentario">Hace un mes</p>
            </div>
        </div>
        <div id="contenedor-iconos-historial-comentarios">
            <div class="icono-con-linea">
                <img src="img/iconos/comentarios-juego/icono-compartir.png" alt="Icono para compartir">
            </div>
            <div class="icono-con-linea">
                <img src="img/iconos/comentarios-juego/icono-bandera.png" alt="Icono bandera">
            </div>
            <div class="icono-con-linea">
                <img src="img/iconos/comentarios-juego/icono-corazon.png" alt="Icono corazón para poner me gusta al comentario">
            </div>
        </div>
    </div>
    <div id="contenedor-estrellas-puntuadas">
        <img src="img/iconos/comentarios-juego/estrella-amarilla.png" alt="Icono estrella" class="estrella-puntuada">
        <img src="img/iconos/comentarios-juego/estrella-amarilla.png" alt="Icono estrella" class="estrella-puntuada">
        <img src="img/iconos/comentarios-juego/estrella-amarilla.png" alt="Icono estrella" class="estrella-puntuada">
        <img src="img/iconos/comentarios-juego/estrella-blanca.png" alt="Icono estrella" class="estrella-puntuada">
        <img src="img/iconos/comentarios-juego/estrella-blanca.png" alt="Icono estrella" class="estrella-puntuada">
    </div>
    <div>
        <p id="comentario-historico">Es una adicción, ¡no puedo parar de jugar! Aguanten los perritos<3</p>
    </div>
    <div id="caja-boton-responder">
        <button class="btn-comentar-responder">Responder</button>
    </div>
</div>
*/