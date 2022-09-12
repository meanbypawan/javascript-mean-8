const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on("addition",(a,b)=>{
    console.log("Addition : "+(a+b));
});

eventEmitter.emit("addition",20,10);

