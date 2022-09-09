const f1 = (n)=>{
    return new Promise((resolve,reject)=>{
      n%2 ? reject("Given number is odd") : resolve("Given number is even");
      /* 
       if(n%2)
         reject();
       else
         resolve();
      */     
    });
}

f1(21).then((resolvedResult)=>{
    console.log(resolvedResult);
}).catch((rejectedResult)=>{
   console.log(rejectedResult);
});