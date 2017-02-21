function setup() {  
  createCanvas(800, 600);
  console.log("Mojn");
    
}

var value = 0; 

function draw() {  
	fill(value);
	rect(0, 0, 800, 800);
	
	fill(255, 204, 0); 
	noStroke();
	ellipse(50, 50, 95, 95);
	ellipse(50, 150, 95, 95);
	ellipse(50, 250, 95, 95);
	ellipse(50, 350, 95, 95);
	ellipse(50, 450, 95, 95);
	ellipse(50, 550, 95, 95);
	
	ellipse(150, 50, 95, 95);
	ellipse(150, 150, 95, 95);
	ellipse(150, 250, 95, 95);
	ellipse(150, 350, 95, 95);
	ellipse(150, 450, 95, 95);
	ellipse(150, 550, 95, 95);
	
	ellipse(250, 50, 95, 95);
	ellipse(250, 150, 95, 95);
	ellipse(250, 250, 95, 95);
	ellipse(250, 350, 95, 95);
	ellipse(250, 450, 95, 95);
	ellipse(250, 550, 95, 95);
	
	ellipse(350, 50, 95, 95);
	ellipse(350, 150, 95, 95);
	ellipse(350, 250, 95, 95);
	ellipse(350, 350, 95, 95);
	ellipse(350, 450, 95, 95);
	ellipse(350, 550, 95, 95);
	
	ellipse(450, 50, 95, 95);
	ellipse(450, 150, 95, 95);
	ellipse(450, 250, 95, 95);
	ellipse(450, 350, 95, 95);
	ellipse(450, 450, 95, 95);
	ellipse(450, 550, 95, 95);
	
	ellipse(550, 50, 95, 95);
	ellipse(550, 150, 95, 95);
	ellipse(550, 250, 95, 95);
	ellipse(550, 350, 95, 95);
	ellipse(550, 450, 95, 95);
	ellipse(550, 550, 95, 95);
	
	ellipse(650, 50, 95, 95);
	ellipse(650, 150, 95, 95);
	ellipse(650, 250, 95, 95);
	ellipse(650, 350, 95, 95);
	fill(255, 20, 147);
	ellipse(650, 450, 95, 95);
	fill(255, 204, 0); 
	ellipse(650, 550, 95, 95);
	
	ellipse(750, 50, 95, 95);
	ellipse(750, 150, 95, 95);
	ellipse(750, 250, 95, 95);
	ellipse(750, 350, 95, 95);
	ellipse(750, 450, 95, 95);
	ellipse(750, 550, 95, 95);
	
	//Hvis jeg på et tidspunkt fatter at få ellipsen til at skifte farve ved klik
	//s = "click me! fix me!"
	//fill(50);
	//text(s, 608, 448, 700, 500);

}

function mouseMoved () {
value = value + 50;
if (value > 255) 
	value = 0;

}
