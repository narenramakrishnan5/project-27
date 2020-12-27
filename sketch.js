var roof1,rope1,bob1,bob2,bob3,bob4,bob5,bob6
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new roof(350,100,300,30)
	world,add(world,roof)
	bob1=new bob(250,300)
	bob2=new bob(300,300)
	bob3=new bob(250,300)
	bob4=new bob(400,300)
	bob5=new bob(450,300)

	rope1=new rope(bob1.body,roof.body,-100,0)
	World.add(world,rope1)

	rope2=new rope(bob1.body,roof.body,-50,0)
	World.add(world,rope2)

	rope3=new rope(bob1.body,roof.body,0,0)
	World.add(world,rope3)

	rope4=new rope(bob1.body,roof.body,50,0)
	World.add(world,rope4)

	rope5=new rope(bob1.body,roof.body,100,0)
	World.add(world,rope5)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keypressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0})
	}
}


