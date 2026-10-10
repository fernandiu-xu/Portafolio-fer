---
layout: default
title: Videojuego
nav_order: 7
permalink: /videojuego/
---

<p class="fer-page-label">Proyecto 05 · Programación web</p>

# NEON: Última señal

<p class="fer-page-intro">Una ciudad suspendida, un deslizador y una última misión para recuperar la energía de Helix.</p>

<div class="fer-project-meta"><span>HTML</span><span>CSS</span><span>JavaScript</span><span>Canvas 2D</span><span>3 sectores</span><span>GitHub Pages</span></div>

## La historia

En el año 2089, la ciudad de **Helix** depende de una torre orbital para mantenerse encendida. Una falla interrumpe su suministro y solo queda una señal de emergencia. Tu misión es pilotar un deslizador por las autopistas suspendidas, recuperar núcleos de energía y llevarlos hasta la torre.

La aventura dura aproximadamente **90 segundos** y atraviesa tres sectores. Debes llegar al final con al menos **12 núcleos** y conservar la integridad de tu vehículo. Puedes cambiar de carril, saltar sobre barreras y grietas, o activar un impulso con escudo para atravesar obstáculos.

## Juega aquí

<style>
.fer-game-frame{display:block;width:100%;height:680px;margin:1.5rem auto;border:1px solid #243d59;border-radius:16px;background:#050914}
@media(max-width:650px){.fer-game-frame{height:880px}}
</style>

<iframe class="fer-game-frame" src="{{ '/assets/videojuego/index.html?v=20261010-neon1' | relative_url }}" title="NEON: Última señal, juego futurista de conducción" loading="lazy" allow="fullscreen"></iframe>

[Abrir NEON en una página completa ↗]({{ '/assets/videojuego/index.html?v=20261010-neon1' | relative_url }})

## Cómo jugar

Presiona **Iniciar misión** y busca los núcleos luminosos. El deslizador avanza automáticamente: tú decides cuándo cambiar de carril, saltar o utilizar el impulso. Mira los obstáculos desde lejos para preparar cada movimiento.

| Acción | Teclado | Celular o ratón |
| :--- | :--- | :--- |
| Cambiar de carril | A / D o flechas izquierda y derecha | Botones ← y → |
| Saltar | Espacio | Botón Saltar |
| Impulso con escudo | Shift | Botón Impulso |
| Pausar o continuar | P o Escape | Botón Ⅱ y Continuar misión |
| Activar sonido | Botón Sonido | Botón Sonido |

Si usas el teclado, haz clic primero dentro del juego. El sonido es opcional y empieza apagado.

### Energía, integridad e impulso

Cada núcleo recogido suma puntos. Si consigues varios sin recibir un impacto, formas una cadena que aumenta la recompensa hasta cinco veces el valor inicial. Chocar rompe la cadena y resta un punto de integridad; comienzas con tres.

Un salto bien calculado permite superar una barrera o una grieta y suma **75 puntos**. El impulso activa un escudo durante **1.3 segundos**, permite atravesar obstáculos y necesita **6 segundos** para recargarse. Atravesar un obstáculo con el escudo suma 50 puntos.

Al cambiar de sector recuperas un punto de integridad, hasta un máximo de tres, y recibes 500 puntos. Completar la misión con la energía necesaria agrega 1500 puntos. El récord se guarda en el navegador cuando el almacenamiento está disponible.

## Los tres sectores

| Sector | Escenario | Duración | Dificultad |
| :--- | :--- | :---: | :--- |
| 01 · Distrito neón | Autopistas entre edificios con luces turquesa | 30 segundos | Introducción a los núcleos, barreras y grietas |
| 02 · Jardines de plasma | Una zona iluminada en violeta | 30 segundos | Los objetos se acercan más rápido y aparecen núcleos adicionales |
| 03 · Torre orbital | La aproximación final en tonos ámbar | 30 segundos | Mayor velocidad y menos tiempo para reaccionar |

Los tramos se generan durante la partida. Cada grupo principal coloca energía en un carril y puede colocar un obstáculo en otro, conservando una ruta libre. Las combinaciones cambian en cada intento.

## Diseño y gráficos

Quise crear una experiencia de ciencia ficción con una pantalla de inicio que presenta la historia, el objetivo y la identidad del juego. Durante la partida, el marcador muestra los núcleos, la integridad, la puntuación y el avance de la misión.

La ciudad tiene varias capas de edificios, ventanas iluminadas, un planeta con anillos y una torre de energía. La carretera utiliza perspectiva para producir una sensación de profundidad. El deslizador tiene propulsores, un salto animado y un escudo visible; los núcleos giran y los impactos producen partículas.

Los gráficos se dibujan con **Canvas 2D** y una proyección de perspectiva. La música no es necesaria para jugar: los efectos de sonido se generan con Web Audio al activar el botón correspondiente.

## Cómo se hizo el código

| Archivo | Función |
| :--- | :--- |
| `index.html` | Organiza la pantalla de inicio, el lienzo, los indicadores y los controles |
| `style.css` | Define la interfaz oscura, los colores neón y la distribución en distintas pantallas |
| `game.js` | Dibuja la ciudad, genera tramos, controla el vehículo y calcula el resultado |

### El ciclo del juego

El programa utiliza `requestAnimationFrame` para dibujar cada fotograma. Calcula el tiempo transcurrido entre fotogramas y actualiza los objetos antes de volver a dibujar. Así el movimiento depende del tiempo y no de una cantidad fija de cuadros.

```js
function frame(ms) {
  const dt = last ? Math.min((ms - last) / 1000, .05) : 0;
  last = ms;
  tick(dt);
  draw();
  requestAnimationFrame(frame);
}
```

### Perspectiva de la pista

Los objetos lejanos se dibujan pequeños, cerca del horizonte. Conforme se acercan, su tamaño y su separación aumentan. Esta transformación crea la ilusión de avanzar por una carretera.

```js
function project(l, p) {
  const width = 28 + 390 * p * p;
  return {
    x: 480 + (l - 1) * width * .64,
    y: 230 + 365 * p * p,
    s: .15 + 1.25 * p * p,
    w: width
  };
}
```

### Colisiones y habilidades

Cuando un objeto llega al vehículo, el programa comprueba si está en el mismo carril. Si es un núcleo, aumenta la energía y la puntuación. Si es un obstáculo, revisa primero el escudo y después el salto; si ninguna habilidad está activa, descuenta integridad.

Después de un impacto hay un breve periodo de protección para evitar perder varios puntos de integridad al mismo tiempo.

### Estados de la misión

El juego distingue entre inicio, partida, pausa, derrota y victoria. En pausa no avanzan la misión, los obstáculos ni la recarga de habilidades. También se pausa automáticamente cuando la ventana pierde el foco o la pestaña deja de verse.

## Pruebas realizadas

Se comprobaron los límites de los carriles, los saltos, la recolección de energía, las cadenas de puntos, los impactos, el escudo y su recarga. También se verificaron la pausa, los cambios de sector, la recuperación de integridad, la victoria con 12 núcleos, la derrota por energía insuficiente y el reinicio de la partida.

Además, se generaron 100 grupos de objetos para comprobar que la energía y los obstáculos principales no ocupen el mismo carril.

## Publicación y repositorio

El juego funciona en el navegador sin instalar programas. Los archivos y la liga para jugar están en [mi repositorio de GitHub](https://github.com/fernandiu-xu/Portafolio-fer/tree/main/assets/videojuego).
