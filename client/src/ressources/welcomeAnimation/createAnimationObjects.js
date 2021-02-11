export default function createAnimationObjects() {
  const animationObjects = {
    ball: {
      x: 100,
      y: 100,
      w: 7,
      dx: 2,
      dy: 2
    },
    paddle1: {
      x: 0,
      y: 60 - 25,
      w: 10,
      h: 50,
      d: 7,
      style: "#415A8C"
    },
    paddle2: {
      x: 190,
      y: 180 - 25,
      w: 10,
      h: 50,
      d: 10,
      style: "#415A8C"
    }
  };
  return animationObjects;
}
