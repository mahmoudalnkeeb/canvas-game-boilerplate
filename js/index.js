import Circle from './classes/Circle.js';
import Rect from './classes/Rect.js';
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

let container = {
  width: innerWidth,
  height: innerHeight,
};

// responsive canvas
canvas.width = container.width;
canvas.height = container.height;

let rect = new Rect({
  x: container.width / 2,
  y: 50,
  w: 50,
  h: 50,
  container,
  context,
});

let circle = new Circle(
  container.width / 2 - 50,
  75,
  25,
  'red',
  context,
  container
);

function animate() {
  requestAnimationFrame(animate);
  context.clearRect(0, 0, container.width, container.height);
  rect.update();
  circle.update();
}

animate();
