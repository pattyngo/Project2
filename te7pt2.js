var words = ["Americano", "Latte", "Espresso", "Mocha", "Cappucinno"];
let clear;

function setup() {
  createCanvas(400, 400,100,20);
  textFont("Arial",36);
  noLoop();

  clear = createButton('Next Order');
  clear.position(120, 500);
  clear.style('font-size', '30px');
  clear.style('background-color', color(100));
  clear.mousePressed(redo);
}

function draw() {
  background(220);
  var randomword = random(words);//pick a random word!
  text(randomword, 50, 100);
}

function redo() {
  redraw(5);
}
