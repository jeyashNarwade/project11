
function preload(){
 var seaImg = loadImage("sea.png");
 var shipImg =loadAnimation(shipImg);
 spriteName.addImage(seaImg);

 if(sea.X < 0){
   sea.X =sea.width/ 2
 }

}

function setup(){
  createCanvas(400,400);
  seaImg.loadImage(seaImg);
  shipImg.loadAnimation(ship-2.png);
   ship.velocityX=3
}

function draw() {
  background("blue");
 
}