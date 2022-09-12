const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on("data",()=>{
   console.log("Data event......");
});

eventEmitter.emit("data");
eventEmitter.emit("data");
eventEmitter.emit("data");

eventEmitter.removeAllListeners("data");
eventEmitter.emit("data");