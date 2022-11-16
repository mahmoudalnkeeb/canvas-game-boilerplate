import Circle from './classes/Circle.js';
import Rect from './classes/Rect.js';
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// responsive canvas
canvas.width = 64 * 16;
canvas.height = 64 * 9;

let rect = new Rect(
  canvas.width / 2,
  canvas.height / 2,
  50,
  50,
  'red',
  context
);
let circle = new Circle(
  canvas.width / 2 - 50,
  canvas.height / 2 + 25,
  25,
  'red',
  context
);

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, canvas.width, canvas.height);
  rect.update();
  circle.update();
}

animate();
