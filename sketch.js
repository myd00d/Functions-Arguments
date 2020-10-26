var fatBoy, squirrel, marshmallowMan, candyCornWhite, candyCornYellow, candyCornOrange, candyCornGroup;

var bounce1, bounce2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fatBoy = createSprite(width*3/8, height/2, 200, 225);
  squirrel = createSprite(400, 600, 50, 33);

  bounce1 = createSprite(100,100,50,50);
  bounce2 = createSprite(100,height-100, 50, 50);
  squirrel.depth = 5;
  fatBoy.depth = 1;
  fatBoy.shapeColor = "pink";
  squirrel.shapeColor = "brown";
  candyCornWhite = createSprite(width*3/4, height*3/4, width/10, height/10);
  candyCornWhite.shapeColor = "white";
  candyCornYellow = createSprite(width*3/4, height*11/16, width/12.5, height/12.5);
  candyCornYellow.shapeColor = "yellow";
  candyCornOrange = createSprite(width*3/4, height*10/16, width/15, height/15);
  candyCornOrange.shapeColor = "orange";
  candyCornWhite.depth = 2;
  candyCornYellow.depth = 3;
  candyCornOrange.depth = 4;

  bounce1.velocityY = 5;
  bounce2.velocityY = -5;
}

function draw() {
  background(rgb(0, 200, 0));  
  squirrel.x = mouseX;
  squirrel.y = mouseY;
  
  if(noms(candyCornOrange,squirrel)){
    candyCornOrange.shapeColor = "cyan";
    squirrel.shapeColor = "magenta";
  }
  else
  {
    candyCornOrange.shapeColor = "orange";
    squirrel.shapeColor = "brown";
  }


  if(noms(candyCornYellow,squirrel)){
    candyCornYellow.shapeColor = "blue";
    squirrel.shapeColor = "magenta";
  }
  else
  {
    candyCornYellow.shapeColor = "yellow";
    squirrel.shapeColor = "brown";
  }


  if(noms(candyCornWhite,squirrel)){
    candyCornWhite.shapeColor = "black";
    squirrel.shapeColor = "magenta";
  }
  else
  {
    candyCornWhite.shapeColor = "white";
    squirrel.shapeColor = "brown";
  }


  if(noms(fatBoy,squirrel)){
    fatBoy.shapeColor = "green";
    squirrel.shapeColor = "magenta";
  }
  else
  {
    fatBoy.shapeColor = "pink";
    squirrel.shapeColor = "brown";
  }

  bouncyBall(bounce1,bounce2);
  drawSprites();
}


