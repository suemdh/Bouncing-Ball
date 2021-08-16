const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var ball1
function setup(){
    var canvas = createCanvas(500,500);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(250,485,500,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(100,200,20, ball_options);
    World.add(world,ball);


   

    ball1 = Bodies.circle(200,100,30, ball_options);
    World.add(world,ball1);


    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    fill("brown")
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    fill("green")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
    ellipse(ball1.position.x, ball1.position.y, 30, 30);
}


