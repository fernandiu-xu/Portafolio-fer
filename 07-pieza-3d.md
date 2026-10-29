---
layout: default
title: Pieza 3D
nav_order: 7.5
permalink: /pieza-3d/
---

<p class="fer-page-label">Proyecto 06 · Diseño e impresión 3D</p>

# Pieza 3D

<p class="fer-page-intro">Diseñar e imprimir en 3D una figura, desde el modelo digital hasta la pieza final.</p>

<div class="fer-project-meta"><span>Gecko articulado</span><span>Impresión FDM</span><span>Creality</span><span>≈ 2 horas</span></div>

## Gecko articulado

La figura principal de este proyecto es un **gecko articulado impreso en 3D**. Su cuerpo está formado por una cabeza, varias secciones del torso y la cola, además de cuatro patas. Las uniones entre estas partes permiten cambiar su posición y darle movimiento sin que pierda su forma.

<figure class="fer-cubo-figure">
  <a href="{{ '/assets/img/pieza-3d/gecko-terminado.webp' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/pieza-3d/gecko-terminado.webp' | relative_url }}" alt="Gecko blanco articulado terminado, con cabeza, cuerpo segmentado, patas y cola" loading="lazy"></a>
  <figcaption>Resultado del gecko articulado después de la impresión.</figcaption>
</figure>

### Cómo está construido el modelo

El gecko combina piezas con distintas funciones: la cabeza define la forma del animal, las patas terminan en dedos y los segmentos del cuerpo y la cola se conectan mediante articulaciones. En las vistas de las piezas se distinguen salientes y cavidades que forman estas conexiones.

Para que una unión pueda moverse, necesita una pequeña separación entre sus superficies. Si las partes quedan pegadas durante la impresión, la articulación no funciona; por eso es importante conservar esas holguras al preparar el modelo.

Las siguientes imágenes son **recreaciones visuales de las piezas en un entorno de SolidWorks**, utilizadas para explicar la estructura del modelo.

<figure class="fer-cubo-figure">
  <a href="{{ '/assets/img/pieza-3d/gecko-cabeza.webp' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/pieza-3d/gecko-cabeza.webp' | relative_url }}" alt="Vista ilustrativa de la cabeza del gecko" loading="lazy"></a>
  <figcaption>Cabeza del gecko · vista ilustrativa de la pieza 01.</figcaption>
</figure>

<div class="fer-gallery fer-cubo-designs">
<figure class="fer-cubo-figure">
  <a href="{{ '/assets/img/pieza-3d/gecko-pata.webp' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/pieza-3d/gecko-pata.webp' | relative_url }}" alt="Vista ilustrativa de una pata del gecko con sus dedos y conexión" loading="lazy"></a>
  <figcaption>Pata y conexión con el cuerpo · pieza 13.</figcaption>
</figure>
<figure class="fer-cubo-figure">
  <a href="{{ '/assets/img/pieza-3d/gecko-segmento-10.webp' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/pieza-3d/gecko-segmento-10.webp' | relative_url }}" alt="Vista ilustrativa de un segmento con cavidad y saliente de unión" loading="lazy"></a>
  <figcaption>Segmento articulado · pieza 10.</figcaption>
</figure>
<figure class="fer-cubo-figure">
  <a href="{{ '/assets/img/pieza-3d/gecko-segmento-17.webp' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/pieza-3d/gecko-segmento-17.webp' | relative_url }}" alt="Vista ilustrativa de la cavidad de conexión de la pieza 17" loading="lazy"></a>
  <figcaption>Detalle de una unión · pieza 17.</figcaption>
</figure>
<figure class="fer-cubo-figure">
  <a href="{{ '/assets/img/pieza-3d/gecko-segmento-20.webp' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/pieza-3d/gecko-segmento-20.webp' | relative_url }}" alt="Vista ilustrativa de otro segmento articulado del gecko" loading="lazy"></a>
  <figcaption>Otro segmento del modelo · pieza 20.</figcaption>
</figure>
</div>

### Preparación e impresión

Para convertir un modelo digital en una pieza física se utiliza un **programa de laminado**, que divide la figura en capas y genera las instrucciones de movimiento de la impresora. En esta preparación se revisan el tamaño, la orientación sobre la base y las separaciones de las articulaciones.

En la fotografía se observa el gecko sobre la plataforma de la impresora, con el cuerpo, la cola y las patas extendidos. La máquina deposita filamento fundido siguiendo las trayectorias de cada capa, hasta completar el volumen de la figura y sus conexiones.

La impresión del gecko tardó **aproximadamente 2 horas**. Al terminar, se deja enfriar la base antes de retirar la figura y se comprueba con cuidado el movimiento de las articulaciones, sin forzarlas.

<figure class="fer-cubo-figure">
  <a href="{{ '/assets/img/pieza-3d/impresora-creality.webp' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/pieza-3d/impresora-creality.webp' | relative_url }}" alt="Impresora Creality de filamento con el gecko blanco sobre la plataforma" loading="lazy"></a>
  <figcaption>Impresora Creality utilizada en el proyecto, con el gecko sobre la base de impresión.</figcaption>
</figure>

### Qué impresora utilizamos y cómo funciona

La máquina de la fotografía es una **impresora 3D Creality de filamento**, que trabaja con tecnología **FDM**, o modelado por deposición fundida. Esta tecnología sirve para transformar un modelo digital en un objeto físico mediante la acumulación de capas de plástico.

El extrusor empuja el filamento hacia una boquilla caliente, donde el material se funde. El cabezal y la plataforma se desplazan siguiendo las instrucciones del archivo de impresión para colocar el material en el lugar correcto. Al enfriarse, cada capa se solidifica y queda unida a la anterior, formando poco a poco la pieza.

## Figura roja sin articulaciones

La figura roja es una **pieza no articulada**, con una postura fija. Se imprimió en la **impresora Creality que aparece en la fotografía anterior**, mediante el mismo proceso de deposición de filamento capa por capa.

<figure class="fer-cubo-figure">
  <a href="{{ '/assets/img/pieza-3d/figura-roja.webp' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/pieza-3d/figura-roja.webp' | relative_url }}" alt="Figura roja de un personaje con cabeza cuadrada, brazos y piernas en posición fija" loading="lazy"></a>
  <figcaption>Figura roja no articulada, impresa en la Creality del proyecto.</figcaption>
</figure>

<details>
<summary>Referencia sobre el funcionamiento de la impresión FDM</summary>
<p><a href="https://www.creality.com/blog/3d-printer-nozzle-guide-types-sizes" target="_blank" rel="noopener">Creality: la boquilla y su función en la impresión 3D</a>.</p>
</details>
