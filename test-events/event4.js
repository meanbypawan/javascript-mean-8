const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on("addition",(a,b)=>{
    if(a < 0 || b < 0)
      eventEmitter.emit("error","Negative Number");
    else
      console.log("Addition : "+(a+b)); 
    
 });

eventEmitter.on("error",(err)=>{
    console.log(err);
});

eventEmitter.emit("addition",20,-10);