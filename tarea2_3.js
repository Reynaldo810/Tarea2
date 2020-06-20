var x
var y
function setup() {
  createCanvas(400, 400);
  x=400
  y=200
}

function draw() {
  background(220);
  rectMode(CENTER)
  rect(200,200,x,x)
  ellipse(200,200,y,y)
  x=(x-1)
  y=(y-0.5)
}
