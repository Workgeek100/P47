const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var distance = 0;
var engine , world;
var player, playerRunning, playerRunning_img;
var office, ground, intro, obstacles, howtoplay, game;
var gameState = 0;


function preload(){
office = loadImage(("images/bg5.jpg"));
playerRunning_img = loadAnimation("images/running1.png","images/running2.png","images/running3.png","images/running4.png","images/running5.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight/2+120);
  engine = Engine.create();
  world = engine.world;

  player = new Player(displayWidth/10,displayHeight/2+70,200,200);
  ground = new Ground(displayWidth/2,displayHeight/2+150,10000,50);
  intro = new Intro();
  obstacles = new Obstacles(displayWidth-200,displayHeight/2-50);
  game = new Game();

}

function draw() {
  background(office); 
  Engine.update(engine);
  player.display();
  game.update();
  game.getState();
  loadBgSprites();
  if(player.body.position.x>displayWidth){
    //player.body.position.x  = 0;
    background(bg1);
  }

  if(gameState===0){
    storyLine();
  }

  if(gameState===1){
    game.playBg1();
  }



}

function loadBgSprites(){
  bg1 = loadImage("images/bg1.jpg");
  bg2 = loadImage("images/bg3.jpg");
  bg3 = loadImage("images/bg4.jpg");
  bg4 = loadImage("images/bg5.jpg");
}