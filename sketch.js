var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  //rabbit moving on Xaxis with mouse
rabbit.x=World.mouseX;


var select_sprites = Math.round(random(1,3));

if (frameCount % 80 ==0) {
  if (select_sprites == 2) {
    createApples();
  }else if (select_sprites == 2) {
    createOrange();
  }else {
    createRed();
  }
}
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  drawSprites()
}


function createApples(){
  apple =createSprite(random(50,350),40,10,10)
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY=3;
apple.lifetime=150;

}

function createOrange(){
  orangeL =createSprite(random(50,350),40,10,10)
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY=3;
orangeL.lifetime=150;

}

function createRed(){
  redL =createSprite(random(50,350),40,10,10)
  redL.addImage(orangeImg);
redL.scale=0.08;
redL.velocityY=3;
redL.lifetime=150;

}



