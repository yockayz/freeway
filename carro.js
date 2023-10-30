let xCar = [600, 600, 600, 600, 600, 600];
let yCar = [40, 96, 150, 210, 270, 318];
let velCar = [2, 2.5, 3.2, 5, 3.3, 2.3];
let widthCar = 50;
let heightCar = 40;

function showCar() {
  for (let i = 0; i < imgCars.length; i++) {
    image(imgCars[i], xCar[i], yCar[i], widthCar, heightCar);
  }  
}

function moveCar() {
  for (let i = 0; i < imgCars.length; i++) {
    xCar[i] -= velCar[i];
  }
}

function posCar() {
  for (let i = 0; i < imgCars.length; i++) {
    if (passScreen(xCar[i])) {
    xCar[i] = 600;
    }
  }  
}

function passScreen(xCar) {
  return xCar < - 50;
}