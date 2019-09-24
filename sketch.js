let img;
function preload() {
  img = loadImage('pic.jpg');
}
function setup(){ 
  createCanvas(1000,800);
  background(0,0,0);
  image(img, 0, 0,800,800);
  var button;
  button = createButton('red');
  button.position(20, 19);
  button.mousePressed(changeCL1);
  button = createButton('blue');
  button.position(60, 19);
  button.mousePressed(changeCL2);
  button = createButton('black');
  button.position(106, 19);
  button.mousePressed(changeCL3);
   button = createButton('random');
  button.position(158, 19);
  button.mousePressed(changeCL4);
}

function changeCL1() {
  stroke(255,0,0);
  fill(255,0,0);
}

function changeCL2() {
  stroke(3,97,255);
  fill(3,97,255);
}

function changeCL3() {
  stroke(0,0,0);
  fill(0,0,0);
}

function changeCL4() {
  var val1 = random(0,255);
  var val2 = random(0,255);
  var val3 = random(0,255);
  stroke(val1,val2,val3);
  fill(val1,val2,val3);
}

function draw() {
  if(mouseIsPressed){
    strokeWeight(3);
    line(mouseX,mouseY,pmouseX,pmouseY);
  }
  if(keyIsPressed){
    clear();
    loadImage('pic.jpg', img => {
    image(img, 0, 00);
  });
  }
}