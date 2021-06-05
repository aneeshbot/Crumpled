
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    PaperObj=new Paper (200,640,40,40);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  groundObject.display();
  dustbinObj.display();
  PaperObj.display();
  PaperObj.add(1,2);
 
 
  if(keyCode === UP_ARROW){
	 // Body.applyForce(PaperObj,{PaperObj.position.x,y:PaperObj.position.y},{x: 0, y: -0.05});
	 PaperObj.throw(200,640);
  }
	

}

