export default class Circle {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   * @param {string} color
   * @param {CanvasRenderingContext2D} c
   */
  constructor(x, y, radius, color, c, container) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.c = c;
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.gravity = 0.3;
    this.container = container;
    this.ground = this.container.height - this.radius;
  }

  draw() {
    this.c.beginPath();
    this.c.fillStyle = this.color;
    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.c.fill();
    this.c.closePath();
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
