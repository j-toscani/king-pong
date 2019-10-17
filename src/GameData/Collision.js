// Collision with Wall
function detectCollisionWallRight(object) {
  return object.X >= canvas.width - object.width;
}
function detectCollisionWallLeft(object) {
  return object.X <= 0;
}
function detectCollisionWallTop(object) {
  return object.Y <= 0;
}
function detectCollisionWallBottom(object) {
  return object.Y > canvas.height;
}

// Collision between two Objects
function detectCollisionBetween(firstObject, secondObject) {
  return (
    firstObject.Y >= secondObject.Y - firstObject.height &&
    firstObject.Y <= secondObject.Y + secondObject.height &&
    (firstObject.X + firstObject.width >= secondObject.X &&
      firstObject.X <= secondObject.X + secondObject.width)
  );
}
