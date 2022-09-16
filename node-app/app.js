import http from 'http';
import path from 'path';
import url,{ fileURLToPath } from 'url';
import fs from 'fs';

http.createServer((request,response)=>{
   console.log(request.url);
   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);
   
   let parsedRequest = url.parse(request.url,true);
   console.log(parsedRequest);

   if(parsedRequest.pathname == '/' || parsedRequest.pathname == '/home'){
       const indexPath = path.join(__dirname,"views/index.html");
       fs.readFile(indexPath,'utf8',(err,data)=>{
         response.writeHead(200,{'Content-Type': 'text/html'});
         if(err)
           response.write("Something went wrong...");
         else
           response.write(data);
         return response.end();  
       });
   }
   else if(parsedRequest.pathname == '/about'){
      const aboutPath = path.join(__dirname,"views/about.html");
      fs.readFile(aboutPath,'utf8',(err,data)=>{
        response.writeHead(200,{'Content-Type':'text/html'});
        if(err)
          response.write("Something went wrong...");
        else
          response.write(data);
        return response.end();    
      });
   }
   else if(parsedRequest.pathname == '/contact'){
    const contactPath = path.join(__dirname,"views/contact.html");
    fs.readFile(contactPath,'utf8',(err,data)=>{
      response.writeHead(200,{'Content-Type':'text/html'});
      if(err)
        response.write("Something went wrong...");
      else
        response.write(data);
      return response.end();    
    });
   }
   else if(parsedRequest.pathname == '/signin'){
    const signinPath = path.join(__dirname,'views/signin.html');
    fs.readFile(signinPath,'utf8',(err,data)=>{
      response.writeHead(200,{'Content-Type':'text/html'});
      if(err)
        response.write("Something went wrong..");
      else
        response.write(data);
      return response.end();    
    });
   }
   else if(parsedRequest.pathname.match("\.png$")){
     console.log(request.url); // /donate.png
     const imagePath = path.join(__dirname,"views"+parsedRequest.pathname);
     let readStream = fs.createReadStream(imagePath);
     response.writeHead(200,{'Content-Type':'text/image'});
     readStream.pipe(response);         
   }
   else if(parsedRequest.pathname.match("\.css$")){
    const cssPath = path.join(__dirname,"views"+parsedRequest.pathname);
    let readStream = fs.createReadStream(cssPath);
    response.writeHead(200,{'Content-Type':'text/css'});
    readStream.pipe(response);         
    
   }
   else if(parsedRequest.pathname == '/register_user'){
       let username = parsedRequest.query.username;
       let password = parsedRequest.query.password;
       console.log(username+" "+password);
   }
   else if(parsedRequest.pathname == '/add' && request.method=="POST"){
     let a = parsedRequest.query.a *1;
     let b = parsedRequest.query.b*1;
     return response.end("Addition : "+(a+b));
   }
}).listen(3000,()=>{
    console.log("Server Started...");
});