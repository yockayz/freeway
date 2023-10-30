let xAtor = 120;
let yAtor = 367;
let collide = false;
let myScore = 0;

function showActor() {
  image(imgAtor, xAtor, yAtor, 30, 30);
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 4;
  }
  if (keyIsDown(DOWN_ARROW) && yAtor < 367) {
    yAtor += 4;
  }
}

function collideActor()  {
  for (let i = 0; i < imgCars.length; i++) {
    collide = collideRectCircle(xCar[i], yCar[i], widthCar, heightCar, xAtor, yAtor, 15)
    if (collide) {
      yAtor = 367;
      collidesong.play();
      if (myScore > 0) { 
        myScore--;
      }  
    }
  }
}

function showScore() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(myScore, width / 4, 27);
}

function makeScore() {
  if (yAtor < 15) {
    myScore++;
    yAtor = 367;
    scoresong.play();
  }
}