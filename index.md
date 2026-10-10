---
layout: default
title: Inicio
nav_order: 1
nav_exclude: true
---

<div class="fer-home">
  <section class="fer-hero" aria-labelledby="fer-title">
    <div class="fer-hero__text">
      <p class="fer-eyebrow">Fernanda Ramos · Portafolio personal</p>
      <h1 id="fer-title">PORTAFOLIO</h1>
      <p class="fer-hello">Ideas que se convierten en proyectos</p>
      <p class="fer-intro">Me gusta entender cómo funcionan las cosas y convertir mis ideas en algo que pueda construir. Aquí comparto mis prácticas, proyectos y lo que voy aprendiendo en el camino.</p>
      <a class="fer-button" href="#mis-trabajos">Explorar mis trabajos <span aria-hidden="true">↗</span></a>
    </div>
    <figure class="fer-portrait">
      <img src="{{ '/assets/img/01-publicar/YO.jpg' | relative_url }}" alt="Fernanda Ramos" width="360" height="420">
      <figcaption>Curiosidad, ideas y ganas de crear</figcaption>
    </figure>
  </section>

  <div class="fer-interests" aria-label="Mis intereses">
    <span>Mecatrónica</span><span>Creatividad</span><span>Tecnología</span><span>Música</span>
  </div>

  <section class="fer-work" aria-labelledby="mis-trabajos">
    <div class="fer-section-heading">
      <p class="fer-eyebrow">Un poco de mí y de lo que hago</p>
      <h2 id="mis-trabajos">Mis trabajos</h2>
      <p>En cada proyecto comparto qué hice, cómo fue el proceso y lo que aprendí. Aquí puedes explorar la creación de mi página, mis prácticas de electrónica y el diseño de piezas para corte láser.</p>
    </div>
    <div class="fer-grid">
      <a class="fer-card" href="{{ '/01-publicar-en-github-pages/' | relative_url }}">
        <img class="fer-card__image" src="{{ '/assets/img/01-publicar/YO.jpg' | relative_url }}" alt="Fernanda Ramos" loading="lazy">

        <span class="fer-card__number">01 / Sobre mí</span>
        <span class="fer-card__title">Acerca de mí</span>
        <p>Mis intereses, lo que me inspira y las cosas que disfruto aprender.</p>
        <span class="fer-card__action">Conóceme <span aria-hidden="true">↗</span></span>
      </a>
      <a class="fer-card" href="{{ '/02-estructura-del-repo/' | relative_url }}">
        <img class="fer-card__image" src="{{ '/assets/img/01-publicar/IMAGENCOLORPAG.png' | relative_url }}" alt="Diseño de mi primera página web" loading="lazy">

        <span class="fer-card__number">02 / Mi primera página</span>
        <span class="fer-card__title">Mi página web</span>
        <p>Cómo empecé a darle identidad a mi portafolio con GitHub y mis propios colores.</p>
        <span class="fer-card__action">Ver mi proceso <span aria-hidden="true">↗</span></span>
      </a>
      <a class="fer-card" href="{{ '/03-markdown/' | relative_url }}">
        <img class="fer-card__image" src="{{ '/assets/img/01-publicar/ARDUINOIMAGE.jpg' | relative_url }}" alt="Tarjeta Arduino utilizada en mis prácticas" loading="lazy">

        <span class="fer-card__number">03 / Electrónica</span>
        <span class="fer-card__title">Prácticas con Arduino</span>
        <p>Mis prácticas con Arduino, circuitos, leds, botones y servomotores.</p>
        <span class="fer-card__action">Explorar prácticas <span aria-hidden="true">↗</span></span>
      </a>
      <a class="fer-card" href="{{ '/04-estilos/' | relative_url }}">
        <span class="fer-card__image fer-cube-crop"><img src="{{ '/assets/img/cubo/cubo-terminado.png' | relative_url }}" alt="Cubo de MDF terminado" loading="lazy"></span>

        <span class="fer-card__number">04 / Diseño en 3D</span>
        <span class="fer-card__title">Cubo en SolidWorks</span>
        <p>El diseño de un cubo en SolidWorks, la preparación del archivo DXF y su fabricación en MDF.</p>
        <span class="fer-card__action">Ver mis diseños <span aria-hidden="true">↗</span></span>
      </a>
      <a class="fer-card" href="{{ '/brazo-robotico/' | relative_url }}">
        <img class="fer-card__image" src="{{ '/assets/img/brazo-robotico/robot-pelota-poster.jpg' | relative_url }}" alt="Brazo robótico de MDF sujetando una pelota roja" loading="lazy">

        <span class="fer-card__number">05 / Robótica · Semana 5 y 6</span>
        <span class="fer-card__title">Brazo robótico</span>
        <p>El diseño y la construcción de un brazo de MDF, controlado con Arduino, servomotores y potenciómetros.</p>
        <span class="fer-card__action">Conocer el proyecto <span aria-hidden="true">↗</span></span>
      </a>
      <a class="fer-card" href="{{ '/videojuego/' | relative_url }}">
        <span class="fer-card__number">06 / Programación web</span>
        <span class="fer-card__title">Nova: misión energía</span>
        <p>Una aventura con tres niveles: brinca entre plataformas, recoge piezas y dispara para despejar el camino.</p>
        <span class="fer-card__action">Jugar y ver el proyecto <span aria-hidden="true">↗</span></span>
      </a>
    </div>
  </section>

  <aside class="fer-note">
    <span aria-hidden="true">✦</span>
    <p>Siempre hay algo nuevo por descubrir, construir o mejorar.</p>
  </aside>

</div>
