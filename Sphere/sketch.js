let fullGrid = false; // toggle between styles

function setup() {
  createCanvas(600, 600, WEBGL);
  stroke(255);
  strokeWeight(1.5);
  noFill();
}

function draw() {
  background(0);
  rotateY(frameCount * 0.01);
  rotateX(0.4);

  const radius = 250;

  // cool halo effect
  push();
  noFill();
  stroke(255, 50); // semi-transparent white
  strokeWeight(3);
  sphere(radius + 10, 24, 16);
  pop();

  if (fullGrid) {
    sphere(radius, 24, 16); // full grid
  } else {
    sphere(radius, 24, 2); // longitude lines only
  }
}
