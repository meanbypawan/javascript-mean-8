const firstName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("Merry");
            reject("Merry");
        },1000);
    });
}
const middleName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("John");
            reject("John");
        },3000);
    });
}
const lastName = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("Alexan");
            reject("Alexan");
        },2000);
    });
}
Promise.all([firstName(),middleName(),lastName()])
.then(results=>{ // results = []
   console.log(results[0]+" "+results[1]+" "+results[2]);
})
.catch(rejectedResult=>{
    console.log(rejectedResult);
});