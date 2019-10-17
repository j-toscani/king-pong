export function setNewLevel(level) {
  if (level === 1) {
    drawLevel01();
  } else if (level === 2) {
    drawLevel02();
  } else if (level === 3) {
    drawLevel03();
  } else if (level === 4) {
    aöert("Your Rock!!! Thanks 4 playing <3");
  }
}

setNewLevel(1);
