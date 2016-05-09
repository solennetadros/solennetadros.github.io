var steak1x;
var steak2x;
var steak3x;
var smokex;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;

var isCooked = false;
var movingright = false;

function preload() {
  img1 = loadImage("data/steak1.png");
  img2 = loadImage("data/steak2.png");
  img3 = loadImage("data/steak3.png");
  img4 = loadImage("data/fire.png");
  img5 = loadImage("data/plate.png");
  img6 = loadImage("data/forkk.png");
  img7 = loadImage("data/smoke.png");
}

function setup() {
  movingright = true;
  isCooked = false;
  createCanvas(640, 360);
  background(0);

  steak1x = 0;
  steak2x = width / 3 - 50;
  steak3x = width / 3 + 150;
}

function draw() {
  background(255);


  if (steak1x <= width / 3 - 100) {
    image(img1, steak1x, 0, 200, 200);
    steak1x += 1;
    image(img4, -100, 75);
  } else if (steak2x < width / 3 + 100) {
    image(img2, steak2x, 0, 200, 200);
    steak2x += 1;
    image(img4, -100, 75);
  } else if (steak3x < width / 3 + 350) {
    image(img3, steak3x, 0, 200, 200);
    steak3x += 1;
    image(img4, -100, 75);
  } else {
    image(img4, -100, 75);

    isCooked = true;
    textSize(20);
    fill(0, 0, 255);
    text("Click to eat your STEAK", 150, 300);

  }
  image(img7, smokex, 0, 450, 244);
  if (movingright == true) {
    smokex += 5;
  } else {
    smokex -= 5;
  }
  if (smokex > width - 450) {
    movingright = false;
  }
  if (smokex < 0) {
    movingright = true;
  }
  if (isCooked == true) {

   if (mouseIsPressed == true) {
      background(0);

      image(img5, 0, 0);
      image(img6, mouseX, mouseY);
    }
  }
}