let imgRoad;
let imgAtor;
let imgCar;
let imgCar2;
let imgCar3;

let scoresong;
let collidesong;
let soundtrack;

function preload() {
  imgRoad = loadImage("img/estrada.png");
  imgAtor = loadImage("img/ator-1.png");
  imgCar = loadImage("img/carro-1.png");
  imgCar2 = loadImage("img/carro-2.png");
  imgCar3 = loadImage("img/carro-3.png");
  imgCars = [imgCar, imgCar2, imgCar3, imgCar, imgCar2, imgCar3];
  
  scoresong = loadSound("sons/pontos.wav");
  collidesong = loadSound("sons/colidiu.mp3");
  soundtrack = loadSound("sons/trilha.mp3");
}