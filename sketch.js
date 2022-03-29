let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;
var obstacle1,obstacle2,obtacle3,obstacle4
var obstaclesGroup

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");

  obstacle1 = loadImage("asteriod1.png")
  obstacle2 = loadImage("asteriod2.png")
  obstacle3 = loadImage("asteriod3.png")
  obstacle4 = loadImage("asteriod4.png")
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  rectMode(CENTER);
  textSize(15);

  obstaclesGroup = new Group()
  

}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  spawnObstacles()

  //fall down
  vy +=g;
  lander.position.y+=vy;
  drawSprites();

}


function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,0,10,40);
    var x_pos = Math.round(random(50,900))
    obstacle.x = x_pos

    obstacle.velocityY = 6
    
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               break;
       case 2: obstacle.addImage(obstacle2);
               break;
       case 3: obstacle.addImage(obstacle3);
               break;
       case 4: obstacle.addImage(obstacle4);
               break;
       default: break;
     }
    
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
 }
 