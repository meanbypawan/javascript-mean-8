const fs = require('fs');
console.log('At the start.....');
try{
 fs.writeFileSync('abc.txt',"Node.Js is superfast");
 console.log("Operation success...."); 
}
catch(err){
    console.log("Inside catch.....");
    console.log(err);
}
console.log('At the end.....');