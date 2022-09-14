// const http = require('http')
import http from 'http';

const server = http.createServer((request,response)=>{
  console.log(request.url);
  if(request.url == '/home'){
      response.end('Home Page');
  }
  else if(request.url == '/about'){
      response.end("About Page");
  }
  else if(request.url == "/contact"){
      response.end("Contact Page");
  }
  else
    response.end("404: Requested resouse is not available")
});

server.listen(3000,()=>{
    console.log("Server started at http://localhost:3000/");
});