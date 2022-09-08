//Promise

function Outer(n){
  n = n + 2;
  console.log("Inside Outer : "+n);  
  return function(){
     console.log("Inside inner : "+n);
  }
}

var inner = Outer(10);
/*
   10000
*/
inner();