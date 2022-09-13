const fs = require('fs');
let data = "Node.Js is single threaded"
console.log("At the start....");
fs.writeFile("data.txt",data,err=>{
     err ? console.log("Operation failed") : console.log("Operation success");
});
console.log("At the end.....");