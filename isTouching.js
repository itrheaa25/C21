function isTouching (a ,b ){       //these are called parameters.
    if(a.x-b.x<a.width/2 +b.width/2 && 
      b.x-a.x<a.width/2 +b.width/2 && 
      a.y-b.y<a.height/2 +b.height/2 &&
      b.y-a.y<a.height/2 +b.height/2){
      return true;
    }
    else{
      return false;
    }
  
  }