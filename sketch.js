let img;

function preload(){
  img = loadImage("giant woman.jpg");
}

function setup() {
  createCanvas(1280, 657);
}


function draw() {
  background(color (125, 0, 0));
  
  image(img, 450, 40);
}
