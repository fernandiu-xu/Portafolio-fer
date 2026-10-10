---
layout: default
title: Videojuego
nav_order: 7
permalink: /videojuego/
---

<p class="fer-page-label">Proyecto 05 · Programación web</p>

# Robot recolector

<p class="fer-page-intro">Un videojuego sencillo en HTML, CSS y JavaScript, con un robot que recoge estrellas y esquiva obstáculos.</p>

<div class="fer-project-meta"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Canvas</span><span>GitHub Pages</span></div>

## ¿De qué trata?

El personaje es un pequeño robot rosa que se mueve de lado a lado para recoger las estrellas que caen desde arriba. La misión es conseguir **12 estrellas** antes de perder las **3 vidas**. Los bloques morados son obstáculos: si uno toca al robot, pierde una vida. Dejar pasar una estrella no quita vidas.

Elegí una temática de robótica para relacionar el juego con mis otros proyectos del portafolio. El estilo utiliza rosa y amarillo pastel, con figuras sencillas para distinguir al personaje, las estrellas y los obstáculos.

## Cómo jugar

1. Presiona **Jugar**.
2. Mueve al robot con las flechas **← y →**, o con las teclas **A y D**. En el celular, mantén presionados los botones de flecha.
3. Recoge las estrellas amarillas y esquiva los bloques morados.
4. Puedes pausar con **P** o con el botón **Pausar**. Al terminar, presiona **Volver a jugar** para comenzar otra partida.

Si usas el teclado, primero haz clic dentro del juego. El récord guarda la mayor cantidad de estrellas recogidas en este navegador cuando el almacenamiento está disponible.

## Juega aquí

<style>
.fer-game-frame { display:block; width:100%; max-width:690px; height:730px; margin:1.5rem auto; border:1px solid #e8b6c8; border-radius:18px; background:#fff7fa; }
@media(max-width:600px){.fer-game-frame{height:640px;}}
@media(max-width:400px){.fer-game-frame{height:570px;}}
</style>

<iframe class="fer-game-frame" src="{{ '/assets/videojuego/index.html' | relative_url }}" title="Robot recolector: videojuego interactivo" loading="lazy"></iframe>

[ Abrir el juego en una página completa ↗ ]({{ '/assets/videojuego/index.html' | relative_url }})

## Cómo se construyó el juego

El proyecto se dividió en tres archivos. Esto permite cambiar la presentación y las reglas sin tener todo el código en una sola página.

| Archivo | Función |
| :--- | :--- |
| `index.html` | Contiene el título, el marcador, los botones y el área donde se dibuja el juego. |
| `style.css` | Define los colores, tamaños y distribución de la pantalla, y adapta los controles al celular. |
| `game.js` | Controla el movimiento, la caída de objetos, las colisiones, las vidas y los estados de la partida. |

### HTML: la pantalla del juego

La etiqueta `canvas` funciona como el área donde JavaScript dibuja al robot, las estrellas y los obstáculos. Los botones y el marcador se colocan fuera de esa área para que sean fáciles de leer y utilizar.

```html
<canvas id="board" width="600" height="390" tabindex="0"></canvas>
<button id="start">Jugar</button>
```

### CSS: colores y adaptación

CSS da al juego su estilo rosa y amarillo pastel. El canvas conserva sus proporciones al cambiar el ancho de la pantalla. Los botones tienen un tamaño cómodo para usarlos con el dedo.

```css
canvas {
  display: block;
  width: 100%;
  height: auto;
}
```

### JavaScript: movimiento y reglas

El programa registra si se está presionando izquierda o derecha y actualiza la posición del robot. También limita su movimiento para que no salga de la pantalla.

```js
robot.x += ((keys.right ? 1 : 0) - (keys.left ? 1 : 0)) * 300 * dt;
robot.x = Math.max(0, Math.min(WIDTH - robot.w, robot.x));
```

La variable `dt` representa el tiempo transcurrido entre cuadros. Así el movimiento depende del tiempo y no solamente de la velocidad de la computadora.

Los objetos aparecen en posiciones aleatorias y bajan a una velocidad moderada. Cuando uno toca al robot, el programa revisa si es una estrella o un obstáculo: la estrella suma un punto y el bloque resta una vida.

```js
if (item.star) {
  score++;
} else {
  lives--;
}
```

Con `requestAnimationFrame` se actualiza y dibuja la escena continuamente. La partida puede estar lista para empezar, en juego, pausada o terminada. Esa separación permite detener el movimiento durante la pausa y reiniciar los puntos y las vidas al comenzar otra partida.

## Pruebas y ajustes

Se comprobaron los límites del movimiento, la recolección de estrellas, la pérdida de vidas, la victoria al llegar a 12 puntos y la derrota al quedarse sin vidas. También se revisaron la pausa, el reinicio y los botones táctiles.

Se añadió una pausa automática cuando el juego pierde el foco o la pestaña deja de estar visible, para que no siga avanzando mientras se está usando otra parte de la página. Además, el movimiento limita los saltos grandes de tiempo para que el robot no cambie de posición de golpe.

## Publicación en GitHub Pages

Los archivos del juego se encuentran en la carpeta `assets/videojuego/` de [mi repositorio en GitHub](https://github.com/fernandiu-xu/Portafolio-fer/tree/main/assets/videojuego). GitHub Pages publica estos archivos y esta pestaña los muestra dentro del portafolio, por lo que se puede jugar directamente aquí o abrir el juego en una página completa.
