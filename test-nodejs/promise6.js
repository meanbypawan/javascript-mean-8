const firstName = ()=>{
    console.log("Firstname called....");
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           resolve("Merry");
       },2000); 
    });
}
const middleName = ()=>{
    console.log("Middlename called....");
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           resolve("John");
       },5000); 
    });
}
const lastName = ()=>{
    console.log("Lastname called.....");
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
           resolve("Alexan");
       },1500); 
    });
}

Promise.race([firstName(),middleName(),lastName()])
.then(result=>{
    console.log("Then : "+result);
})
.catch(err=>{
    console.log("Catch : "+err);
});