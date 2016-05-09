var rectW = 100;
var rectH = 60;

function setup () {
  createCanvas(windowWidth,windowHeight);
}

  function draw() {
    background (0);
    for (var rectX=0; rectX<width; rectX+=120) {
      for (var rectY = 0; rectY<height; rectY+=80){
        if ( (mouseX > rectX) && (mouseX < rectX +rectW) &&
           (mouseY > rectY) && (mouseY< rectY + rectH )) {
      fill (random(255), random(255), random(255));
    } else {
      fill (255) ;
    }
    rect (rectX, rectY, rectW, rectH);

    }
  }
}
