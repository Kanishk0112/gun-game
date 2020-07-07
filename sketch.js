const Engine= Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1400,650);
    engine= Engine.create();
    world= World.create;
    box1 = new Box(50,200,150,10);
    
}

function draw(){
    background(0);
  Engine.update(engine);
    box1.display();
  
}