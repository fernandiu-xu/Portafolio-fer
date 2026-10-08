---
layout: default
title: Inicio
nav_order: 1
nav_exclude: true
---

<div class="fer-home">
  <section class="fer-hero" aria-labelledby="fer-title">
    <div class="fer-hero__text">
      <p class="fer-eyebrow">Fernanda Ramos · Mi espacio de aprendizaje</p>
      <h1 id="fer-title">PORTAFOLIO</h1>
      <p class="fer-hello">Hola, soy Fernanda</p>
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
      <p>Cada sección reúne una parte de mi proceso, desde mis primeros cambios en esta página hasta mis prácticas de electrónica y diseño.</p>
    </div>
    <div class="fer-grid">
      <a class="fer-card" href="{% link 01-publicar-en-github-pages.md %}">
        <span class="fer-card__number">01 / Sobre mí</span>
        <h3>Acerca de mí</h3>
        <p>Mis intereses, lo que me inspira y las cosas que disfruto aprender.</p>
        <span class="fer-card__action">Conóceme <span aria-hidden="true">↗</span></span>
      </a>
      <a class="fer-card" href="{% link 02-estructura-del-repo.md %}">
        <span class="fer-card__number">02 / Mi primera página</span>
        <h3>Sección uno</h3>
        <p>Cómo empecé a darle identidad a mi portafolio con GitHub y mis propios colores.</p>
        <span class="fer-card__action">Ver mi proceso <span aria-hidden="true">↗</span></span>
      </a>
      <a class="fer-card" href="{% link 03-markdown.md %}">
        <span class="fer-card__number">03 / Electrónica</span>
        <h3>Sección dos</h3>
        <p>Mis prácticas con Arduino, circuitos, leds, botones y servomotores.</p>
        <span class="fer-card__action">Explorar prácticas <span aria-hidden="true">↗</span></span>
      </a>
      <a class="fer-card" href="{% link 04-estilos.md %}">
        <span class="fer-card__number">04 / Diseño en 3D</span>
        <h3>Sección tres</h3>
        <p>Mis primeros diseños en SolidWorks y el proceso para crear piezas con medidas.</p>
        <span class="fer-card__action">Ver mis diseños <span aria-hidden="true">↗</span></span>
      </a>
    </div>
  </section>

  <aside class="fer-note">
    <span aria-hidden="true">✦</span>
    <p>Siempre hay algo nuevo por descubrir, construir o mejorar.</p>
  </aside>
  <p class="fer-repo"><a href="https://github.com/fernandiu-xu/Portafolio-fer">Ver el código de mi portafolio en GitHub ↗</a></p>
</div>
