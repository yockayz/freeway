function setup() {
  createCanvas(600, 400);
  soundtrack.loop();
}

function draw() {
  background(imgRoad);
  showActor();
  showCar();
  moveCar();
  moveActor();
  posCar();
  collideActor();
  showScore();
  makeScore();
}