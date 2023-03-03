var quadrado;


function setup() {
  createCanvas(400,400);
  
}

function draw() 
{
  quadrado = createSprite (200,200,10,10);
  if(keyDown("space")) {
   quadrado.shapeColor="pink";
  }

  background(30);


  drawSprites();

}




