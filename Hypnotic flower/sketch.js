let flowers = []; 
let num = 15;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  for (let i=0; i<num; i++) {

    flowers[i] = new Flower(140 - i*10, 100, 15, 7, (i+1)*0.1);

  }
  
}

function draw() {
  background(22);
  translate(width/2, height/2);
  for (let i=0; i<num; i++) {
    flowers[i].display();
  }
  
}