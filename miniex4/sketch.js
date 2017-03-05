var song;

var banana;

var disco;
var xposi = 0;
var yposi = 0;
var xspeed = 1;
var yspeed = 3.5;


function preload() {
  song = loadSound('assets/loco.mp3'); //Loco in Acapulco - Four Tops
  banana = loadImage('assets/banana.png');
  disco = createImg('assets/disco.gif');
}



function setup() {
  createCanvas(600, 600);
  background(206,193,231);
  
  song.setVolume(0.8);
  song.play();
  
  image(banana, width/2.5, height/3);
  
}



function draw() {
 disco.size(100, 100);
 disco.position(xposi, yposi);
 
  if (xposi > width || xposi < 0){
    xspeed = xspeed * -1;
  }
  if (yposi > height || yposi < 0){
    yspeed = yspeed * -1;
  }
  
  xposi = xposi + xspeed;
  yposi = yposi + yspeed;
  
}