import Vector from './classes/Vector.js';

const canvas = document.querySelector(`.canvas`),
  ctx = canvas.getContext(`2d`),
  mouse = new Vector(0, 0);

const init = () => {
  canvas.addEventListener(`mousemove`, mousemove);
  draw();
};

const mousemove = event => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
};

const draw = () => {
  // Canvas zwart maken
  ctx.fillStyle = `black`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  console.log(mouse.x, mouse.y);

  // Elke 60fps uitvoeren
  window.requestAnimationFrame(draw);
}

init();
