var boids = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	
	//the initial set of boids
	for (var i = 0; i < 150; i++) {
	boids[i] = new Boid(random(width), random(height));
	
	}
}


function draw () {
	background(255, 185, 97);
	//run all the boids
	for (var i = 0; i < boids.length; i++) {
	boids[i].run(boids);
	}
}


function Boid(x, y) {
	this.acceleration = createVector(0, 0);
	this.velocity = p5.Vector.random2D();
	this.position = createVector(x, y);
	this.r = 4.0;
	this.maxspeed = 2;
	this.maxforce = 0.1;

}

Boid.prototype.run = function(boids) {
	this.flock(boids);
	this.update();
	this.borders();
	this.render();

}

//forces go into acceleration
Boid.prototype.applyForce = function(force) {
	this.acceleration.add(force);
}

//accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
	var sep = this.seperate(boids); //seperates
	var ali = this.align(boids); //alignment
	var coh = this.cohesion(boids); //cohesion
	
	sep.mult(2.0);
	ali.mult(1.0);
	coh.mult(1.0);
	
	this.applyForce(sep);
	this.applyForce(ali);
	this.applyForce(coh);
}

//method to update location
Boid.prototype.update = function() {
	this.velocity.add(this.acceleration); //update velocity
	//limit speed
	this.velocity.limit(this.maxspeed);
	this.position.add(this.velocity);
	
	this.acceleration.mult(0); //resets acceleration to 0 each cycle
}

//calculates and applies a steering force towards a target
Boid.prototype.seek = function(target) {
	var desired = p5.Vector.sub(target, this.position); //vector pointing from the location to the target
	
	desired.normalize();
	desired.mult(this.maxspeed);
	
	var steer = p5.Vector.sub(desired, this.velocity);
	steer.limit(this.maxforce);
	return steer;
}

//draws boid as a rectangle
Boid.prototype.render = function () {
	fill(255);
	noStroke();
	ellipse(this.position.x, this.position.y, 10, 10);
}

Boid.prototype.borders = function() {
	if (this.position.x < -this.r) this.position.x = width + this.r;
	if (this.position.y < -this.r) this.position.y = height + this.r;
	if (this.position.x > width + this.r) this.position.x = -this.r;
	if (this.position.y > height + this.r) this.position.y = -this.r;
}

//checks for nearby boids and steers away to seperate
Boid.prototype.seperate = function(boids) {
	var desiredseperation = 22.5;
	var steer = createVector(0, 0);
	var count = 0;
//for every boid, check if it's too close
	for (var i = 0; i < boids.length; i++) {
		var d = p5.Vector.dist(this.position, boids[i].position);
		if ((d > 0) && (d < desiredseperation)) {
		var diff = p5.Vector.sub(this.position, boids[i].position);
		diff.normalize();
		diff.div(d);
		steer.add(diff);
		count++;
		}
	}
	if (count > 0) {
	steer.div(count);
	}
	
	if (steer.mag() > 0) {
	steer.normalize();
	steer.mult(this.maxspeed);
	steer.sub(this.velocity);
	steer.limit(this.maxforce);
	}
	return steer;
}




//for every nearby boid, calculate the average velocity
Boid.prototype.align = function(boids) {
	var neighbordist = 40;
	var sum = createVector(0, 0);
	var count = 0;
	for (var i = 0; i < boids.length; i++) {
		var d = p5.Vector.dist(this.position, boids[i].position);
		if ((d > 0) && (d < neighbordist)) {
			sum.add(boids[i].velocity);
			count++;
			}
		}
	if (count > 0) {
	sum.div(count);
	sum.normalize();
	sum.mult(this.maxspeed);
	var steer = p5.Vector.sub(sum, this.velocity);
	steer.limit(this.maxforce);
	return steer;
	} else {
	return createVector(0, 0);
	}
}

//cohesion
Boid.prototype.cohesion = function(boids) {
	var neighbordist = 40;
	var sum = createVector(0, 0);
	var count = 0;
	for (var i = 0; i < boids.length; i++) {
	  var d = p5.Vector.dist(this.position, boids[i].position);
		if ((d > 0) && (d < neighbordist)) {
		sum.add(boids[i].position);
		count++;
		}
	}
if (count > 0) {
	sum.div(count);
	return this.seek(sum);
	} else {
	return createVector(0, 0);
	}
}
