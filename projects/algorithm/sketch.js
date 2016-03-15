var myAlgo = [0,1,3,5,7,11,13,17,19];
var myPoem = ("You have brains in your head. You have feet in your shoes.You can steer yourself Any direction you choose.You’re on your own. And you know what you know.And YOU are the guy who’ll decide where to go. You’ll get mixed up, of course, as you already know. You’ll get mixed up with many strange birds as you go.So be sure when you step. Step with care and great tact and remember that Life’s A Great Balancing Act.");
var add= 0;

function setup() {
  createCanvas(1200, 1200);
   textSize(15);
  text(myPoem, 10, 30);
  var poemArray = myPoem.split(" ");

  for (var i = 0; i < poemArray.length; i ++) {
    // text(poemArray[myAlgo[myAlgo % myAlgo.length]], 10, 30);
    console.log(poemArray[add + myAlgo[add % 4]]);
    add ++;
  }
}


function draw() {
}