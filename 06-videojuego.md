---
layout: default
title: Videojuego
nav_order: 7
permalink: /videojuego/
---

<p class="fer-page-label">Proyecto 05 · Programación web</p>

# Nova: misión energía

<p class="fer-page-intro">Una aventura de plataformas con tres mundos, saltos, piezas para transportar y disparos de energía.</p>

<div class="fer-project-meta"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Canvas</span><span>3 niveles</span><span>GitHub Pages</span></div>

## ¿De qué trata?

Nova es un pequeño robot que debe devolver la energía a tres lugares: el **Jardín mecánico**, la **Fábrica violeta** y la **Estación lunar**. En cada escenario hay tres piezas de energía sobre las plataformas. La misión consiste en recogerlas, llevarlas en la mochila y entregarlas en la estación que se encuentra a la derecha.

Para avanzar, Nova puede caminar, brincar y lanzar disparos de energía. Los drones patrullan los escenarios y quitan una vida si lo tocan, pero también se pueden desactivar con los disparos. Cada nivel comienza con **tres vidas**, y los disparos son ilimitados.

El estilo combina escenarios oscuros con detalles rosa, luces amarillas y plataformas iluminadas. El personaje y los objetos están dibujados con código, con animaciones para caminar, efectos al recoger piezas y partículas al disparar.

## Cómo jugar

| Acción | Teclado | Celular |
| :--- | :--- | :--- |
| Moverse | Flechas ← → o A / D | Mantén presionada una flecha |
| Brincar | Espacio, W o ↑ | Toca **Brincar** |
| Disparar | J o X | Mantén presionado **Disparar** |
| Pausar o continuar | P | Botón Ⅱ / ▶ |

Presiona **Comenzar aventura**, recoge las tres piezas y llega a la estación de la derecha. Cuando tienes todas las piezas, la estación se ilumina y aparece la indicación de entregarlas. Al completar un nivel puedes pasar al siguiente.

Si te quedas sin vidas, puedes reintentar ese mismo nivel. No hay límite de tiempo. Para usar el teclado, primero haz clic dentro del juego.

## Juega aquí

<style>
.fer-game-frame { display:block; width:100%; max-width:960px; height:850px; margin:1.5rem auto; border:1px solid #44405e; border-radius:18px; background:#131629; }
@media(max-width:600px){.fer-game-frame{height:700px;}}
@media(max-width:400px){.fer-game-frame{height:680px;}}
</style>

<iframe class="fer-game-frame" src="{{ '/assets/videojuego/index.html' | relative_url }}" title="Nova: misión energía, aventura de plataformas" loading="lazy"></iframe>

[Abrir el juego en una página completa ↗]({{ '/assets/videojuego/index.html' | relative_url }})

## Los tres niveles

| Nivel | Escenario | Misión |
| :---: | :--- | :--- |
| 1 | Jardín mecánico | Conocer los controles, subir a las plataformas y recoger las primeras tres piezas. |
| 2 | Fábrica violeta | Recorrer una nueva distribución de plataformas y enfrentar más drones, incluido uno en una plataforma. |
| 3 | Estación lunar | Recoger las últimas piezas entre plataformas y drones para completar la misión. |

## Cómo se construyó el juego

El proyecto utiliza tres archivos que trabajan juntos. **HTML** organiza la pantalla, **CSS** define su presentación y **JavaScript** controla las acciones y las reglas.

| Archivo | Función |
| :--- | :--- |
| `index.html` | Contiene el canvas, el marcador, la pantalla de inicio y los botones para moverse, brincar, disparar y pausar. |
| `style.css` | Define los colores, la distribución y la adaptación de los controles a pantallas pequeñas. |
| `game.js` | Define los niveles, la gravedad, los saltos, las colisiones, los drones, las piezas y los proyectiles. |

### La pantalla y el diseño

El juego se dibuja en una etiqueta `canvas`. JavaScript actualiza la imagen cuadro por cuadro, mientras los botones y el marcador permanecen en HTML.

```html
<canvas id="board" width="960" height="540" tabindex="0"></canvas>
<button id="jump">Brincar ↑</button>
<button id="fire">Disparar ✦</button>
```

Con CSS se conserva la proporción del escenario y se preparan botones grandes para utilizarlos en el celular. El marcador muestra el nivel, las piezas recogidas y las vidas disponibles.

### Movimiento, gravedad y salto

El personaje tiene una posición y una velocidad horizontal y vertical. Cuando brinca recibe una velocidad hacia arriba. Después, la gravedad lo hace bajar hasta que toca una plataforma o el suelo.

```js
hero.vy = -640;       // Impulso del salto
hero.vy += 1600 * dt; // La gravedad aumenta la velocidad de caída
hero.y += hero.vy * dt;
```

La variable `dt` representa el tiempo entre cuadros. Las colisiones permiten que Nova aterrice encima de las plataformas, choque con sus lados y se detenga al llegar a los bordes de la pantalla.

### Piezas y estación de entrega

Al tocar una pieza, el programa la marca como recogida y aumenta el contador. También aparecen pequeñas luces y una pieza más en la mochila del robot. La estación se activa solamente cuando se han recogido las tres.

```js
p.taken = true;
count++;

if (count === 3 && hero.x + hero.w > 875 &&
    hero.y + hero.h >= FLOOR - 8) {
  completeLevel();
}
```

### Disparos y drones

Los disparos son objetos que avanzan en la dirección en la que mira el robot. El programa revisa si uno coincide con un dron. Si lo alcanza, el dron se desactiva y aparece un efecto de partículas.

```js
if (e.alive && overlap(s, e)) {
  e.alive = false;
}
```

Los drones patrullan entre dos posiciones. Si tocan a Nova, se pierde una vida y el personaje tiene un pequeño periodo de protección para evitar perder varias vidas de inmediato.

### Cambio de nivel y pausa

Cada escenario tiene sus propias plataformas, piezas, drones y colores. Al completar uno se carga el siguiente, con tres vidas nuevas. La última entrega termina la aventura.

El programa diferencia entre jugar, pausar, perder, completar un nivel y ganar. Al pausar conserva la posición y el avance. Si el juego pierde el foco, también se pausa automáticamente.

## Pruebas y mejoras

Se probaron los saltos hacia las **nueve plataformas**, los límites del movimiento, la recolección de piezas y la entrega en la estación. También se revisaron los disparos contra drones, la pérdida de vidas, la protección después de un golpe, el reintento y el paso por los tres niveles hasta la victoria.

Los controles táctiles permiten mantener presionados los botones de movimiento y disparo. El botón de brincar genera un salto por pulsación. El diseño incluye pantallas de inicio, pausa, cambio de nivel y final para que siempre se entienda qué hacer después.

## Publicación y código

El juego está publicado en GitHub Pages y se puede jugar dentro de esta pestaña o abrir en una página completa. Los archivos y la liga para jugar se encuentran en [mi repositorio de GitHub](https://github.com/fernandiu-xu/Portafolio-fer/tree/main/assets/videojuego).
