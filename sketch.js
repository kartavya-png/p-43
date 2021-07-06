var backImage,backgr;
var player, player_running;
var ground,ground_img;
var bananaGroup ;
var END =0;
var PLAY =1;
var gameState = PLAY;
var bananaImg ;
var obstaclesImg , obstaclesGroup ;


function preload(){
  backImage=loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bananaImage = loadImage("banana.png")
obstaclesImage = loadImage("stone.png")

}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
     
  bananaGroup = new Group() ;
 
  obstaclesGroup = new Group() ;

}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

spawnBanana();
spawnObstacles();
  }

  drawSprites();
}


function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(800,390,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = player.depth;
    player.depth = banana.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  

  }
  
}




function spawnObstacles() {

  if (frameCount % 200 === 0) {
    var obstacles = createSprite(800,120,40,10);
  //   obstacles.y = Math.round((80,120));
    obstacles.addImage(obstaclesImage);
    obstacles.scale = 0.5;
    obstacles.velocityX = -4;
    
     //assign lifetime to the variable
    obstacles.lifetime = 200;
    
  
    
    //add each cloud to the group
    obstaclesGroup.add(obstacles);
  





}















}