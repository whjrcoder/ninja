
function preload(){
  ninjaimg=loadAnimation("ninja1.png","ninja2.png")
  ninjaimg2=loadAnimation("ninja3.png")
  ninjaimg3=loadAnimation("ninja4.png")
  
  forest=loadImage("forest.png")
}
function setup() {
  createCanvas(800,400);
ninja=createSprite(0,200,20,20)
ninja.addAnimation("n",ninjaimg)
ninja.addAnimation("n2",ninjaimg2)
ninja.addAnimation("n3",ninjaimg3)

inviground=createSprite(400,390,800,5)
inviground.visible=false
}

function draw() {
  background(forest); 
 
  ninja.velocityX=5;
 //camera.position.x=ninja.x
  if(keyDown("space")){
    //ninja.velocityX=0;
    ninja.velocityY=-8;
    ninja.changeAnimation("n2",ninjaimg2)
}
ninja.velocityY=ninja.velocityY+3
ninja.changeAnimation("n",ninjaimg)
ninja.collide(inviground)
  drawSprites();
}