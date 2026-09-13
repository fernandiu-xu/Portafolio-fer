---
layout: default
title: Sección dos
nav_order: 4
---

# SEMANA DOS

En esta semana empezamos a trabajar con Arduino y la plataforma Arduino IDE, el cual es  una plataforma de electrónica que permite crear proyectos utilizando una tarjeta programable (Arduino), en ella se pueden conectar componentes como luces led, sensores, botones y motores.
Arduino IDE es el programa que se utiliza para escribir, revisar y enviar instrucciones a la tarjeta desde una computadora, primero se conecta la tarjeta con un cable USB, después se escribe el código, se revisa que no tenga errores y finalmente se carga en Arduino.

En resumen, Arduino es la tarjeta que realiza las acciones y Arduino IDE es el programa con el que le damos las instrucciones.

![foto de Arduino]({{ '/assets/img/01-publicar/ARDUINO%20FOTO.webp' | relative_url }})

![programa Arduino IDE]({{ '/assets/img/01-publicar/ARDUINOIDE.png' | relative_url }}) 

<h3 style="color: #E89AAA;">0, ejemplo blink</h3>

En esta práctica conecté el Arduino a la computadora y puse el código, al cargarlo pude ver cómo el led del arduino prendía y apagaba varias veces.

![Arduino]({{ '/assets/img/01-publicar/ARDUINOIMAGE.jpg' | relative_url }}) 

![código uno]({{ '/assets/img/01-publicar/CODIGO1.png' | relative_url }})

<h3 style="color: #E89AAA;">1, Salida digital HIGH</h3>
<h3 style="color: #E89AAA;">2, Salida digital LOW</h3>
<h3 style="color: #E89AAA;">3, Salida digital con delay</h3>

En esta parte hice lo mismo que en el anterior, solamente cambie el codigo dependiendo de como queria que enecendiera, alto, lento o con retardo digital. 

![Arduino dos]({{ '/assets/img/01-publicar/ARDUINODOS.png' | relative_url }})

<h3 style="color: #E89AAA;">4, Salida digital con led</h3>

En esta práctica conecté un led al Arduino y cargué un código para prenderlo y apagarlo, también tuve que colocar correctamente sus dos patitas para que funcionara.

![LED dos]({{ '/assets/img/01-publicar/LEDDOS.jpg' | relative_url }})

<h3 style="color: #E89AAA;">5, Salida digital en protoboard</h3>

Coloqué un led y una resistencia en la protoboard, después los conecté al Arduino con cables y cargué el código, la resistencia sirve para que el led no reciba demasiada corriente y se dañe

![LED uno]({{ '/assets/img/01-publicar/LEDUNO.jpg' | relative_url }})

<h3 style="color: #E89AAA;">6, salida digital con dos leds I</h3>

Coloqué dos leds en la protoboard y utilicé una resistencia para proteger cada uno, después conecté los leds al Arduino usando varios cables y asigné un pin digital diferente para cada uno, en el código indiqué que ambos pines funcionaran como salidas, al terminar revisé que los dos leds prendieran correctamente.

<video width="100%" controls>
  <source src="{{ '/videos/ARDUINOLED.mp4' | relative_url }}" type="video/mp4">
</video>

<h3 style="color: #E89AAA;">7, salida digital con dos leds II</h3>

En esta práctica mantuve la conexión de los dos leds, las resistencias, los cables y la protoboard, después cambié el código para controlar cada led de manera separada, hice que uno prendiera mientras el otro permanecía apagado y después cambiaban de estado, con esto aprendí que Arduino puede controlar varias salidas en diferentes momentos.


<h3 style="color: #E89AAA;">8, display de 7 segmentos</h3>

En esta parte coloqué el display de 7 segmentos en la protoboard y conecté sus diferentes partes a los pines digitales del Arduino utilizando varios cables, también usé resistencias para controlar la corriente y proteger los segmentos, después escribí y cargué el código para prender ciertas partes del display, al combinar los segmentos pude formar un número

<h3 style="color: #E89AAA;">9, display de 7 segmentos</h3>

En la última práctica utilicé la misma conexión del display de 7 segmentos, con la protoboard, los cables y las resistencias, después modifiqué el código para cambiar cuáles segmentos debían prender y cuáles debían permanecer apagados, de esta manera pude mostrar un número diferente y entendí que cada número necesita una combinación específica.

<h3 style="color: #f2254e;">conclusión</h3>

Con todas estas prácticas aprendí a conectar y utilizar una tarjeta Arduino, un cable USB, cables de conexión, leds, resistencias, una protoboard y un display de 7 segmentos, también aprendí a cargar códigos desde Arduino IDE y a utilizar instrucciones como HIGH, LOW y delay, al realizar cada circuito pude observar cómo el código y las conexiones trabajan juntos para que los componentes hagan lo que se les indica.


# 2 ARDUINO

<h3 style="color: #E89AAA;">10, Entrada digital con botón</h3>

En esta práctica coloqué un botón, un led y resistencias en la protoboard, después conecté todo al Arduino utilizando cables, el botón funcionó como una entrada digital porque le enviaba una señal a la tarjeta cuando lo presionaba, mientras que el led funcionó como una salida, por medio del código hice que Arduino leyera el estado del botón y realizara una acción con el led.

<h3 style="color: #E89AAA;">11, Entrada digital con dos botones</h3>

En esta actividad conecté dos botones y un led en la protoboard, utilicé resistencias y varios cables para conectar cada componente con los pines del Arduino, después configuré los botones como entradas y el led como salida, con el código pude leer cada botón por separado y hacer que el led respondiera dependiendo del botón que presionara.

<h3 style="color: #E89AAA;">12, Condicionales con un botón</h3>

En esta práctica conecté un botón y un led al Arduino utilizando la protoboard, cables y resistencias, después agregué una condición if en el código para que Arduino tomara una decisión, si el botón estaba presionado el led realizaba una acción y si no estaba presionado se mantenía en otro estado, así entendí que las condiciones sirven para que el circuito responda de diferentes maneras

<h3 style="color: #E89AAA;">13, Condicionales con dos botones</h3>

En esta parte conecté dos botones y dos leds en la protoboard, también utilicé resistencias para proteger los componentes y cables para unirlos con el Arduino, en el código agregué condiciones para revisar cuál botón estaba presionado, dependiendo de la señal recibida se prendía un led o se realizaba una acción diferente

<h3 style="color: #E89AAA;">14, Condición OR con botones</h3>

En esta parte utilicé dos botones, un led, resistencias, cables y la protoboard, después agregué la condición OR en el código, esta condición permitió que el led prendiera cuando se presionaba cualquiera de los dos botones, no era necesario presionar los dos al mismo tiempo porque bastaba con que uno de ellos estuviera activado

<h3 style="color: #E89AAA;">15, Condición AND con botones</h3>

En esta actividad mantuve la conexión de los dos botones y el led, utilizando nuevamente cables, resistencias y la protoboard, después agregué la condición AND en el código, en este caso el led solamente prendía cuando los dos botones estaban presionados al mismo tiempo, si solo presionaba uno el led permanecía apagado

<h3 style="color: #E89AAA;">16, Contador con leds</h3>

En esta última práctica coloqué varios leds, un botón y sus resistencias en la protoboard, después utilicé cables para conectar cada componente con un pin diferente del Arduino, en el código agregué un contador que aumentaba cada vez que presionaba el botón, los leds se iban prendiendo de acuerdo con el valor del contador, con esta actividad pude ver cómo Arduino guarda un valor y lo va cambiando cada vez que recibe una señal

<h3 style="color: #E89AAA;">Conclusión de la segunda parte</h3>

Con estas prácticas aprendí a utilizar botones como entradas digitales y leds como salidas, también aprendí a conectar los componentes con cables, resistencias y una protoboard, entendí que Arduino puede leer las señales de los botones, tomar decisiones y controlar los leds de diferentes maneras.