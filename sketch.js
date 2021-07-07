const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,object

var player;
var COM;
var wall;

function preload(){
player.loadImage('player.png');
COM.loadImage('COM.jpg');

}


function setup(){
  player = createSprite(200,100);
  COM = createSprite(200,300);
  wall = createSprite(200,200,40,10)
  gameState = 0;
  distance = 0;
  deadPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacles= createGroup();

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  engine = Engine.create();
  world=engine.world;

  object = Bodies.rectangle(200,200,90,80);
  World.add(world, object);

}

function draw(){
  background(rgb(200,200,200));
  Engiine.update(engine);

  rect(object.position.x,object.position.y,90,80);
  drawSprites();
}