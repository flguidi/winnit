# Interfaces de usuario e interacción
## Integrantes del grupo
- Guidi, Franco
- Simos, Julieta
- Gramuglia Eliana

## Ejercicio Entregable N2: Desarrollo de interfaz de usuario.
El presente trabajo fue desarrollado en el marco de la materia "Interfaces de usuario e interacción" (Facultad de Ciencias Exactas, UNICEN, Tandil). El mismo propone desarrollar en HTML, CSS y JavaScript el sitio realizado en el Ejercicio Entregable N1.

La plataforma solicitada incluye las siguientes 3 páginas:
1. Home con listado de juegos (<index.html>)
2. Página de juego en modo ejecución usando “4 en línea” como juego a mostrar (<juego.html>)
3. Página de registración e inicio de sesión a la página (<login.html>).

A continuación, se enumeran algunas de las funcionalidades que posee el sitio:
### 1. Elementos comunes a todas las páginas
#### Header
- Logos animados al hacer hover.
- Barra de búsqueda con input de texto.
- Menú hamburguesa que, al hacer clic, despliega un menú de categorías en el borde izquierdo. Cada elemento del menú tiene una animación de desplazamiento horizontal.
- Avatar de usuario que, al hacer clic, despliega un menú de usuario en el borde derecho.
- Diseño responsive mobile first.

#### Footer
- Diseño con estilo Fat Footer.
- Posee un menú con enlaces relacionados a la página, íconos de redes sociales y un formulario para suscribirse al sitio.
- En la versión para escritorio, el menú muestra todos los enlaces en distintas columnas, mientras que en la versión móvil, se debe hacer clic en cada título para poder desplegar las opciones.
- Los íconos de redes sociales tienen animación al hacer hover.
- Diseño responsive mobile first.

### 2. Inicio
La página de inicio presenta una imagen hero, carruseles de juegos ordenados por categoría y un banner. Esta página está diseñada siguiendo los principios de mobile first.

#### Imagen hero
- Se ubica en la parte superior de la página y muestra los juegos descatados.
- Cambia la imagen y datos del juego en intervalos regulares de tiempo.
- Al cambiar de imagen se producen las siguientes animaciones: Desenfoque de imagen, desplazamiento lateral en título de juego y transparencia en categoría de juego.
- Posee flechas de navegación que se hacen visibles cuando se coloca el cursor sobre la imagen. Además, éstas se descatan al hacerles hover.
- Cada imagen de fondo se desliza verticalmente.

#### Carruseles
- Carruseles funcionales de tarjetas (cards) de juegos. Cada tarjeta posee la imagen, titulo, precio y puntaje del juego. Además, tiene un botón para agregar a favoritos (corazón rojo) y otro para añadir al carrito de compras o jugar, dependiendo de si el juego es pago o gratuito.
- La navegación en el carrusel se realiza mediante flechas que aparecen al hacer hover.

#### Banner
- Se sitúa en la parte inferior de la página, justo por encima del footer.
- Incluye una imagen que se desliza verticalmente.

### 3. Login
- Se presenta un formulario que se adapta a mobile y desktop con 2 opciones:  un fomulario de ingreso y otro de registro.
- Formulario de inicio de sesión: los usuarios registrados pueden ingresar con su correo electrónico y contraseña válidos.
- Formulario de registro: los usuarios nuevos pueden crearse una nueva cuenta con el ingreso de su nombre, apellido, fecha de nacimiento, email, contraseña (la cual debe confirmarse), capcha y la aceptación de los términos y condiciones del sitio.

### 4. Página de juego
- En la parte superior tiene un mapa del sitio (breadcrumbs) que permite visualizar dónde está actualmente el usuario.
- A continuación se encuentra la sección de juego, la cual contiene el juego en sí, y las opciones de ir al inicio, agregar a favoritos, visualizar las instrucciones del juego y expandir la pantalla a fullscreen.
- Se presenta una descripción detallada del juego, incluyendo portada, nombre, valoración, opciones para compartir y videos recomendados 
- Por ultimo tiene una sección de comentarios, donde se puede subir un comentario propio o visualizar los comentarios de otros usuarios.
