# Interfaces de usuario e interacción
## Integrantes del grupo
- Guidi, Franco
- Simos, Julieta
- Gramuglia Eliana

## Ejercicio Entregable N3: Desarrollo del juego x en linea
El presente trabajo fue desarrollado en el marco de la materia "Interfaces de usuario e interacción" (Facultad de Ciencias Exactas, UNICEN, Tandil). El mismo propone integrar en la página (<juego.html>) el juego x en linea siguiendo los principios de nielsen y reglas de UX para una mejor experiencia de usuario. 

La plataforma solicitada incluye las siguientes 3 páginas:
1. Home con listado de juegos (<index.html>)
2. Página de juego en modo ejecución usando “4 en línea” como juego a mostrar (<juego.html>)
3. Página de registración e inicio de sesión a la página (<login.html>).

A continuación, se enumeran algunas de las correcciones/mejoras implementadas desde la anterior entrega:
1. Se cambiaron las rutas de img fallidas
2. Se agregó hover animado en el botón-suscribirse ubicado en el footer
3. Se agregó hover animador en el btn-jugar ubicado en la pag del juego
4. Se agregó una img de flecha en el botón-jugar del hero ubicado en el home
5. Se agregó línea intermedia entre el formulario y los atajos para ingresar con redes sociales
6. Se quitó el footer y cambio el header de la pag de registro
7. Se utilizó el mismo icono de carrito en el header y las tarjetas de los juegos
8. Se agregó otra animación de registro exitoso en el formulario de registro
9. Se agregó opacidad 100% al fondo de carga de la página del home y se quitó la opción de scroll en ese momento

## Detalles de la entrega n°3
- Se implementó el juego X en línea para poder ejecutarse dentro de la pantalla juego ubicada en la página del juego
- Se colocarán a continuación las reglas implementadas separadas por secciones del juego:

### Configuración del tablero
- **Estética y diseño minimalista:** para mejor comprensión y elección del modo tablero

### Configuración de las fichas para la partida
- **Estética y diseño minimalista:** para mejor comprensión de las opciones disponibles
- **Control y Libertad del usuario:** para que el usuario pueda cambiar de elección en cualquier momento, ya sea volviendo atrás para seleccionar otro tipo de tablero, o seleccionar otro tipo de ficha.
- **Relación entre el sistema y el mundo real:** se utilizó el icono de flecha para representar la idea de volver para atrás en el proceso de configuración
- **Reconocimiento antes que Recuerdo:** en la parte superior se informa el tipo de tablero seleccionado anteriormente para que el usuario no tenga que recordar cual eligió. Además se cambia la imagen de la ficha principal para demostrar de manera visual que ficha será la del equipo.

## Pantalla de juego en modo ejecución 
- **Estética y diseño minimalista:** se presentan en pantalla únicamente los elementos necesarios para jugar y dar libertad de acciones al usuario
- **Relación entre el sistema y el mundo real:** los btn de opciones tienen iconos que representan su accionar → reset, pausa/reproducir, home
- **Control y Libertad del usuario:** los btn permiten al usuario realizar distintas acciones en el juego
    - **reset →** permite resetear la partida. Tiene un cartel para confirmar el reset, esto para ***Prevención de errores***, por si el usuario lo clickeo sin querer.
    - **pausa →** permite pausar el temporizador del juego para darle más libertad al usuario de jugar cuando él pueda o quiera
    - **home →** permite volver a la configuración inicial del juego, por si se quiere cambiar el modo y las fichas del juego
- **Visibilidad del estado del sistema:** Se presenta un temporizador en la parte superior con una cuenta regresiva que representa el final del turno del jugador, adicionalmente se resaltan las fichas del jugador que tiene el turno. Se resaltan las fichas que hicieron la línea ganadora y salta en pantalla un cartel mostrando textual y visualmente el resultado del juego _ _(equipo ganador o empate)_ _
- **Prevención de errores:** se resalta el casillero disponible donde podrá caer la ficha para que el usuario sepa el posible accionar. Además se muestra una flecha animada en el casillero disponible para soltar la ficha.
- **Reconocimiento antes que Recuerdo:** se resaltan las fichas del jugador en turno para que sepa visualmente quien juega. Se resaltan las fichas que hicieron la línea ganadora
- **Ayuda y documentación:** se presentan resaltados visuales en las fichas para informar de que jugador es el turno, flechas resaltadas y con movimiento para informar en que columnas se colocará la ficha. Resaltado del casillero en el que caerá la ficha para ayudar a pensar jugadas al usuario. Documentación siempre disponible al clickear sobre el icono de control del navegador del juego, donde se especifican las reglas del juego.


