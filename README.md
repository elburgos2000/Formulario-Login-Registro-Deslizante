•	Formulario de Login/Registro Deslizante

Este es un proyecto front-end que implementa un formulario de autenticación dual (Inicio de Sesión y Registro) con un panel superpuesto (overlay) animado que se desliza para cambiar entre ambos formularios.

El diseño está basado en un efecto popular visto en Dribbble e Instagram, y sirve como una excelente práctica de manipulación del DOM y animaciones avanzadas con CSS.

•	Características
	Formulario Dual: Un solo contenedor que aloja tanto el formulario de "Iniciar Sesión" como el de "Registro".
	Panel Deslizante: Un panel superpuesto que se desplaza suavemente de derecha a izquierda al cambiar de modo.
	Animación Limpia: La animación se logra puramente con transformaciones y transiciones de CSS, ofreciendo un gran rendimiento.
	Manejo de Eventos: JavaScript simple y ligero que escucha los clics para añadir o quitar la clase que activa la animación.

•	Tecnologías Utilizadas

	HTML5: Para la estructura semántica de los formularios.
	CSS3: Para todo el diseño y las animaciones.
	Flexbox: Para centrar y alinear el contenido.
	Posicionamiento Absoluto: Para apilar los formularios y el panel superpuesto.
	transform: translateX(): Para mover los paneles horizontalmente.
	transition: Para crear el efecto de animación suave.
	JavaScript (ES6+):
	addEventListener: Para manejar los clics en los botones.
	classList.add()/ classList.remove(): Para alternar la clase que controla el estado de la animación.


•	¿Cómo Funciona?

La lógica principal es sorprendentemente simple:

1.	Ambos formularios (Login y Registro) están apilados uno sobre otro usando position: absolute. El formulario de Login tiene un z-index mayor para ser visible por defecto.
2.	El panel de "Overlay" (el degradado azul) se posiciona a la derecha, cubriendo la mitad del contenedor.
3.	Al hacer clic en "Registrarse", JavaScript añade una clase (ej. .right-panel-active) al contenedor principal.
4.	El CSS reacciona a esta nueva clase:
•	Mueve el panel de Login al 100% hacia la derecha (transform: translateX(100%)).
•	Mueve el panel de Registro a su posición (también con transform) y aumenta su z-index para traerlo al frente.
•	Desliza el panel "Overlay" hacia la izquierda (transform: translateX(-100%)) para cubrir el panel de Login y mostrar el de Registro.
5.	Al hacer clic en "Iniciar Sesión", JavaScript simplemente quita la clase .right-panel-active, y todas las propiedades CSS vuelven a su estado original gracias al transition.

•	Cómo usarlo: Simplemente clona este repositorio y abre el archivo index.html en tu navegador.
