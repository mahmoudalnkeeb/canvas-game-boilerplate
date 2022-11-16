export default class Rect {
  constructor(x, y, w, h , color, context) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color
    this.context = context;
  }

  draw() {
    this.context.fillStyle = this.color;
    this.context.fillRect(this.x, this.y, this.w, this.h);
  }
  update() {
    this.draw();
  }
}
