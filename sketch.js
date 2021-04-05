const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var bg = "Sprites/bg1.png";
function preload() {
  //getBackgroundImg();
  backgroundImg = loadImage(bg);

}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  //level three
  box1 = new Bluebox(540,200);
  box2 = new Bluebox(570,200);
  box3 = new Bluebox(600,200);
  box4 = new Bluebox(630,200);
  box5 = new Bluebox(660,200);
  //level two
  box6 = new Greenbox(570,160);
  box7 = new Greenbox(600,160);
  box8 = new Greenbox(630,160);
  //level one
  box9 = new Pinkbox(600,120);
  
  //level four
  box10 = new Bluebox(330,360); 
  box11 = new Bluebox(360,360); 
  box12 = new Bluebox(390,360); 
  box13 = new Bluebox(420,360); 
  box14 = new Bluebox(450,360); 
  box15 = new Bluebox(480,360); 
  box16 = new Bluebox(510,360); 

  // level three
  box17 = new Pinkbox(360,340);
  box18 = new Pinkbox(390,340);
  box19 = new Pinkbox(420,340);
  box20 = new Pinkbox(450,340);
  box21 = new Pinkbox(480,340);

  // level two
  box22 = new Greenbox(390,300);
  box23 = new Greenbox(420,300);
  box24 = new Greenbox(450,300);

  //level one
  box25 = new Greybox(420,260);

  //ground1
  ground1 = new Ground(400,390,800,20);
  stage1 = new Ground(605,235,200,20);
  stage2 = new Ground(420,380,250,10);
  // stage1 - 390,300,250,10
  //stage2 - 
  ball = new Ball(200,200,25);

  spring = new Slingshot(ball.body,{x:200,y:200});

}

function draw() {
  background(backgroundImg);

  Engine.update(engine);  

  debug:true;
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  ground1.display();
  ball.display();
  spring.display();
  stage1.display();
  stage2.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  spring.release();
}

function keyPressed() {
  if(keyCode === 32) {
     spring.attach(ball.body);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=1900){
      bg = "Sprites/bg1.png";
  }
  else{
      bg = "Sprites/bg2.jpg";
  }

  console.log(backgroundImg);
}