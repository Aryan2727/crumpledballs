const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball;
var ground1;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paperball = new Paper(80,300,50);

	ground1 = new Ground(400,670,800,40);

	dustbin1 = new Dustbin(520,590,30,120);
	dustbin2 = new Dustbin(680,590,30,120);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  paperball.display();

  ground1.display();

  dustbin1.display();
  dustbin2.display();

 drawSprites();

 keypressed();

  fill("black")
  strokeWeight(18)
  text("PRESS SPACE TO MOVE BALL",300,200)


}
function keypressed(){

	if(keyDown("space")){

		Matter.Body.applyForce(paperball.body,paperball.body.position,{x : 15, y : -33})
	
	}

}


