function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomFloat(min, max) {
  return (Math.random() * (max - min)) + min;
}

function getRandomBoolean() {
  return Math.random() >= 0.5;
}
