// buttons
let espresso;
let milk;
let clear;
let water;
let foam;
let chai;
let matcha;
let choco;

// color
let espressoCol;
let milkCol;
let waterCol;
let foamCol;
let chaiCol
let matchaCol;
let chocoCol;

var words = ["Americano", "Latte", "Espresso", "Mocha", "Chai Latte", "Matcha"];
let order;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(26, 39, 51);
  rectMode(CENTER);
  noStroke();

  espressoCol = color(41, 18, 2);
  milkCol = color(255);
  waterCol = color(42, 123, 156);
  foamCol = color(220);
  chaiCol = color(163, 105, 28);
  matchaCol = color(171, 212, 163);
  chocoCol = color(26, 13, 1);

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

  chai = createButton('Chai');
  chai.position(120, 440);
  chai.style('background-color', chaiCol);
  chai.style('font-size', '30px');
  chai.mousePressed(pourChai);
    
  matcha = createButton('Matcha');
  matcha.position(120, 500);
  matcha.style('background-color', matchaCol);
  matcha.style('font-size', '30px');
  matcha.mousePressed(pourMatcha);
    
  choco = createButton('Chocolate');
  choco.position(120, 560);
  choco.style('background-color', chocoCol);
  choco.style('font-size', '30px');
  choco.style('color', 'white');
  choco.mousePressed(pourChoco);
    
  clear = createButton('Clear');
  clear.position(width/2-100, 600);
  clear.style('font-size', '30px');
  clear.style('background-color', color(100));
  clear.mousePressed(empty);
    
  order = createButton('Next Order');
  order.position(width-230, height-80);
  order.style('font-size', '30px');
  order.style('background-color', color(100));
  order.mousePressed(redo);

  serve = createButton('Serve');
  serve.position(width/2+35, 600);
  serve.style('font-size', '30px');
  serve.style('background-color', color(100));
  serve.mousePressed(addFunds);
    
}

function pourEspresso() {
  fill(espressoCol);

  rect (width/2,460,300,130);
  //make a cup
push()
  fill(54, 89, 47);
  noStroke();
  rect (width/2+150,370,20,350);
  rect (width/2-150,370,20,350);
  rect (width/2,535,300,20);
pop()
//cup handle
push();
  noFill();
  stroke(54, 89, 47)
  strokeWeight(20);
  arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
pop();
}

function pourMilk() {
  fill(milkCol);

  rect (width/2,330,300,130);
  //make a cup
push()
  fill(54, 89, 47);
  noStroke();
  rect (width/2+150,370,20,350);
  rect (width/2-150,370,20,350);
  rect (width/2,535,300,20);
pop()
//cup handle
push();
  noFill();
  stroke(54, 89, 47)
  strokeWeight(20);
  arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
pop();
}

function pourWater() {
  fill(waterCol);

  rect (width/2,330,300,130);
  //make a cup
push()
  fill(54, 89, 47);
  noStroke();
  rect (width/2+150,370,20,350);
  rect (width/2-150,370,20,350);
  rect (width/2,535,300,20);
pop()
//cup handle
push();
  noFill();
  stroke(54, 89, 47)
  strokeWeight(20);
  arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
pop();
}

function pourFoam() {
  fill(foamCol);

  rect (width/2,250,300,30);
  //make a cup
push()
  fill(54, 89, 47);
  noStroke();
  rect (width/2+150,370,20,350);
  rect (width/2-150,370,20,350);
  rect (width/2,535,300,20);
pop()
//cup handle
push();
  noFill();
  stroke(54, 89, 47)
  strokeWeight(20);
  arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
pop();
}

function pourChai() {
  fill(chaiCol);

  rect (width/2,460,300,130);
  //make a cup
push()
  fill(54, 89, 47);
  noStroke();
  rect (width/2+150,370,20,350);
  rect (width/2-150,370,20,350);
  rect (width/2,535,300,20);
pop()
//cup handle
push();
  noFill();
  stroke(54, 89, 47)
  strokeWeight(20);
  arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
pop();
}

function pourMatcha() {
  fill(matchaCol);

  rect (width/2,460,300,130);
  //make a cup
push()
  fill(54, 89, 47);
  noStroke();
  rect (width/2+150,370,20,350);
  rect (width/2-150,370,20,350);
  rect (width/2,535,300,20);
pop()
//cup handle
push();
  noFill();
  stroke(54, 89, 47)
  strokeWeight(20);
  arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
pop();
}

function pourChoco() {
  fill(chocoCol);

  rect (width/2,400,300,30);
  //make a cup
push()
  fill(54, 89, 47);
  noStroke();
  rect (width/2+150,370,20,350);
  rect (width/2-150,370,20,350);
  rect (width/2,535,300,20);
pop()
//cup handle
push();
  noFill();
  stroke(54, 89, 47)
  strokeWeight(20);
  arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
pop();
}


function empty() {
  fill (26, 39, 51);
  rect (width/2,500,500,600);
  //make a cup
push()
  fill(54, 89, 47);
  noStroke();
  rect (width/2+150,370,20,350);
  rect (width/2-150,370,20,350);
  rect (width/2,535,300,20);
pop()
//cup handle
push();
  noFill();
  stroke(54, 89, 47)
  strokeWeight(20);
  arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
pop();
}

//order a drink
function redo() {
  redraw(5);
}

function nextOrder() {
  push()
  noLoop();
  textSize(30);
  var randomword = random(words);//pick a random word!
  fill(0);
  noStroke();
  text("Hello, can a get a(n) ", width-330, height-200);
  text(randomword, width-330, height-160);
  pop();
}

//add money to earnings
var funds = 0

function addFunds() {
    funds += 5;
    fill(26, 39, 51);
    rect(width-5,1,400,300);
    rect (width/2,500,500,600);
    fill(54, 89, 47);
    textSize(40);
    text('Earnings: $'+funds, width-350, 100);
    //make a cup
    push()
      fill(54, 89, 47);
      noStroke();
      rect (width/2+150,370,20,350);
      rect (width/2-150,370,20,350);
      rect (width/2,535,300,20);
    pop()
    //cup handle
    push();
      noFill();
      stroke(54, 89, 47)
      strokeWeight(20);
      arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
    pop();
    }

function draw() {
//title    
  noStroke();
  textSize(40);
  fill(255);
  text('Barista Training Module', width/2-200, 100);
//order
  push()
  stroke(0);
  strokeWeight(3);
  rect(width-200,height-180,300,150,20);
  nextOrder();
  pop();
//make a cup
push()
  fill(54, 89, 47);
  noStroke();
  rect (width/2+150,370,20,350);
  rect (width/2-150,370,20,350);
  rect (width/2,535,300,20);
pop()
//cup handle
push();
  noFill();
  stroke(54, 89, 47)
  strokeWeight(20);
  arc(width/2-150, 370, 170, 200, PI / 2, 3 * PI / 2, OPEN);
pop();
  helpMe();
}

function helpMe (){
  rect(width-200,height/2-40,300,270);
  fill(0);
  textSize(20);
  text("Recipes",width-340,height/2-140);
  text("Americano: Espresso + Water",width-340,height/2-110);
  text("Chai Latte: Chai + Milk",width-340,height/2-70);
  text("Latte: Espresso + Milk + Foam",width-340,height/2-30);
  text("Matcha Latte: Matcha + Milk",width-340,height/2+10);
  text("Mocha: Espresso + Chocolate",width-340,height/2+50);
  text("+ Milk + Foam",width-340,height/2+80);

//  rect (width-200,height/2-40,300,270);
      
}