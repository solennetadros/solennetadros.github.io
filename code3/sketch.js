var img;
var bubbles = [];

function preload() {
  img = loadImage('selfie.jpg');
}

function setup() {
  createCanvas(1280,960)
  for (var i = 0; i < 100; i++) {
    bubbles[i] = new Bubble(random(width), random(height));
  }

}

function draw() {
  
  
  clear();
  image(img, 0, 0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].update();
    bubbles[i].display();
    if (bubbles[i].dead()) {
      bubbles.splice(i, 1); //position, amount to remove; splice function kills something
    }
    for (var j = i + 1; j < bubbles.length; j++) { //make sure it doesnt equal its self
      //check for intersections
      bubbles[i].intersects(bubbles[j]);
    }
  }
  if (bubbles.length > 50) {
    bubbles.splice(0, 1);
  }
  
  star(mouseX,mouseY, 30, 70, 5); 

  println(bubbles.length);

}

function mousePressed() {
  var b = new Bubble(mouseX, mouseY);
  bubbles.push(b);

}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function mouseDragged() {
  var b = new Bubble(mouseX, mouseY);
  bubbles.push(b);
}

function Bubble(x, y) { //"blueprint", "class", ect
  this.x = x; //using 'this' so it knows exactly which 'x' we're talking abt
  this.y = y;
  this.lifetime = 50;
  this.col = color(random(255),random(255),random(255), 50);

  this.display = function() { //function to actually draw bubbles
    fill(this.col);
   
    star(this.x, this.y, this.lifetime/2, this.lifetime, 5)
  };

  this.update = function() { //adds some movement
    this.lifetime -= 0.2;
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  };

  this.dead = function() {
    if (this.lifetime < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.intersects = function(other) {
    var d = dist(this.x, this.y, other.x, other.y);
    if (d < this.lifetime / 2 + other.lifetime / 2) { //divide by two to get radius
      this.col = color(random(255),random(255),random(255),50);
      //other.col = random(255);
    }
  }

}