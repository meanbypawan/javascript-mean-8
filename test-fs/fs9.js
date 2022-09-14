//const fetch = require('node-fetch');
import fetch from 'node-fetch';
import fs from 'fs';
async function getData(){
 const response = await fetch('https://jsonplaceholder.typicode.com/posts');
 const body = await response.text();
 fs.appendFile("data.txt",body,(err)=>{
     err ? console.log(err) : console.log("operation success");
 })
}

getData();