export default class Circle {
  /**
   * @param {number} x
   * @param {number} y
   * @param {number} radius
   * @param {string} color
   * @param {CanvasRenderingContext2D} c
   */
  constructor( x, y, radius, color, context ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.context = context;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.context.fill();
    this.context.closePath();
  }
  update() {
    this.draw();
  }
}
