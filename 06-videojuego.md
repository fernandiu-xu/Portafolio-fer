---
layout: default
title: Videojuego
nav_order: 7
permalink: /videojuego/
---

<p class="fer-page-label">Proyecto 05 · Programación web</p>

# Café de nubes

<p class="fer-page-intro">Un café flotante, clientes con antojos y una barra de bebidas para preparar pequeños momentos de magia.</p>

<div class="fer-project-meta"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>3 rondas</span><span>Ilustraciones SVG</span><span>GitHub Pages</span></div>

## ¿De qué trata el juego?

En **Café de nubes** administras un pequeño café que flota en el cielo. Sus visitantes son gatitos, conejitos y osos que llegan con un pedido. Tu misión es elegir los ingredientes correctos, preparar la bebida y servirla antes de que se termine su paciencia.

Cada pedido muestra su receta con dibujos y nombres, así que no tienes que memorizarla. Puedes atender primero a quien tenga menos paciencia. Las bebidas cambian de color al prepararlas, y los pedidos correctos suman puntos. Si sirves varios seguidos sin errores, recibes una bonificación.

La aventura tiene tres rondas y **21 pedidos en total**. Cada ronda empieza con tres vidas. Si un cliente se va sin recibir su bebida, pierdes una vida. Si te equivocas al servir, se descuentan 10 puntos y cuatro segundos, pero puedes corregir la preparación.

## Cómo jugar

1. Presiona **Abrir mi café**.
2. Mira los ingredientes que aparecen en el pedido de un cliente.
3. Toca esos ingredientes en la barra de bebidas. Puedes agregarlos en cualquier orden.
4. Presiona **Servir** en el cliente que pidió esa bebida.
5. Completa los pedidos de la ronda para continuar a la siguiente.

Para quitar un ingrediente, vuelve a tocarlo o presiona su nombre en la preparación. **Vaciar vaso** elimina todos los ingredientes sin penalización. Puedes pausar cuando quieras.

| Acción | Con botones | Con teclado |
| :--- | :--- | :--- |
| Elegir ingredientes | Toca sus dibujos | Números 1 a 7 |
| Servir | Botón de cada cliente | Q, W o E, de izquierda a derecha |
| Vaciar el vaso | **Vaciar vaso** | R |
| Pausar o continuar | Botón Ⅱ / ▶ | P |

Si usas el teclado, haz clic primero dentro del juego.

## Juega aquí

<style>
.fer-game-frame { display:block; width:100%; max-width:980px; height:1040px; margin:1.5rem auto; border:1px solid #e5dde4; border-radius:24px; background:#f9f3eb; }
@media(max-width:600px){.fer-game-frame{height:1130px;}}
@media(max-width:400px){.fer-game-frame{height:1160px;}}
</style>

<iframe class="fer-game-frame" src="{{ '/assets/videojuego/index.html?v=20261010-cafe1' | relative_url }}" title="Café de nubes: juego interactivo de preparación de bebidas" loading="lazy"></iframe>

[Abrir Café de nubes en una página completa ↗]({{ '/assets/videojuego/index.html?v=20261010-cafe1' | relative_url }})

## Las tres rondas

| Ronda | Pedidos | Tiempo | Recetas |
| :---: | :---: | :---: | :--- |
| 1 | 5 | 90 segundos | Latte de fresa, café suave y té de sol. |
| 2 | 7 | 105 segundos | Se agregan chocolate nube y té cremoso. |
| 3 | 9 | 120 segundos | Aparece también la fresa helada y los clientes tienen menos paciencia. |

Los pedidos se eligen al azar entre las recetas disponibles en cada ronda. Si pierdes, puedes reintentar esa ronda con tres vidas y la puntuación que tenías al comenzarla. Al completar las tres, aparece la pantalla final. La mejor puntuación se guarda en el navegador cuando el almacenamiento está disponible.

## Diseño del juego

El juego combina colores crema, rosa, azul suave y detalles de madera para crear un café tranquilo y acogedor. Los personajes y los ingredientes están ilustrados con **SVG**, un formato que mantiene los dibujos claros al cambiar su tamaño.

La interfaz está dividida en dos partes: arriba se encuentran los clientes con sus pedidos y sus barras de paciencia; abajo está la barra para preparar las bebidas. El marcador siempre muestra la ronda, los pedidos entregados, el tiempo, los puntos y las vidas.

El vaso cambia de color según lo que agregas. Los mensajes indican cuándo una bebida fue correcta, si hubo un error o si un cliente tuvo que irse, para que se entienda lo que sucede durante la partida.

## Cómo se hizo el código

El proyecto utiliza tres archivos:

| Archivo | Función |
| :--- | :--- |
| `index.html` | Organiza la pantalla, el marcador, las tarjetas de clientes, la barra de ingredientes y los botones. |
| `style.css` | Define los colores, los tamaños y la adaptación a pantallas pequeñas. |
| `game.js` | Genera pedidos, compara recetas, controla el tiempo, calcula puntos y administra las rondas. |

### Preparación de una bebida

Los ingredientes elegidos se guardan en una lista llamada `tray`. Al tocar un ingrediente, se agrega a esa lista. Si ya estaba seleccionado, se quita. El vaso admite hasta tres ingredientes.

```js
if (tray.includes(key)) {
  tray = tray.filter(k => k !== key);
} else if (tray.length < 3) {
  tray.push(key);
}
```

### Comprobar una receta

Cada cliente tiene una lista con los ingredientes que necesita. El programa compara esa receta con la preparación. No importa el orden, pero deben coincidir todos los ingredientes y la cantidad.

```js
function sameRecipe(a, b) {
  return a.length === b.length &&
         a.every(k => b.includes(k));
}
```

Al servir correctamente, el contador de pedidos aumenta, el vaso se limpia y llega otro cliente si todavía faltan pedidos. La bonificación crece cuando se entregan varias bebidas correctas seguidas, hasta un máximo de cinco pedidos en la racha.

### Tiempo y paciencia

El reloj de la ronda y la paciencia de los clientes disminuyen con el tiempo. Las barras permiten identificar quién necesita ser atendido primero. Cuando queda poca paciencia, la barra cambia de color.

Al pausar, ambos relojes se detienen. El juego también se pausa cuando pierde el foco o se deja de ver la pestaña.

### Avance y reinicio

El programa distingue entre la pantalla inicial, una ronda en juego, la pausa, una ronda completada, una derrota y la victoria final. Así cada botón inicia la acción correspondiente: continuar, pasar de ronda, reintentar o comenzar una nueva aventura.

## Pruebas del juego

Se comprobaron las recetas en distintos órdenes, los puntos, las penalizaciones, el límite de tres ingredientes y la limpieza del vaso. También se revisaron la paciencia de los clientes, la pérdida de vidas, la pausa, el reintento y los **21 pedidos** necesarios para completar las tres rondas.

## Publicación y repositorio

Puedes jugar aquí mismo o abrir el café en una página completa. Los archivos HTML, CSS y JavaScript, junto con la liga para jugar, están en [mi repositorio de GitHub](https://github.com/fernandiu-xu/Portafolio-fer/tree/main/assets/videojuego).
