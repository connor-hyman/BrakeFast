var myGuy,bg;

function preload(){
    myGuy = loadAnimation('imgs/player1.png','imgs/player2.png');
    
    bg = loadAnimation('imgs/bg1.png','imgs/bg2.png');
}

function setup() {
  createCanvas(800,400);
}

function draw() {
  background(140,120,160);
  animation(myGuy)(400,200);
    animation(bg)(100,100);
    animation(bg)(700,100);
    animation(bg)(100,300);
    animation(bg)(700,300);
}