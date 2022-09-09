// Promise
/*
  To handle asynchoronoius easily
   1. resolved/fullfilled
   2. rejected
   3. pending
   4. settled

   How to create a promise

   let p = new Promise(); // pending

   how to consume

   p.then().catch(); // calling/using promise code
*/
let p1 = new Promise((resolve,reject)=>{
    //reject();
    resolve();
});

p1.then(resolvedResult=>{
  console.log("Promise is resolved");
}).catch(rejectedResult=>{
   console.log("Promise is rejected");
});





