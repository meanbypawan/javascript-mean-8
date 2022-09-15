import http from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

http.createServer((request,response)=>{
   console.log(request.url);
   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);
   if(request.url == '/' || request.url == '/home'){
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
   else if(request.url == '/about'){
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
   else if(request.url == '/contact'){
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
   else if(request.url == '/signin'){
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
   else if(request.url == '/donate.png'){
     const imagePath = path.join(__dirname,"views/donate.png");
     let readStream = fs.createReadStream(imagePath);
     response.writeHead(200,{'Content-Type':'text/image'});
     readStream.pipe(response);         
   }
}).listen(3000,()=>{
    console.log("Server Started...");
});