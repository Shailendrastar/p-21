var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1= createSprite(100,580,200,20);
    box2= createSprite(300,580,200,20);
    box3= createSprite(500,580,200,20);
    box4= createSprite(700,580,200,20);
    box1.shapeColor="red";
    box2.shapeColor="pink";
    box3.shapeColor="yellow";
    box4.shapeColor="blue";
    ball= createSprite(random(50,750),100,20,20)
    ball.shapeColor="white";
    ball.setVelocity(3,4);


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges=createEdgeSprites();
     ball.bounceOff(edges);
     if (ball.isTouching(box1)&&ball.bounceOff(box1)){
         ball.shapeColor="red";   
     }
     if (ball.isTouching(box2)&&ball.bounceOff(box2)){
        ball.shapeColor="pink";   
    }
    if (ball.isTouching(box3)&&ball.bounceOff(box3)){
        ball.shapeColor="yellow";  
        music.stop();
        ball.setVelocity(0,0);
    }
    if (ball.isTouching(box4)&&ball.bounceOff(box4)){
        ball.shapeColor="blue";  
        music.play(); 
    }
     drawSprites();

    //add condition to check if box touching surface and make it box
}
