const fs = require('fs');

const writeStream = fs.createWriteStream("demo.txt");

writeStream.write("It is writestream demo...");
writeStream.end();
writeStream.on('finish',()=>{
    console.log("Operation success....");
});
writeStream.on('error',(err)=>{
    console.log(err);
});