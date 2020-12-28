const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof1,rope1,bob1,bob2,bob3,bob4,bob5,bob6


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1=new roof(350,100,300,30)
	
	bob1=new bob(250,300)
	bob2=new bob(300,300)
	bob3=new bob(250,300)
	bob4=new bob(400,300)
	bob5=new bob(450,300)

	rope1=new rope(bob1.body,roof.body,-100,0)
	

	rope2=new rope(bob1.body,roof.body,-50,0)
	

	rope3=new rope(bob1.body,roof.body,0,0)
	

	rope4=new rope(bob1.body,roof.body,50,0)
	

	rope5=new rope(bob1.body,roof.body,100,0)
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof1.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()

}
function keypressed(){
	if(keyCode===32){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:0})
	}
}


