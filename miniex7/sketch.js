var slider;
var checkboxone;
var checkboxtwo;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  slider = createSlider(0, 255, 18);
  slider.position(10, 10);
  slider.style('width', '400px');
  
  checkboxone = createCheckbox('"Sara enjoyed the weekend too much, and started coding her mini exercise too late. Oops."', true);
  checkboxone.changed(myCheckedEvent);
  checkboxone.position(20, 405);
  
  checkboxtwo = createCheckbox('"Despite Sara procrastinating all weekend, she did enjoy doing the mini exercise."', true);
  checkboxtwo.changed(myCheckedEvent);
  checkboxtwo.position(20, 430);
}

function draw() {
  var val = slider.value();
  background(val);
  
  fill(0);
  textSize(26);
  textStyle(BOLD);
  text("procrastination", 10, 100);
  textStyle(NORMAL);
  text("n.", 210, 100);
  textSize(20);
  text("1. the act or habit of procrastinating, or putting off or delaying, especially something requiring immediate attention.", 25, 130);
  
  textSize(26);
  textStyle(BOLD);
  text("procrastinate", 10, 250);
  textStyle(NORMAL);
  text("v.", 180, 250);
  textSize(20);
  text("1. to postpone or delay needlessly.", 25, 280);
  
  textStyle(ITALIC);
  textSize(18);
  text("EXAMPLES:", 10, 390);
}

function myCheckedEvent() {
  if (this.checked()) {
    console.log("Checking!");
  } else {
    console.log("Unchecking!");
  }
}