const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground , box1, box2 , box3, box4, box5, box6,  stand1, stand2, box7, box8, box9,box10, box11, box12, slingshot

function setup() {
  createCanvas(900,400);
engine=Engine.create()
world=engine.world
Engine.run(engine) 
  ground = new Ground ()

  stand1 = new Stand(390,300,250,10)
  stand2 = new Stand(700,200,200,10)

  box1 = new Box (300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);

  box7 = new Box (330,235,30,40);
  box8 = new Box(360,235,30,40);
  box9 = new Box(390,235,30,40);
  box10 = new Box(420,235,30,40);
  box11 = new Box(450,235,30,40);
  box12 = new Box(480,235,30,40);

  slingshot = new Slingshot(polygon1.body,{x: 200, y: 100});
 
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  stand1.display();
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
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x: mouseX, y: mouseY})
}

function mouseReleased(){
  slingshot.fly()
}