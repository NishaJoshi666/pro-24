const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Ground1;
var paper1;

function setup(){
    var canvas = createCanvas(1600,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new dustbin(500,340,20,100);
    box2 = new dustbin(600,340,20,100);
    box3 = new dustbin(550,379,100,20);
    Ground1 = new ground(600,height,1600,20);
    paper1 =new paper(200,340,20,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX +","+mouseY,200,20);
    box1.display();
    box2.display();
    box3.display();
    Ground1.display();
    paper1.display();

   // keyPrassed();
}
function keyPressed(){
     if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});
          
    }
}