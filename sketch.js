
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground, dustbin

function setup() {
	createCanvas(800, 400);

    engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,320);
	ground = new Ground(width/2,height-50,width,20);
	dustbin1 = new Dustbin(600,333,100,15);
	dustbin2 = new Dustbin(559,276,15,120);
	dustbin3 = new Dustbin(643,276,15,120);
	dustbin4 = new Dustbin2()

	Engine.run(engine);
  
}
function draw(){
	Engine.update(engine);
	background(255,0,0);
	//	keyPressed();

	paper1.display();
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	dustbin4.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:110, y:-170});
		//console.log("Key Pressed");
	}
}




