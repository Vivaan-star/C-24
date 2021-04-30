//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground;
var ball;
var box1, box2,box3,box4,box5;
var ground;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup() {
  createCanvas(1200,400);   

  myEngine = Engine.create();
  myWorld =  myEngine.world;
  
  ground = new Ground(600,390,1200,20);


  box1 = new Box(700,300,70,70);
  box2 = new Box(900,300,70,70);
  pig1 = new Pig(800,320,50,50)
  log1 = new Log(800,280,300,PI/2);

  box3 = new Box(700,250,70,70);
  box4 = new Box(900,250,70,70);
  pig2 = new Pig(800,260,50,50)
  log2 = new Log(800,200,300,PI/2);

  box5 = new Box(800,180,70,70);
  log3 = new Log(760,150,150,PI/7);
  log4 = new Log(860,150,150,-PI/7);
  
  bird = new Bird(100,200,60,60);
  
  




}

function draw() {
  background(0);  
  Engine.update(myEngine);
  
  ground.display();
  
  box1.display();
  box2.display();
  pig1.display();
  log1.display();

  box3.display();
  box4.display();
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();
  
}

/*
how we can use physics Engine

3 objects of Matter.js

1. Engine : this object is used to create a physics engine.
2. World : this object is used to create a physics world.
3. Bodies : this object is used to create the physical objects.


*/