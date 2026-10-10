---
layout: default
title: Brazo robótico
nav_order: 6
permalink: /brazo-robotico/
---

<link rel="stylesheet" href="{{ '/assets/css/materiales.css?v=20261009-imagenes2' | relative_url }}">

<p class="fer-page-label">Proyecto 04 · Semana 5 y 6</p>

# Brazo robótico

<p class="fer-page-intro">Diseño, fabricación y control de un brazo robótico con tres grados de libertad y una pinza.</p>

<div class="fer-project-meta"><span>Arduino</span><span>Servomotores SG90</span><span>Potenciómetros</span><span>SolidWorks</span><span>Corte láser</span><span>MDF de 3 mm</span></div>

## El propósito del proyecto

En este proyecto construimos y programamos un brazo robótico con tres grados de libertad y una pinza. Utilizamos servomotores, Arduino y potenciómetros para controlar sus movimientos de forma manual.

El objetivo fue que el brazo pudiera moverse al girar los potenciómetros y utilizar la pinza para tomar una pelota de aproximadamente **6 cm de diámetro**. La estructura se fabricó con **MDF de 3 mm**, cortado con una cortadora láser. Después realizamos el ensamble y las conexiones electrónicas para controlar cada servomotor.

<div class="fer-jump-nav" aria-label="Apartados del proyecto"><a href="#materiales">Materiales</a><a href="#diseno-del-brazo">Diseño</a><a href="#corte-laser">Corte láser</a><a href="#ensamble-del-brazo">Ensamble</a><a href="#circuito-electronico">Circuito</a><a href="#programacion">Programación</a></div>

<section class="fer-materials" aria-labelledby="materiales">
  <div class="fer-materials-heading"><p>Lo que utilizamos</p><h2 id="materiales">Materiales</h2></div>
  <div class="fer-materials-scroll" tabindex="0" role="region" aria-label="Tabla de materiales del brazo robótico">
    <table class="fer-materials-table">
      <thead><tr><th scope="col">Material</th><th scope="col">Cantidad</th><th scope="col">Uso</th></tr></thead>
      <tbody>
        <tr><th scope="row">Arduino</th><td>1</td><td>Recibir las señales de los potenciómetros y controlar los servomotores.</td></tr>
        <tr><th scope="row">Servomotores SG90</th><td>4</td><td>Realizar los movimientos del brazo y abrir o cerrar la pinza.</td></tr>
        <tr><th scope="row">Potenciómetros de 1 kΩ</th><td>4</td><td>Controlar manualmente la posición de cada servomotor.</td></tr>
        <tr><th scope="row">Protoboard</th><td>1</td><td>Organizar y realizar las conexiones del circuito.</td></tr>
        <tr><th scope="row">Cables jumper</th><td>Varios</td><td>Conectar el Arduino, los potenciómetros y los servomotores.</td></tr>
        <tr><th scope="row">Cable USB A-B</th><td>1</td><td>Cargar el programa en Arduino y alimentarlo durante las primeras pruebas.</td></tr>
        <tr><th scope="row">MDF de 3 mm</th><td>Según diseño</td><td>Fabricar las piezas de la estructura mediante corte láser.</td></tr>
        <tr><th scope="row">Tornillos y tuercas</th><td>Varios</td><td>Unir algunas partes de la estructura.</td></tr>
      </tbody>
    </table>
  </div>
</section>

<!-- Evidencia: fotografía de los materiales -->

<h2 id="diseno-del-brazo">Diseño del brazo</h2>

### Primer intento en SolidWorks

Al principio intentamos diseñar desde cero todas las piezas del brazo en **SolidWorks**. Para hacerlo, tuvimos que considerar las medidas de los servomotores, los puntos de unión y el tamaño máximo permitido para la estructura.

Durante el diseño encontramos dificultades para que las piezas coincidieran entre sí y el ensamble funcionara como esperábamos. Este primer intento nos permitió identificar que las medidas y la ubicación de las uniones son fundamentales para que el brazo pueda armarse y moverse correctamente.

<!-- Evidencia: diseños iniciales en SolidWorks -->

### La plantilla utilizada

Como el diseño inicial no funcionó de la manera prevista, utilizamos una **plantilla externa** como base para fabricar las piezas. Antes de enviarla a corte, ajustamos el diseño al **MDF de 3 mm de grosor**, que era el material disponible para construir la estructura.

<!-- Evidencia: plantilla de las piezas, partes 1 y 2 -->

<h2 id="corte-laser">Corte láser</h2>

Una vez listo el diseño, acomodamos las piezas para aprovechar mejor el espacio de la placa de MDF. Revisamos las dimensiones del archivo y que el diseño estuviera preparado para trabajar con el grosor del material.

Después enviamos el archivo a la cortadora láser para fabricar cada pieza. Esta etapa conectó el trabajo de diseño con la construcción de la estructura.

<!-- Evidencia: video del corte láser -->

<h2 id="ensamble-del-brazo">Ensamble del brazo</h2>

Con las piezas cortadas, comenzamos a armar el brazo siguiendo un manual de instrucciones. Primero ensamblamos la base y después agregamos los soportes, las partes del brazo y los servomotores.

[Consultar las instrucciones de armado](https://es.slideshare.net/slideshow/instrucciones-armarbrazorobotico/147417473#google_vignette)

Durante el ensamble revisamos que las piezas pudieran moverse libremente y que los servomotores no chocaran con la estructura. Los cuatro servomotores SG90 se distribuyeron para controlar:

1. El movimiento de la base.
2. El movimiento del brazo inferior.
3. El movimiento del brazo superior.
4. La apertura y el cierre de la pinza.

Los tres primeros movimientos corresponden a los grados de libertad del brazo, mientras que el cuarto servomotor acciona la pinza.

<!-- Evidencia: brazo ensamblado -->

<h2 id="circuito-electronico">Circuito electrónico</h2>

Para controlar el brazo utilizamos un **Arduino**, cuatro potenciómetros y cuatro servomotores SG90. Cada potenciómetro controla una parte diferente. Al girarlo, Arduino lee su señal y la transforma en el ángulo que recibe el servomotor correspondiente.

Las conexiones de señal se organizaron de la siguiente manera:

| Parte | Pin del servomotor | Entrada del potenciómetro |
| :--- | :---: | :---: |
| Base | Digital 3 | A0 |
| Brazo inferior | Digital 5 | A1 |
| Brazo superior | Digital 6 | A2 |
| Pinza | Digital 9 | A3 |

El Arduino se conectó a la computadora mediante un **cable USB A-B** para cargar el programa y realizar las primeras pruebas.

Antes de montar el circuito físico, realizamos un modelo en **Tinkercad** para simular las conexiones y probar el código. Después utilizamos ese modelo como referencia para conectar los componentes.

<!-- Evidencia: circuito en Tinkercad y conexiones físicas -->

<h2 id="programacion">Programación</h2>

Utilizamos **Arduino IDE** para escribir y cargar el programa, junto con la librería `Servo.h` para controlar los servomotores.

El programa lee los cuatro potenciómetros mediante las entradas analógicas del Arduino. Cada lectura tiene un valor entre **0 y 1023**, que se convierte en un ángulo de aproximadamente **0° a 180°**. Ese ángulo se envía al servomotor asociado a cada potenciómetro para ajustar su posición.

De esta manera podemos controlar por separado los movimientos de la base, del brazo inferior, del brazo superior y de la pinza.

<!-- Evidencia: código utilizado -->

## Pruebas de funcionamiento

La prueba del proyecto consiste en mover el brazo mediante los potenciómetros y utilizar la pinza para tomar la pelota de aproximadamente **6 cm de diámetro**. En esta etapa se observa cómo trabajan en conjunto la estructura, las conexiones y el programa.

<!-- Evidencia: videos del movimiento del brazo y agarre de la pelota -->
