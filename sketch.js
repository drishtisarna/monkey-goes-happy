
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,300);
  
  //to create monkey Sprite & add animation to it
  monkey = createSprite(100,260,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  //to create ground Sprite & give a velocity to it
  ground = createSprite(300,300,1200,20);
  ground.velocityX = -4;
  ground.shapeColor = ("brown");
  
  //to give the ground an infinite scrolling effect
  ground.x = ground.width /2;
  
  //to create score variable
  score = 0;
  
  //to create groups
  fruitG = createGroup();
  obstacleG = createGroup();
}


function draw() {
  
  background("white");
  
  //to give the ground an infinite scrolling effect
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //to make the monkey jump when space key is pressed
    if(keyDown("space")&& monkey.y >= 230) {
        monkey.velocityY = -12;
    }
  
  //to give the gravity to the monkey
  monkey.velocityY = monkey.velocityY + 0.7;
  
   //to make the monkey collide from the ground
   monkey.collide(ground);
  
  //to give the score
  text("survival time: "+ score, 500,50);
  score = score + Math.round(getFrameRate()/60);
  
  //groups
  banana();
  obstacles();

  drawSprites();
  
}

function banana() {
  // to create the fruit sprite
  if (frameCount % 80 === 0){
  var fruit = createSprite(600,Math.round(random(200, 20)), 10, 10);
  fruit.addImage(bananaImage);
  fruit .velocityX = -4;
  fruit .lifetime = 150;
  fruit .scale = 0.1;
  fruitG.add(fruit);
}
}

function obstacles(){
  //to create the obstacles
  if (frameCount % 300 === 0){
  var obstacle = createSprite(600,255, 10, 10);
  obstacle.addImage(obstacleImage);
  obstacle .velocityX = -4;
  obstacle .lifetime = 200;
  obstacle .scale = 0.2;
  obstacleG.add(obstacle);
}
}


