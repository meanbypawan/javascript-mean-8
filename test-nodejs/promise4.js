const eatingPizza = ()=>{
    console.log("Pizza in progress...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("Pizza Done...");
           resolve();
        },2000);
    });
}
const servicingCar = ()=>{
    console.log("Car servicing in progress...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Car service done...");
            resolve();
        },5000);
    });
}
const meetingWithFriends = ()=>{
    console.log("Meeting is progress....");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           console.log("Meeting Done");
           reject();
        },3000);
    });
}

Promise.all([eatingPizza(),servicingCar(),meetingWithFriends()])
.then(result=>{
    console.log("You can go to home....");
})
.catch(err=>{
    console.log("You can't got to home...");
});
/*
eatingPizza().then(result=>{
    servicingCar().then(result=>{
        meetingWithFriends();
    })
}).catch(()=>{
  console.log("Oops! someting went wrong...");  
})
*/