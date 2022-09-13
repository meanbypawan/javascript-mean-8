//Reading data using read stream.....
const fs = require('fs');

const readStream = fs.createReadStream("data.txt");
console.log("At the start......");
let data = "";
readStream.on('data',(chunck)=>{
    data = data + chunck;
});

readStream.on('error',(err)=>{
    console.log(err);
});

readStream.on('end',()=>{
    console.log(data);
});
console.log('At the end.......');
/*
readStream.emit('data');
readStrean.emit('error');
readStream.emit('end');
*/