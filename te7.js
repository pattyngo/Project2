let espresso;
let milk;
let clear;
let water;
let foam;

let espressoCol;
let milkCol;
let waterCol;
let foamCol;

function setup() {
  createCanvas(700, 700);
  background(4, 44, 56);
  noStroke();

  espressoCol = color(41, 18, 2);
  milkCol = color(255);
  waterCol = color(42, 123, 156);
  foamCol = color (220);

  espresso = createButton('Espresso');
  espresso.position(120, 200);
  espresso.style('background-color', espressoCol);
  espresso.style('font-size', '30px');
  espresso.style('color', 'white');
  espresso.mousePressed(pourEspresso);

  milk = createButton('Steamed Milk');
  milk.position(120, 260);
  milk.style('background-color', milkCol);
  milk.style('font-size', '30px');
  milk.mousePressed(pourMilk);

  water = createButton('Water');
  water.position(120, 320);
  water.style('background-color', waterCol);
  water.style('font-size', '30px');
  water.style('color', 'white');
  water.mousePressed(pourWater);

  foam = createButton('Foam');
  foam.position(120, 380);
  foam.style('background-color', foamCol);
  foam.style('font-size', '30px');
  foam.mousePressed(pourFoam);

  clear = createButton('Clear');
  clear.position(120, 500);
  clear.style('font-size', '30px');
  clear.style('background-color', color(100));
  clear.mousePressed(empty);

}

function pourEspresso() {
  fill(espressoCol);

  rect(300, 260, 300, 100);
}

function pourMilk() {
  fill(milkCol);

  rect(300, 120, 300, 140);
}

function pourWater() {
  fill(waterCol);

  rect(300, 120, 300, 140);
}

function pourFoam() {
  fill(foamCol);

  rect(300, 100, 300, 20);
}

function empty() {
  background (4, 44, 56);
}

function draw() {
  fill(34, 87, 18,30);
  rect (300,50,20,300);
  rect (580,50,20,300);
  rect (300,350,300,20);
}
