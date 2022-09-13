const fs = require('fs');

const readFileFirst = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("file1.txt",'utf8',(err,data)=>{
          err ? reject(err) : resolve(data);
        });
    });
}
const readFileSecond = ()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("file2.txt",'utf8',(err,data)=>{
          err ? reject(err) : resolve(data);
        });
    });
}

Promise.all([readFileFirst(),readFileSecond()])
.then(results=>{
   fs.writeFile('result.txt',results[0]+''+results[1],err=>{
      err ? console.log(err) : console.log('operation success');
   }); 
})
.catch(err=>{
    console.log(err);
});
