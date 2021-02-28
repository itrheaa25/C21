var canvas;
var music;
var box1;
var box2;
var box3;
var box4;
var ball;
var Edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    //create 4 different surfaces

    canvas = createCanvas(700,600);
   
    box1 = createSprite(150,550,80,20);
    box1.shapeColor="yellow";
    
   
    box2 = createSprite(250,550,80,20);
    box2.shapeColor="red";

    box3 = createSprite(350,550,80,20);
    box3.shapeColor="green";

    box4 = createSprite(450,550,80,20);
    box4.shapeColor="blue";

    //create box sprite and give velocity
 
    ball = createSprite(300,100,20,20)
    ball.velocityX = 10;
    ball.velocityY = 10;

    

}

function draw() {
    background("black");
    //create edgeSprite
    Edges = createEdgeSprites();
    ball.bounceOff(Edges);

    if(ball.isTouching(box1)){
        ball.shapeColor = "yellow";
        music.play();
    }

    if(ball.isTouching(box2)){
        ball.shapeColor = "red";
        music.play();
    }

    if(ball.isTouching(box3)){
        ball.shapeColor = "green";
        music.play();
    }

    if(ball.isTouching(box4)){
        ball.shapeColor = "blue";
        music.play();
    }

 
    //add condition to check if box touching surface and make it box

    drawSprites();
    
 


}
