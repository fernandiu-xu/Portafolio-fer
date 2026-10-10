'use strict';
// HTML contiene la pantalla; CSS la presenta; JavaScript controla la partida.
const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const $ = id => document.getElementById(id);
const WIDTH = canvas.width, HEIGHT = canvas.height, GOAL = 12;
const keys = { left: false, right: false };
let mode = 'ready', score = 0, lives = 3, items = [], spawnClock = 0, lastTime = 0;
let best = 0;
try { best = Number(localStorage.getItem('fer-robot-record')) || 0; } catch (_) {}
const robot = { x: WIDTH / 2 - 24, y: HEIGHT - 62, w: 48, h: 44 };
$('record').textContent = best;
function announce(text) { $('status').textContent = text; }
function updateScore() {
  $('score').textContent = `${score} / ${GOAL}`;
  $('lives').textContent = '♥ '.repeat(lives).trim() || '0';
  if (score > best) {
    best = score; $('record').textContent = best;
    try { localStorage.setItem('fer-robot-record', String(best)); } catch (_) {}
  }
}
function showOverlay(title, text, label) {
  $('message-title').textContent = title; $('message').textContent = text;
  $('start').textContent = label; $('overlay').hidden = false;
}
function clearInput() { keys.left = keys.right = false; }
function startGame() {
  mode = 'playing'; score = 0; lives = 3; items = []; spawnClock = .4;
  robot.x = WIDTH / 2 - robot.w / 2; clearInput(); updateScore();
  $('overlay').hidden = true; $('pause').disabled = false; $('pause').textContent = 'Pausar';
  announce('Partida iniciada. Recoge 12 estrellas.'); canvas.focus();
}
function togglePause() {
  if (mode === 'playing') {
    mode = 'paused'; clearInput(); $('pause').textContent = 'Continuar';
    showOverlay('Un pequeño descanso', 'Tu partida está guardada mientras haces una pausa.', 'Continuar');
    announce('Partida pausada.');
  } else if (mode === 'paused') {
    mode = 'playing'; $('overlay').hidden = true; $('pause').textContent = 'Pausar'; canvas.focus();
    announce('Partida reanudada.');
  }
}
function finish(won) {
  mode = 'finished'; clearInput(); $('pause').disabled = true;
  const title = won ? '¡Misión cumplida!' : '¡Inténtalo otra vez!';
  const text = won ? 'Recogiste las 12 estrellas. Tu robot está listo para una nueva misión.' : `Recogiste ${score} de 12 estrellas. Puedes volver a empezar cuando quieras.`;
  showOverlay(title, text, 'Volver a jugar'); announce(`${title} ${text}`); $('start').focus();
}
// Los objetos aparecen arriba y caen a una velocidad moderada.
function spawn() {
  const star = Math.random() < .72;
  items.push({ x: 20 + Math.random() * (WIDTH - 40), y: -20, r: star ? 13 : 16,
    speed: star ? 110 : 95, star });
}
function intersects(item) {
  return item.x + item.r > robot.x && item.x - item.r < robot.x + robot.w &&
    item.y + item.r > robot.y && item.y - item.r < robot.y + robot.h;
}
function update(dt) {
  robot.x += ((keys.right ? 1 : 0) - (keys.left ? 1 : 0)) * 300 * dt;
  robot.x = Math.max(0, Math.min(WIDTH - robot.w, robot.x));
  spawnClock += dt;
  if (spawnClock >= .85) { spawnClock = 0; spawn(); }
  for (let i = items.length - 1; i >= 0; i--) {
    const item = items[i]; item.y += item.speed * dt;
    if (intersects(item)) {
      items.splice(i, 1);
      if (item.star) { score++; announce(`Estrella recogida. ${score} de ${GOAL}.`); }
      else { lives--; announce(`Un bloque te alcanzó. Quedan ${lives} vidas.`); }
      updateScore();
      if (score >= GOAL || lives <= 0) { finish(score >= GOAL); break; }
    } else if (item.y - item.r > HEIGHT) { items.splice(i, 1); }
  }
}
function drawStar(x, y, r) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const angle = -Math.PI / 2 + i * Math.PI / 5, radius = i % 2 ? r * .46 : r;
    const px = x + Math.cos(angle) * radius, py = y + Math.sin(angle) * radius;
    i ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
  }
  ctx.closePath(); ctx.fillStyle = '#f2ca4e'; ctx.fill(); ctx.strokeStyle = '#b48c28'; ctx.lineWidth = 2; ctx.stroke();
}
function drawRobot() {
  const { x, y, w, h } = robot;
  ctx.fillStyle = '#bd7390'; ctx.fillRect(x + 7, y + h - 4, 10, 10); ctx.fillRect(x + w - 17, y + h - 4, 10, 10);
  ctx.fillStyle = '#f4b6c2'; ctx.fillRect(x, y, w, h); ctx.strokeStyle = '#8a3657'; ctx.lineWidth = 2; ctx.strokeRect(x, y, w, h);
  ctx.beginPath(); ctx.moveTo(x + w / 2, y); ctx.lineTo(x + w / 2, y - 9); ctx.stroke();
  ctx.fillStyle = '#8a3657'; ctx.beginPath(); ctx.arc(x + w / 2, y - 10, 3, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#fff'; ctx.fillRect(x + 7, y + 8, 34, 20);
  ctx.fillStyle = '#513640'; ctx.fillRect(x + 14, y + 14, 5, 7); ctx.fillRect(x + 29, y + 14, 5, 7);
  ctx.fillStyle = '#fff1a8'; ctx.fillRect(x + 15, y + 33, 18, 4);
}
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT); ctx.fillStyle = '#fffdf3'; ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = '#efdce5';
  for (let x = 20; x < WIDTH; x += 40) for (let y = 20; y < HEIGHT - 22; y += 40) { ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill(); }
  ctx.fillStyle = '#e8b6c8'; ctx.fillRect(0, HEIGHT - 12, WIDTH, 12);
  items.forEach(item => {
    if (item.star) drawStar(item.x, item.y, item.r);
    else {
      ctx.fillStyle = '#8b7c92'; ctx.fillRect(item.x - item.r, item.y - item.r, item.r * 2, item.r * 2);
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.beginPath();
      ctx.moveTo(item.x - 6, item.y - 6); ctx.lineTo(item.x + 6, item.y + 6);
      ctx.moveTo(item.x + 6, item.y - 6); ctx.lineTo(item.x - 6, item.y + 6); ctx.stroke();
    }
  }); drawRobot();
}
function frame(time) {
  const dt = Math.min((time - lastTime) / 1000 || 0, .05); lastTime = time;
  if (mode === 'playing') update(dt);
  draw(); requestAnimationFrame(frame);
}
$('start').addEventListener('click', () => mode === 'paused' ? togglePause() : startGame());
$('pause').addEventListener('click', togglePause);
window.addEventListener('keydown', event => {
  const key = event.key.toLowerCase();
  if (['arrowleft', 'arrowright', 'a', 'd', 'p'].includes(key)) event.preventDefault();
  if (mode === 'playing') {
    if (key === 'arrowleft' || key === 'a') keys.left = true;
    if (key === 'arrowright' || key === 'd') keys.right = true;
  }
  if (key === 'p' && !event.repeat) togglePause();
});
window.addEventListener('keyup', event => {
  const key = event.key.toLowerCase();
  if (key === 'arrowleft' || key === 'a') keys.left = false;
  if (key === 'arrowright' || key === 'd') keys.right = false;
});
for (const direction of ['left', 'right']) {
  const button = $(direction);
  button.addEventListener('pointerdown', event => {
    event.preventDefault(); if (mode === 'playing') keys[direction] = true;
    button.setPointerCapture(event.pointerId);
  });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) button.addEventListener(type, () => { keys[direction] = false; });
}
window.addEventListener('blur', () => { clearInput(); if (mode === 'playing') togglePause(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && mode === 'playing') togglePause(); });
requestAnimationFrame(frame);
