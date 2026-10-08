---
layout: default
title: Prácticas con Arduino
nav_order: 4
---

<p class="fer-page-label">Proyecto 02 · Electrónica</p>

# Prácticas con Arduino

<p class="fer-page-intro">De encender un led a controlar entradas digitales y servomotores.</p>

<div class="fer-project-meta"><span>Arduino IDE</span><span>Circuitos</span><span>Programación</span></div>

<nav class="fer-jump-nav" aria-label="Temas de las prácticas"><a href="#materiales">Materiales</a><a href="#salidas-digitales">Salidas digitales</a><a href="#entradas-digitales">Entradas digitales</a><a href="#servomotores">Servomotores</a></nav>

<link rel="stylesheet" href="{{ '/assets/css/materiales.css' | relative_url }}">

<section class="fer-materials" aria-labelledby="materiales">
  <div class="fer-materials-heading">
    <p>Para estas prácticas</p>
    <h2 id="materiales">Materiales</h2>
  </div>
  <div class="fer-materials-scroll" role="region" aria-label="Tabla de materiales de Arduino" tabindex="0">
    <table class="fer-materials-table" aria-labelledby="materiales">
      <thead><tr><th scope="col">Material</th><th scope="col">Cantidad</th><th scope="col">Descripción</th></tr></thead>
      <tbody>
        <tr><th scope="row">Arduino Uno</th><td>1</td><td>Es la placa principal que recibe y ejecuta el código de cada circuito.</td></tr>
        <tr><th scope="row">Protoboard</th><td>1</td><td>Permite conectar los componentes sin tener que soldarlos.</td></tr>
        <tr><th scope="row">Cable USB tipo A-B</th><td>1</td><td>Conecta el Arduino a la computadora, proporciona energía y permite cargar el código.</td></tr>
        <tr><th scope="row">Cables jumper</th><td>Varios</td><td>Se utilizan para realizar las conexiones entre el Arduino, la protoboard y los demás componentes.</td></tr>
        <tr><th scope="row">LEDs rojos</th><td>5 o más</td><td>Emiten luz cuando reciben corriente eléctrica y sirven como indicadores visuales.</td></tr>
        <tr><th scope="row">Resistencias de 220 Ω o 330 Ω</th><td>Varias</td><td>Limitan la corriente que reciben los LEDs para evitar que se dañen.</td></tr>
        <tr><th scope="row">Resistencias de 10 kΩ</th><td>2</td><td>Mantienen estable la señal de entrada de los botones y evitan lecturas incorrectas.</td></tr>
        <tr><th scope="row">Botones pulsadores</th><td>2</td><td>Funcionan como interruptores momentáneos y envían una señal cuando son presionados.</td></tr>
        <tr><th scope="row">Potenciómetro</th><td>1</td><td>Es una resistencia variable. Al girar su perilla cambia el valor de la señal que recibe el Arduino.</td></tr>
        <tr><th scope="row">Microservomotor SG90</th><td>1</td><td>Es un motor pequeño cuyo ángulo puede controlarse mediante una señal enviada por Arduino.</td></tr>
        <tr><th scope="row">Display digital de 7 segmentos</th><td>1</td><td>Está formado por siete pequeños segmentos luminosos que permiten mostrar números del 0 al 9.</td></tr>
      </tbody>
    </table>
  </div>
</section>

## Antes de empezar

En estas prácticas trabajé con Arduino Uno y Arduino IDE para conocer cómo se relacionan el código y los circuitos. La tarjeta Arduino recibe las instrucciones del programa y las utiliza para controlar componentes como leds, botones y servomotores.

**Arduino IDE** es el programa donde se escribe, revisa y carga el código. Para comenzar conecté la tarjeta a la computadora con un cable USB, preparé el programa y lo envié al Arduino para observar la respuesta del circuito.

Un **pin** es una conexión de la tarjeta que permite recibir o enviar señales. Cuando se configura como entrada puede leer el estado de un botón, y cuando funciona como salida puede controlar un componente, como un led.

Las actividades se organizaron en tres partes: salidas digitales, entradas digitales y servomotores. En cada una fui relacionando las instrucciones del programa con lo que ocurría en los componentes.

Para las actividades con dos servomotores y dos potenciómetros se requieren dos unidades de cada uno. La práctica de alimentación externa también necesita una fuente adecuada para el servomotor; estos elementos complementan los materiales de la tabla.

![foto de Arduino]({{ '/assets/img/01-publicar/ARDUINO%20FOTO.webp' | relative_url }})

![programa Arduino IDE]({{ '/assets/img/01-publicar/ARDUINOIDE.png' | relative_url }}) 

## 1. Salidas digitales {#salidas-digitales}

### 0. Ejemplo Blink

En esta práctica conecté el Arduino a la computadora y cargué el ejemplo Blink. Al ejecutarlo pude observar cómo el led integrado de la tarjeta se encendía y apagaba de manera repetida. Fue mi primer acercamiento a la idea de que unas instrucciones sencillas pueden producir una acción visible en un circuito.

![Arduino]({{ '/assets/img/01-publicar/ARDUINOIMAGE.jpg' | relative_url }}) 

![código uno]({{ '/assets/img/01-publicar/CODIGO1.png' | relative_url }})


### 1. Salida digital HIGH

Después trabajé con la instrucción HIGH para establecer un nivel alto en una salida digital. En el circuito del led, esta señal permitió encenderlo y observar cómo el estado de un pin se relaciona con la respuesta del componente.


### 2. Salida digital LOW

En esta actividad cambié la salida a LOW para establecer un nivel bajo. Al comparar su comportamiento con HIGH entendí cómo alternar los estados de una salida para encender y apagar el led.


### 3. Salida digital con delay

Después añadí la instrucción delay para introducir una pausa entre los cambios del led. Modificar el tiempo de espera permitió que el parpadeo fuera más rápido o más lento, y me ayudó a distinguir entre el estado de una salida y el tiempo que permanece en ese estado.

![Arduino dos]({{ '/assets/img/01-publicar/ARDUINODOS.jpg' | relative_url }})


### 4. Salida digital con led

En esta práctica conecté un led externo al Arduino y cargué un programa para encenderlo y apagarlo. Tuve que identificar sus dos terminales y colocarlas correctamente, ya que su orientación influye en el funcionamiento del circuito.

![LED dos]({{ '/assets/img/01-publicar/LEDDOS.jpg' | relative_url }})


### 5. Salida digital en protoboard

Coloqué un led y una resistencia en la protoboard y después los conecté al Arduino con cables jumper. La resistencia limita la corriente que pasa por el led y ayuda a protegerlo. Esta práctica me permitió reconocer cómo se organizan las conexiones en la protoboard y por qué no basta con colocar los componentes sin revisar el circuito.

![LED uno]({{ '/assets/img/01-publicar/LEDUNO.jpg' | relative_url }})


### 6. Salida digital con dos leds I

Para esta actividad coloqué dos leds en la protoboard, cada uno con su resistencia, y los conecté a pines digitales diferentes del Arduino. En el código configuré ambos pines como salidas y revisé que los dos leds encendieran. Con esto entendí que una misma tarjeta puede controlar varios componentes.

<video controls playsinline preload="metadata" style="width: 100%; height: auto;" aria-label="Práctica de Arduino con dos leds">
  <source src="{{ '/assets/videos/ARDUINOLED.mp4' | relative_url }}" type="video/mp4">
  Tu navegador no puede reproducir este video. <a href="{{ '/assets/videos/ARDUINOLED.mp4' | relative_url }}">Abrir el video</a>.
</video>

<p><a href="{{ '/assets/videos/ARDUINOLED.mp4' | relative_url }}" target="_blank" rel="noopener">Abrir el video en otra pestaña</a></p>


### 7. Salida digital con dos leds II

Mantuve las conexiones de los dos leds y cambié el código para encenderlos y apagarlos en una secuencia. Primero se enciende y se apaga el led conectado al pin 13, y después ocurre lo mismo con el del pin 12. Entre cada cambio, el programa espera un segundo con la instrucción delay(1000). Esta actividad me ayudó a relacionar el orden de las instrucciones con las luces que veía en el circuito.

<div class="fer-practice-pair">
  <figure class="fer-practice-panel">
    <h4>El circuito en funcionamiento</h4>
    <video controls playsinline preload="metadata" poster="{{ '/assets/img/arduino/practica-7-nuevo.jpg' | relative_url }}" aria-label="Práctica 7: encendido y apagado de dos LEDs">
      <source src="{{ '/assets/videos/arduino-practica-7-sin-audio.mp4' | relative_url }}" type="video/mp4">
      Tu navegador no puede reproducir este video.
    </video>
    <figcaption>Encendido y apagado de los LEDs.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/videos/arduino-practica-7-sin-audio.mp4' | relative_url }}" target="_blank" rel="noopener">Abrir el video ↗</a>
  </figure>
  <figure class="fer-practice-panel fer-practice-code">
    <h4>El código de la práctica</h4>
    <a href="{{ '/assets/img/arduino/codigo-practica-7.png' | relative_url }}" target="_blank" rel="noopener" aria-label="Ampliar la imagen del código de la práctica 7">
      <img src="{{ '/assets/img/arduino/codigo-practica-7.png' | relative_url }}" alt="Código de Arduino: pines 13 y 12 como OUTPUT, encendido y apagado con digitalWrite y pausas de 1000 milisegundos" loading="lazy">
    </a>
    <figcaption>Los pines 13 y 12 se configuran como salidas en setup. En loop se repite la secuencia con HIGH, LOW y delay.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/img/arduino/codigo-practica-7.png' | relative_url }}" target="_blank" rel="noopener">Ampliar el código ↗</a>
  </figure>
</div>

### 8. Display de 7 segmentos

En esta práctica coloqué un display de siete segmentos en la protoboard y conecté sus partes al Arduino con cables y resistencias. Después configuré en el programa los pines correspondientes como salidas. Al encender los siete segmentos pude mostrar el número 8 y observar que cada parte del display se controla por separado.

<div class="fer-practice-pair">
  <figure class="fer-practice-panel">
    <h4>El circuito en funcionamiento</h4>
    <a href="{{ '/assets/img/arduino/practica-8-display.png' | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/arduino/practica-8-display.png' | relative_url }}" alt="Display de siete segmentos encendido y conectado al Arduino en la práctica 8" loading="lazy">
    </a>
    <figcaption>El display con los segmentos encendidos.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/img/arduino/practica-8-display.png' | relative_url }}" target="_blank" rel="noopener">Ampliar la foto ↗</a>
  </figure>
  <figure class="fer-practice-panel fer-practice-code">
    <h4>El código de la práctica</h4>
    <a href="{{ '/assets/img/arduino/codigo-practica-8.png' | relative_url }}" target="_blank" rel="noopener">
      <img src="{{ '/assets/img/arduino/codigo-practica-8.png' | relative_url }}" alt="Código de la práctica 8 que configura los pines del display como OUTPUT y activa los segmentos y el punto con HIGH" loading="lazy">
    </a>
    <figcaption>En setup se configuran las salidas. En loop se encienden los segmentos y el punto con digitalWrite y HIGH.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/img/arduino/codigo-practica-8.png' | relative_url }}" target="_blank" rel="noopener">Ampliar el código ↗</a>
  </figure>
</div>

### 9. Display de 7 segmentos

En esta actividad conservé el circuito del display y cambié el programa para mostrar una secuencia de números. Para formar cada número, el código enciende algunos segmentos con HIGH y apaga otros con LOW. Las pausas de un segundo permiten observar el cambio entre los números 0, 1 y 2. Así comprendí que un mismo display puede mostrar distintos resultados según la combinación de salidas que se activa.

<div class="fer-practice-pair">
  <figure class="fer-practice-panel">
    <h4>El circuito en funcionamiento</h4>
    <video controls playsinline preload="metadata" poster="{{ '/assets/img/arduino/practica-9-video.jpg' | relative_url }}" aria-label="Práctica 9: secuencia de números en un display de siete segmentos">
      <source src="{{ '/assets/videos/arduino-practica-9-sin-audio.mp4' | relative_url }}" type="video/mp4">
      Tu navegador no puede reproducir este video.
    </video>
    <figcaption>Cambio de números en el display.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/videos/arduino-practica-9-sin-audio.mp4' | relative_url }}" target="_blank" rel="noopener">Abrir el video ↗</a>
    <a href="{{ '/assets/img/arduino/practica-9-display.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/arduino/practica-9-display.png' | relative_url }}" alt="Circuito de la práctica 9 con el display mostrando el número 1" loading="lazy" style="margin-top: 1rem;"></a>
    <figcaption>Detalle del display y sus conexiones.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/img/arduino/practica-9-display.png' | relative_url }}" target="_blank" rel="noopener">Ampliar la foto ↗</a>
  </figure>
  <figure class="fer-practice-panel fer-practice-code">
    <h4>El código de la práctica</h4>
    <a href="{{ '/assets/img/arduino/codigo-practica-9.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/arduino/codigo-practica-9.png' | relative_url }}" alt="Código de Arduino de la práctica 9: configuración de los segmentos y secuencia de números con HIGH, LOW y delay" loading="lazy"></a>
    <figcaption>El código cambia los segmentos encendidos para formar cada número y utiliza delay(1000) entre los cambios.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/img/arduino/codigo-practica-9.png' | relative_url }}" target="_blank" rel="noopener">Ampliar el código ↗</a>
  </figure>
</div>

### Conclusión

En esta primera parte aprendí a utilizar salidas digitales y a relacionar las instrucciones HIGH, LOW y delay con el comportamiento de leds y displays. También comprendí la importancia de la orientación de los componentes, las resistencias y las conexiones. Ver el circuito en funcionamiento me ayudó a entender mejor lo que indicaba el código.


## 2. Entradas digitales {#entradas-digitales}

### 10. Entrada digital con botón

En esta práctica conecté un botón y un led al Arduino utilizando la protoboard, cables y resistencias. Configuré el pin 8 como entrada para leer el botón y el pin 13 como salida para controlar el led. En el programa utilicé digitalRead para conocer el estado del botón y digitalWrite para enviar ese mismo estado al led. Al presionarlo y soltarlo pude observar cómo una señal de entrada produce una respuesta en el circuito.

<div class="fer-practice-pair">
  <figure class="fer-practice-panel">
    <h4>El circuito en funcionamiento</h4>
    <video controls playsinline preload="metadata" poster="{{ '/assets/img/arduino/practica-10-video.jpg' | relative_url }}" aria-label="Práctica 10: botón que controla el encendido de un LED">
      <source src="{{ '/assets/videos/arduino-practica-10-sin-audio.mp4' | relative_url }}" type="video/mp4">
      Tu navegador no puede reproducir este video.
    </video>
    <figcaption>El led responde al presionar y soltar el botón.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/videos/arduino-practica-10-sin-audio.mp4' | relative_url }}" target="_blank" rel="noopener">Abrir el video ↗</a>
  </figure>
  <figure class="fer-practice-panel fer-practice-code">
    <h4>El código de la práctica</h4>
    <a href="{{ '/assets/img/arduino/codigo-practica-10.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/arduino/codigo-practica-10.png' | relative_url }}" alt="Código de Arduino que configura el pin 13 como OUTPUT y el pin 8 como INPUT y escribe en el LED el estado leído del botón" loading="lazy"></a>
    <figcaption>digitalRead(8) lee el botón y digitalWrite envía su estado al led conectado al pin 13.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/img/arduino/codigo-practica-10.png' | relative_url }}" target="_blank" rel="noopener">Ampliar el código ↗</a>
  </figure>
</div>

### 11. Entrada digital con dos botones

Después conecté dos botones y dos leds al Arduino para controlar cada luz por separado. Configuré los pines 8 y 2 como entradas para los botones, y los pines 13 y 11 como salidas para los leds. El programa lee el estado de cada botón con digitalRead y lo envía al led correspondiente mediante digitalWrite. Al probarlos pude observar que cada botón controla su propia luz y comprender cómo se manejan varias entradas y salidas en un mismo circuito.

<div class="fer-practice-pair">
  <figure class="fer-practice-panel">
    <h4>El circuito en funcionamiento</h4>
    <video controls playsinline preload="metadata" poster="{{ '/assets/img/arduino/practica-11-video.jpg' | relative_url }}" aria-label="Práctica 11: dos botones que controlan dos LEDs">
      <source src="{{ '/assets/videos/arduino-practica-11-sin-audio.mp4' | relative_url }}" type="video/mp4">
      Tu navegador no puede reproducir este video.
    </video>
    <figcaption>Cada botón controla el encendido de su led.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/videos/arduino-practica-11-sin-audio.mp4' | relative_url }}" target="_blank" rel="noopener">Abrir el video ↗</a>
  </figure>
  <figure class="fer-practice-panel fer-practice-code">
    <h4>El código de la práctica</h4>
    <a href="{{ '/assets/img/arduino/codigo-practica-11.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/arduino/codigo-practica-11.png' | relative_url }}" alt="Código de Arduino de la práctica 11 que lee los botones en los pines 8 y 2 y controla los LEDs de los pines 13 y 11" loading="lazy"></a>
    <figcaption>El estado del botón del pin 8 se envía al led del pin 13, y el del botón del pin 2 al led del pin 11.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/img/arduino/codigo-practica-11.png' | relative_url }}" target="_blank" rel="noopener">Ampliar el código ↗</a>
  </figure>
</div>

### 12. Condicionales con un botón

Con el circuito de un botón y un led utilicé las condiciones if y else if para que el programa decidiera qué salida activar. Configuré el pin 8 como entrada y el pin 13 como salida. Cuando digitalRead(8) devuelve HIGH, el código enciende el led con digitalWrite(13, HIGH); cuando devuelve LOW, lo apaga. Al presionar y soltar el botón pude relacionar cada condición con la respuesta del circuito.

<div class="fer-practice-pair">
  <figure class="fer-practice-panel">
    <h4>El circuito en funcionamiento</h4>
    <video controls playsinline preload="metadata" poster="{{ '/assets/img/arduino/practica-12-video.jpg' | relative_url }}" aria-label="Práctica 12: botón y LED con condicionales">
      <source src="{{ '/assets/videos/arduino-practica-12-sin-audio.mp4' | relative_url }}" type="video/mp4">
      Tu navegador no puede reproducir este video.
    </video>
    <figcaption>El led se enciende al presionar el botón y se apaga al soltarlo.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/videos/arduino-practica-12-sin-audio.mp4' | relative_url }}" target="_blank" rel="noopener">Abrir el video ↗</a>
  </figure>
  <figure class="fer-practice-panel fer-practice-code">
    <h4>El código de la práctica</h4>
    <a href="{{ '/assets/img/arduino/codigo-practica-12.png' | relative_url }}" target="_blank" rel="noopener"><img src="{{ '/assets/img/arduino/codigo-practica-12.png' | relative_url }}" alt="Código de Arduino de la práctica 12 con condiciones if y else if para controlar el LED del pin 13 según el botón del pin 8" loading="lazy"></a>
    <figcaption>Si digitalRead(8) es HIGH, se enciende el led del pin 13; si es LOW, se apaga.</figcaption>
    <a class="fer-evidence-link" href="{{ '/assets/img/arduino/codigo-practica-12.png' | relative_url }}" target="_blank" rel="noopener">Ampliar el código ↗</a>
  </figure>
</div>

### 13. Condicionales con dos botones

En esta actividad trabajé con dos botones y dos leds, junto con sus resistencias y cables. Añadí condiciones para revisar las señales de los botones y controlar las salidas correspondientes. Con ello pude observar que distintas entradas pueden provocar respuestas diferentes dentro del mismo programa.


### 14. Condición OR con botones

Utilicé dos botones y un led para trabajar con la condición OR. En el programa, la respuesta se activaba cuando al menos una de las condiciones de los botones se cumplía. Al probar el circuito comprendí que no era necesario activar ambos botones al mismo tiempo.


### 15. Condición AND con botones

Después cambié la lógica del programa para utilizar AND. En este caso, el led se encendía cuando se cumplían las dos condiciones de los botones al mismo tiempo. Comparar esta práctica con la anterior me ayudó a entender la diferencia entre pedir una condición o exigir que ambas se cumplan.


### 16. Contador con leds

En esta práctica conecté varios leds y un botón al Arduino. En el programa utilicé una variable como contador para registrar las pulsaciones y cambiar el estado de los leds según el valor guardado. Esta actividad me permitió ver que un programa puede conservar información y utilizarla para decidir qué salida activar.


### Conclusión de la segunda parte

Con las entradas digitales aprendí a leer botones, utilizar condiciones y relacionar las señales recibidas con distintas respuestas del circuito. Las prácticas con OR, AND y el contador me ayudaron a comprender que Arduino puede tomar decisiones a partir del programa y de lo que ocurre en sus entradas.


## 3. Servomotores {#servomotores}

### 17. Servomotor

Conecté un servomotor al Arduino para conocer sus tres conexiones: alimentación, tierra o GND y señal de control. Después cargué el programa y observé cómo cambiaba de posición. A diferencia de un led, este componente permite convertir las instrucciones del código en movimiento.


### 18. Servomotor en varias posiciones

En esta actividad utilicé el mismo servomotor y modifiqué el código para indicarle diferentes posiciones. También añadí pausas entre los movimientos, de modo que pudiera observar cada cambio de ángulo. Esto me ayudó a comprender cómo se organiza una secuencia de posiciones desde el programa.


### 19. Servomotor y potenciómetro

Después conecté un potenciómetro para controlar la posición del servomotor. Al girar la perilla, Arduino leía la señal y el programa la relacionaba con un ángulo. Así pude observar cómo una entrada analógica, que puede tomar distintos valores, permite ajustar el movimiento de manera gradual.


### 19.2. Dos servomotores y un potenciómetro

En esta práctica conecté dos servomotores y utilicé un solo potenciómetro como entrada. Modifiqué el programa para que ambos respondieran a la posición de la perilla. Con esta actividad entendí que una misma señal puede utilizarse para controlar más de un componente.


### 20.2. Dos servomotores y dos potenciómetros

Después utilicé dos potenciómetros, uno para cada servomotor. El programa leía las dos entradas y enviaba a cada motor la posición correspondiente. Al girar las perillas pude controlar los movimientos por separado y comparar este funcionamiento con el de la práctica anterior.


### 21. Fuente externa

En esta actividad utilicé una fuente externa para alimentar el servomotor, mientras Arduino enviaba la señal de control. También conecté el potenciómetro y los cables necesarios. Fue importante unir la tierra de la fuente con la tierra del Arduino para que compartieran una referencia, y entendí que controlar un motor y proporcionarle energía son dos funciones diferentes.


### Conclusión de la tercera parte

Con estas prácticas aprendí a controlar la posición de uno o varios servomotores y a utilizar potenciómetros para modificar su movimiento. También comprendí la diferencia entre una secuencia programada y un control que responde a una entrada. La actividad con la fuente externa me ayudó a reconocer la importancia de la alimentación y de una tierra común.

