function noms(squirrel,fatBoy){
    if(squirrel.x-fatBoy.x < fatBoy.width/2 + squirrel.width/2 && squirrel.y-fatBoy.y < fatBoy.height/2 + squirrel.height/2 && fatBoy.x-squirrel.x < fatBoy.width/2 + squirrel.width/2 && fatBoy.y-squirrel.y < fatBoy.height/2 + squirrel.height/2) {
      return true;
    }else{
      return false;
    }
  }
  
  function bouncyBall(squirrel,fatBoy){
    if(squirrel.x-fatBoy.x < fatBoy.width/2 + squirrel.width/2 && fatBoy.x-squirrel.x < fatBoy.width/2 + squirrel.width/2) 
    {
      squirrel.velocityX = squirrel.velocityX * (-1);
      fatBoy.velocityX = fatBoy.velocityX * (-1);
    }
  
    if(squirrel.y-fatBoy.y < fatBoy.height/2 + squirrel.height/2 && fatBoy.y-squirrel.y < fatBoy.height/2 + squirrel.height/2)
    {
      squirrel.velocityY = squirrel.velocityY * (-1);
      fatBoy.velocityY = fatBoy.velocityY * (-1);
    }
  }