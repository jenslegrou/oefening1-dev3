import Vector from './Vector.js';

export default class Particle {
  constructor(x, y) {
	this.location = new Vector(x, y);
	this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0.05);
    this.lifespan = 100;
  }
  draw(ctx) {
	this.velocity.add(this.acceleration);
	this.location.add(this.velocity);
    ctx.fillStyle = `rgba(255, 255, 255, ${ this .lifespan / 100})`;
    ctx.fillRect(this.location.x-1, this.location.y-1, 2, 2);
    this.lifespan--;
  }
  get isAlive() {
    return this .lifespan > 0 ;
    }
}