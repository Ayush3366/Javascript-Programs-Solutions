
//Program to sum two Numbers.
var x;
var y;

function sum(x,y) {
  if(x<0 && y<0){
      return(-x-y);
    }
  else if(x<0){
      return(-x+y);
    }
  else if(y<0){
      return(x-y);
  }
  else{
    return(x+y);
  }
}

console.log(sum(3,3));
