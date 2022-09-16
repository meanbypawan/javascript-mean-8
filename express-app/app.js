import express from 'express';

const app = express();

app.get("/home",(request,response,next)=>{
    return response.end("Welcome in Express..");
});

app.listen(3000,()=>{
    console.log("Server started....");
});