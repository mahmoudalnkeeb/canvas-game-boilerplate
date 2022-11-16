export function sin(rad) {
  return Math.sin(rad);
}
export function cos(rad) {
  return Math.cos(rad);
}

export function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getDistenceBetweenTwoPoints(x1, x2, y1, y2) {
  return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}
