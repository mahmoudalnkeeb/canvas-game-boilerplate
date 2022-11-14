export default class Rect {
  constructor({ x, y, w, h, container, context }) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.gravity = 0.3;
    this.container = container;
    this.ground = this.container.height - this.h;
    this.context = context;
  }

  draw() {
    this.context.strokeStyle = 'black';
    this.context.strokeRect(this.x, this.y, this.w, this.h);
    this.context.fillStyle = 'red';
    this.context.fillRect(this.x, this.y, this.w, this.h);
  }
  update() {
    this.applyGravity()
    this.draw();
  }

  applyGravity() {
    this.velocity.y += this.gravity;
    this.y += this.velocity.y;
    this.checkGround();
  }

  checkGround() {
    if (this.y > this.ground) {
      this.y = this.ground;
    }
  }
}
