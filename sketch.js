const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object1, object2, object3;
var ground;

function setup() {
  createCanvas(400,400);
engine = Engine.create();
world = engine.world;
var object1_options = {
  restitution: 1.0
}
object1 = Bodies.rectangle(200,100,50,50,object1_options)
var object2_options = {
  restitution: 1.0
}
object2 = Bodies.rectangle(250,100,50,50,object2_options)
var object3_options = {
  restitution: 1.0
}
object3 = Bodies.circle(100,50,20,object3_options)
var ground_options = {
  isStatic: true
}
ground = Bodies.rectangle(200,390,400,10,ground_options)
World.add(world,object1);
World.add(world,object2);
World.add(world,object3);
World.add(world,ground);
//console.log(object1.position.x);
//console.log(object1.position.y);
//console.log(ground.position.x);
//console.log(ground.position.y);
}

function draw() {
  background(0,0,0);

  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(object3.position.x,object3.position.y,50,50);

  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,50,50);
  rect(object2.position.x,object2.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,10);

}