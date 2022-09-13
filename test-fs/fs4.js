const fs  = require('fs');
try{
 let data = fs.readFileSync("data.txt",'utf8');
 console.log(data);
}
catch(err){
    console.log(err);
} 