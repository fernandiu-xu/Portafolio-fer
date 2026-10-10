'use strict';
// NOVA: plataformas, movimiento, saltos, objetos y proyectiles en canvas.
const $ = id => document.getElementById(id);
const canvas = $('board'), ctx = canvas.getContext('2d');
const W = 960, H = 540, FLOOR = 480;
const worlds = [
 {name:'Jardín mecánico',sky:['#253454','#6a5072'],accent:'#95ddd1',platforms:[[180,390,180],[440,310,190],[700,390,150]],pieces:[[260,364],[535,284],[770,364]],enemies:[[370,436,330,450],[650,436,580,820]]},
 {name:'Fábrica violeta',sky:['#251e45','#7a4270'],accent:'#ffb3d6',platforms:[[150,390,160],[370,300,170],[610,380,160]],pieces:[[225,364],[450,274],[690,354]],enemies:[[310,436,240,390],[570,436,460,700],[650,336,620,735]]},
 {name:'Estación lunar',sky:['#101c35','#3b5074'],accent:'#ffe799',platforms:[[170,390,160],[390,300,180],[650,380,150]],pieces:[[250,364],[480,274],[730,354]],enemies:[[300,436,230,380],[510,256,410,530],[620,436,550,770]]}
];
let mode='ready', level=0, hearts=3, count=0, time=0, last=0, shots=[], sparks=[], pieces=[], enemies=[], platforms=[], shootClock=0, jumpQueued=false, completed=0;
try { completed=Number(localStorage.getItem('fer-nova-completed'))||0; } catch (_) {}
$('best').textContent=`Misiones completadas: ${completed}`;
const input={left:false,right:false,fire:false};
const hero={x:55,y:FLOOR-44,w:32,h:44,vx:0,vy:0,facing:1,grounded:false,invincible:0,coyote:0};
function say(text){$('status').textContent=text;}
function clearInput(){input.left=input.right=input.fire=false;jumpQueued=false;}
function hud(){ $('level').textContent=`${level+1} / 3 · ${worlds[level].name}`; $('pieces').textContent=`${count} / 3`; $('hearts').textContent='♥ '.repeat(hearts).trim()||'0'; $('mission').textContent=count===3?'¡Estación activada! Lleva las piezas a la derecha →':'Recoge 3 piezas y entra en la estación iluminada.'; }
function overlay(tag,title,text,label){$('overlay-tag').textContent=tag;$('title').textContent=title;$('message').textContent=text;$('start').textContent=label;$('overlay').hidden=false;}
function loadLevel(index){
 level=index; hearts=3;count=0;shots=[];sparks=[];shootClock=0;clearInput();
 const world=worlds[level];platforms=[{x:0,y:FLOOR,w:W,h:60},...world.platforms.map(([x,y,w])=>({x,y,w,h:18}))];
 pieces=world.pieces.map(([x,y])=>({x,y,r:12,taken:false}));
 enemies=world.enemies.map(([x,y,min,max],i)=>({x,y,w:34,h:34,min,max,dir:i%2?-1:1,speed:40+level*9,alive:true}));
 Object.assign(hero,{x:55,y:FLOOR-44,vx:0,vy:0,facing:1,grounded:true,invincible:1,coyote:.1});
 mode='playing';$('overlay').hidden=true;$('pause').disabled=false;$('pause').textContent='Ⅱ';hud();canvas.focus();say(`Nivel ${level+1}. ${world.name}. Recoge las tres piezas.`);
}
function pause(){
 if(mode==='playing'){mode='paused';clearInput();overlay('PAUSA','Un respiro para Nova','Las piezas, las vidas y tu posición se conservan. Continúa cuando quieras.','Continuar →');$('pause').textContent='▶';say('Juego pausado.');}
 else if(mode==='paused'){mode='playing';$('overlay').hidden=true;$('pause').textContent='Ⅱ';canvas.focus();}
}
function overlap(a,b){return a.x<b.x+b.w&&a.x+a.w>b.x&&a.y<b.y+b.h&&a.y+a.h>b.y;}
function particles(x,y,color,n=12){for(let i=0;i<n;i++)sparks.push({x,y,vx:(Math.random()-.5)*170,vy:(Math.random()-.6)*170,life:.5+Math.random()*.3,color});}
function hurt(){
 if(hero.invincible>0)return; hearts--;particles(hero.x+16,hero.y+20,'#ffa9c5');hud();
 if(hearts<=0){mode='lost';clearInput();$('pause').disabled=true;overlay('PUEDES VOLVER A INTENTARLO','Nova necesita otra oportunidad',`Reinicia el nivel ${level+1}. Brinca sobre los drones o desactívalos con J. No hay límite de tiempo.`,'Reintentar nivel →');say('Sin vidas. Puedes reintentar este nivel.');$('start').focus();}
 else{hero.invincible=1.8;hero.vy=-250;hero.x=Math.max(0,Math.min(W-hero.w,hero.x-hero.facing*28));say(`Quedan ${hearts} vidas.`);}
}
function completeLevel(){
 clearInput();$('pause').disabled=true;
 if(level===worlds.length-1){mode='won';completed++;try{localStorage.setItem('fer-nova-completed',String(completed));}catch(_){}$('best').textContent=`Misiones completadas: ${completed}`;overlay('MISIÓN COMPLETADA','¡Los tres mundos tienen energía!','Nova entregó las nueve piezas. Terminaste la aventura: puedes volver a jugar desde el primer mundo.','Jugar otra vez →');say('Ganaste. Completaste los tres niveles.');}
 else{mode='level-complete';overlay('ESTACIÓN RESTAURADA',`¡Nivel ${level+1} completado!`,`Entregaste las tres piezas. La siguiente misión será en ${worlds[level+1].name}. Comenzarás con tres vidas.`,'Siguiente nivel →');say(`Nivel ${level+1} completado.`);}
 $('start').focus();
}
function update(dt){
 const world=worlds[level];hero.invincible=Math.max(0,hero.invincible-dt);shootClock=Math.max(0,shootClock-dt);
 hero.vx=((input.right?1:0)-(input.left?1:0))*235;
 if(hero.vx)hero.facing=Math.sign(hero.vx);
 hero.coyote=hero.grounded?.1:Math.max(0,hero.coyote-dt);
 if(jumpQueued&&hero.coyote>0){hero.vy=-640;hero.grounded=false;hero.coyote=0;particles(hero.x+16,hero.y+44,world.accent,6);}jumpQueued=false;
 hero.x+=hero.vx*dt;hero.x=Math.max(0,Math.min(W-hero.w,hero.x));
 // Colisiones horizontales solo con los laterales de plataformas elevadas.
 for(const p of platforms.slice(1))if(overlap(hero,p)){if(hero.vx>0)hero.x=p.x-hero.w;else if(hero.vx<0)hero.x=p.x+p.w;}
 const oldY=hero.y;hero.vy+=1600*dt;hero.y+=hero.vy*dt;hero.grounded=false;
 for(const p of platforms)if(overlap(hero,p)){
  if(hero.vy>=0&&oldY+hero.h<=p.y+2){hero.y=p.y-hero.h;hero.vy=0;hero.grounded=true;}
  else if(hero.vy<0&&oldY>=p.y+p.h-2){hero.y=p.y+p.h;hero.vy=0;}
 }
 if(input.fire&&shootClock<=0){shots.push({x:hero.x+(hero.facing>0?hero.w:-14),y:hero.y+18,w:14,h:6,vx:hero.facing*520,life:1.8});shootClock=.28;particles(hero.x+16+hero.facing*22,hero.y+21,'#ffe799',3);}
 pieces.forEach(p=>{if(!p.taken&&overlap(hero,{x:p.x-12,y:p.y-12,w:24,h:24})){p.taken=true;count++;particles(p.x,p.y,'#ffe799',18);hud();say(`Pieza ${count} de 3 recogida.`);}});
 for(const e of enemies)if(e.alive){e.x+=e.dir*e.speed*dt;if(e.x<e.min){e.x=e.min;e.dir=1;}if(e.x>e.max){e.x=e.max;e.dir=-1;}}
 for(let i=shots.length-1;i>=0;i--){const s=shots[i];s.x+=s.vx*dt;s.life-=dt;let hit=false;for(const e of enemies)if(e.alive&&overlap(s,e)){e.alive=false;hit=true;particles(e.x+17,e.y+17,'#b8e8e0',18);break;}if(hit||s.life<=0||s.x<-30||s.x>W+30)shots.splice(i,1);}
 for(const e of enemies)if(e.alive&&overlap(hero,e)){hurt();break;}
 if(mode==='playing'&&count===3&&hero.x+hero.w>875&&hero.y+hero.h>=FLOOR-8)completeLevel();
 if(hero.y>H+100){hero.y=FLOOR-hero.h;hero.x=55;hero.vy=0;hurt();}
 for(let i=sparks.length-1;i>=0;i--){const p=sparks[i];p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=180*dt;if(p.life<=0)sparks.splice(i,1);}
}
function rounded(x,y,w,h,r,fill){ctx.fillStyle=fill;ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fill();}
function drawBackground(){
 const world=worlds[level];const gradient=ctx.createLinearGradient(0,0,0,H);gradient.addColorStop(0,world.sky[0]);gradient.addColorStop(1,world.sky[1]);ctx.fillStyle=gradient;ctx.fillRect(0,0,W,H);
 ctx.fillStyle='#ffffff';ctx.globalAlpha=.35;for(let i=0;i<42;i++){const x=(i*137+31)%W,y=(i*73+22)%260;ctx.beginPath();ctx.arc(x,y,1+(i%3)*.5,0,Math.PI*2);ctx.fill();}ctx.globalAlpha=1;
 ctx.fillStyle=level===2?'#e3defb':'#c9adc8';ctx.globalAlpha=.16;ctx.beginPath();ctx.arc(825,95,53,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;
 for(let i=0;i<11;i++){const x=i*95-10,y=320+(i%3)*30;rounded(x,y,65,180,4,'#1b233755');ctx.fillStyle=world.accent;ctx.globalAlpha=.15;for(let j=0;j<4;j++)ctx.fillRect(x+12,y+15+j*24,10,8);ctx.globalAlpha=1;}
 ctx.fillStyle='#ffffff50';ctx.font='12px system-ui';ctx.fillText(`0${level+1} / ${world.name.toUpperCase()}`,28,35);
}
function drawGate(){
 const active=count===3,world=worlds[level];rounded(868,370,70,110,12,'#141a31');rounded(878,380,50,90,8,active?world.accent+'99':'#393b55');ctx.strokeStyle=active?world.accent:'#767082';ctx.lineWidth=3;ctx.strokeRect(882,384,42,86);
 ctx.fillStyle=active?'#ffe799':'#a5a0bd';ctx.font='bold 10px system-ui';ctx.textAlign='center';ctx.fillText(active?'ENTREGAR':'ESTACIÓN',903,359);ctx.textAlign='left';
 if(active){ctx.globalAlpha=.16+Math.sin(time*4)*.06;rounded(858,365,90,115,14,world.accent);ctx.globalAlpha=1;}
}
function drawHero(){
 if(hero.invincible>0&&Math.floor(time*12)%2===0)return;
 const x=hero.x,y=hero.y,step=hero.grounded&&hero.vx?Math.sin(time*15)*3:0;
 ctx.fillStyle='#242a40';ctx.beginPath();ctx.ellipse(x+16,y+47,22,5,0,0,Math.PI*2);ctx.fill();
 rounded(x+3,y+34+step,9,12,3,'#b183a8');rounded(x+20,y+34-step,9,12,3,'#b183a8');
 rounded(x-4,y+19,7,17,3,'#d99bb5');rounded(x+29,y+19,7,17,3,'#d99bb5');
 rounded(x,y+14,32,25,6,'#ecacc5');rounded(x-3,y,38,24,7,'#ffd1df');rounded(x+2,y+5,28,13,4,'#27394f');
 ctx.fillStyle='#aaf7eb';ctx.fillRect(x+7+hero.facing*2,y+9,4,4);ctx.fillRect(x+19+hero.facing*2,y+9,4,4);
 ctx.strokeStyle='#f8cadd';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(x+16,y);ctx.lineTo(x+16,y-7);ctx.stroke();ctx.fillStyle='#ffe799';ctx.beginPath();ctx.arc(x+16,y-8,3,0,Math.PI*2);ctx.fill();
 ctx.fillStyle='#ffe799';ctx.fillRect(x+10,y+27,12,5);
 // Las piezas recogidas viajan en la mochila de Nova.
 for(let i=0;i<count;i++)rounded(x+(hero.facing>0?-7:33),y+19+i*6,5,4,1,'#ffe799');
}
function draw(){
 ctx.clearRect(0,0,W,H);drawBackground();
 const world=worlds[level];
 platforms.forEach(p=>{rounded(p.x,p.y,p.w,p.h,p.y===FLOOR?0:7,p.y===FLOOR?'#26354b':'#49465e');rounded(p.x,p.y,p.w,5,2,world.accent);if(p.y===FLOOR){ctx.fillStyle='#ffffff09';for(let x=15;x<W;x+=45)ctx.fillRect(x,FLOOR+22,24,4);}else{ctx.fillStyle='#ffffff20';for(let x=p.x+12;x<p.x+p.w-10;x+=25)ctx.fillRect(x,p.y+9,10,3);}});
 drawGate();
 pieces.forEach(p=>{if(p.taken)return;const bob=Math.sin(time*3+p.x)*3;ctx.globalAlpha=.15;ctx.fillStyle='#ffe799';ctx.beginPath();ctx.arc(p.x,p.y+bob,23,0,Math.PI*2);ctx.fill();ctx.globalAlpha=1;rounded(p.x-10,p.y-11+bob,20,22,4,'#ffe799');rounded(p.x-5,p.y-5+bob,10,10,2,'#bd8158');ctx.fillStyle='#fff8d6';ctx.fillRect(p.x-3,p.y-3+bob,6,6);});
 enemies.forEach(e=>{if(!e.alive)return;const y=e.y+Math.sin(time*5+e.x)*2;rounded(e.x,y,e.w,e.h,9,'#605470');rounded(e.x+5,y+8,24,12,5,'#242338');ctx.fillStyle='#ff8dab';ctx.fillRect(e.x+12,y+12,10,4);ctx.strokeStyle='#a292bb';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(e.x-5,y+6);ctx.lineTo(e.x+e.w+5,y+6);ctx.stroke();});
 shots.forEach(s=>{ctx.shadowColor='#ffe799';ctx.shadowBlur=12;rounded(s.x,s.y,s.w,s.h,3,'#fff0ac');ctx.shadowBlur=0;});drawHero();
 sparks.forEach(p=>{ctx.globalAlpha=Math.min(1,p.life*2);ctx.fillStyle=p.color;ctx.fillRect(p.x,p.y,3,3);});ctx.globalAlpha=1;
}
function frame(t){const dt=Math.min((t-last)/1000||0,.025);last=t;time+=dt;if(mode==='playing')update(dt);draw();requestAnimationFrame(frame);}
$('start').addEventListener('click',()=>{if(mode==='paused')pause();else if(mode==='level-complete')loadLevel(level+1);else if(mode==='lost')loadLevel(level);else loadLevel(0);});
$('pause').addEventListener('click',pause);
window.addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(['arrowleft','arrowright','arrowup',' ','a','d','w','j','x','p'].includes(k))e.preventDefault();if(k==='p'&&!e.repeat)pause();if(mode!=='playing')return;if(k==='arrowleft'||k==='a')input.left=true;if(k==='arrowright'||k==='d')input.right=true;if([' ','w','arrowup'].includes(k)&&!e.repeat)jumpQueued=true;if(k==='j'||k==='x')input.fire=true;});
window.addEventListener('keyup',e=>{const k=e.key.toLowerCase();if(k==='arrowleft'||k==='a')input.left=false;if(k==='arrowright'||k==='d')input.right=false;if(k==='j'||k==='x')input.fire=false;});
for(const key of ['left','right','jump','fire']){const button=$(key);button.addEventListener('pointerdown',e=>{e.preventDefault();if(mode==='playing'){if(key==='jump')jumpQueued=true;else input[key]=true;}button.setPointerCapture(e.pointerId);});for(const t of ['pointerup','pointercancel','lostpointercapture'])button.addEventListener(t,()=>{if(key!=='jump')input[key]=false;});}
window.addEventListener('blur',()=>{clearInput();if(mode==='playing')pause();});document.addEventListener('visibilitychange',()=>{if(document.hidden&&mode==='playing')pause();});
// Vista previa del primer escenario antes de comenzar.
platforms=[{x:0,y:FLOOR,w:W,h:60},...worlds[0].platforms.map(([x,y,w])=>({x,y,w,h:18}))];pieces=worlds[0].pieces.map(([x,y])=>({x,y,taken:false}));
requestAnimationFrame(frame);
