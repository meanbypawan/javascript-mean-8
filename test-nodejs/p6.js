console.log("At the start,,,,");
var first = function(n,callback){
   console.log("Inside First : "+n);
   callback(n+2);
}

var second = function(n,callback){
  console.log("Inside Second : "+n);
  callback(n+2);
}
var third = function(n){
  console.log("Inside Third : "+n);
  console.log("All Done..");
}

first(10,function(n){
    second(n,function(n){
        third(n+2);
    });
});

console.log("At the end.,...");