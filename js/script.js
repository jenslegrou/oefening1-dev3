import Vector from './classes/Vector.js';
import Particle from './classes/Particle.js';
import {random} from '../functions/lib.js' ;

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
  
	particles.push(new Particle(Math.random()* $canvas.width, 0));
  particles.forEach(particle => particle.draw(ctx));
  particles = particles.filter(particle => particle.isAlive);
  
  console.log(mouse.x, mouse.y);

  // Elke 60fps uitvoeren
  window.requestAnimationFrame(draw);
}

init();
