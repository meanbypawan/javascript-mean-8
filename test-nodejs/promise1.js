// var v/s let v/s const

const f1 = function(){
    console.log("f1-called....");
}

f1();
/*
// var is function scopic but let is block scopic
function f1(){
    if(true){
        const x = 100;
    }
    console.log(x);
}
f1();
*/

/*
let x = 10;
let x = "hello";
console.log(x);
*/

/*
console.log(x);
var x;

   Javascript engine
   Hoisting
   var x;
   console.log(x);
   x = 10;
*/