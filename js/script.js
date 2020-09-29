import Vector from './classes/Vector.js';
import Particle from './classes/Particle.js';

const $canvas = document.querySelector(`.canvas`),
  ctx = $canvas.getContext(`2d`),
  mouse = new Vector(0, 0);
  
let particles = [];

const init = () => {
  // mouse = new Vector(canvas.width / 2, canvas.height / 2);
  $canvas.addEventListener(`mousemove`, mousemove);
  draw();
};

const mousemove = event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
};

const draw = () => {
  // Canvas zwart maken
  ctx.fillStyle = `black`;
  ctx.fillRect(0, 0, $canvas.width, $canvas.height);
  
  const particle = new Particle(Math.random()*$canvas.width);
  particles.push(particle);
  particles.forEach(particle => {particle.draw(ctx);});
  
  console.log(mouse.x, mouse.y);

  // Elke 60fps uitvoeren
  window.requestAnimationFrame(draw);
}

init();
