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