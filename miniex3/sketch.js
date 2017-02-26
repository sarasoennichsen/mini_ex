var img;

function preload() {
  img = loadImage("images/background.jpg");
}  

function setup() {
  console.log("Mojn");
  createCanvas(850, 480);
  frameRate(12);
}

function draw() {
  tint(255, 127);
  image(img, 0, 0);
  drawThrobber(12);
  
  //fill(255);
  //textSize(25);
  //textFont("Courier");
  //text("Loading...", 380, 400);
}

function drawThrobber(num) {
  push();
  translate(width/2, height/2);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();
  fill(255);
  rect(50, 0, 50, 15);
  pop(0);
}