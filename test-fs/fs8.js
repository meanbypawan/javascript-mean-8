const fs = require('fs');
const readStream = fs.createReadStream("data.txt");
const writeStream = fs.createWriteStream("new.txt");
readStream.pipe(writeStream);
readStream.on("end",()=>{
    console.log("Opearation success...");
});