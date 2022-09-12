const events = require('events');

const eventEmitter = new events.EventEmitter();

eventEmitter.on("data",()=>{
    console.log('Data event fired and handled...');
});

eventEmitter.on("error",()=>{
    console.log("Oops! Something went wrong....");
});

eventEmitter.once("test",()=>{
    console.log("Test event fired and handled...");
});

eventEmitter.emit("data");
eventEmitter.emit("error");
eventEmitter.emit("test");
eventEmitter.emit("test");
eventEmitter.emit("test");