var box;

  function setup(){
   createCanvas(1200,400);
   box=createSprite(50,200,20,20);
  }

  function draw(){
   background("black");
   box.x=mouseX;
   box.y=mouseY;
   text("move it forward to get different colors",200,200);

  if(box.x>100 && box.x<400){
    background("blue");
  }

  if(box.x>400 && box.x<800){
    background("green");
  }

  if(box.x>800 && box.x<1200){
    background("red");
  }

 ellipseMode(RADIUS);
 ellipse(box.position.x,box.position.y);
 drawSprites();
}