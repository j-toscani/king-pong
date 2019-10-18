// // Collision with Wall
// function detectCollisionWallRight(object) {
//   return object.X >= canvas.width - object.width;
// }
// function detectCollisionWallLeft(object) {
//   return object.X <= 0;
// }
// function detectCollisionWallTop(object) {
//   return object.Y <= 0;
// }
// function detectCollisionWallBottom(object) {
//   return object.Y > canvas.height;
// }

// Collision between two Objects
export function detectCollisionBetween(firstObject, secondObject) {
  return (
    firstObject.y >= secondObject.y - firstObject.h &&
    firstObject.y <= secondObject.y + secondObject.h &&
    (firstObject.x + firstObject.w >= secondObject.x &&
      firstObject.x <= secondObject.x + secondObject.w)
  );
}
