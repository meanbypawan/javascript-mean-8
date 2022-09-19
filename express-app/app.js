import express from 'express';
import bodyParser from 'body-parser';
const app = express();

// http://localhost:3000/home

app.get("/home",(request,response,next)=>{
    console.log("/home route request is handled...");
    return response.end("/home route....");
});
app.get("/about",(request,response,next)=>{
  console.log("/about request is handled...");
  return response.end("/about route..");
});
app.get("/add",(request,response,next)=>{
  let a = request.query.a;
  let b = request.query.b;
  console.log(request.query.c);
  return response.end("Addition : "+(a*1 + b * 1));
});
app.post("/add",(request,response,next)=>{
    console.log(request.body);  
});

// http://localhost:3000/delete/100/laptop
app.get("/delete/:id/:name",(request,response,next)=>{
   console.log(request.params.id);
   console.log(request.params.name);
});
app.use((request,response,next)=>{
   response.end("Requrested Resource not available...");
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,()=>{
    console.log("Server started....");
});