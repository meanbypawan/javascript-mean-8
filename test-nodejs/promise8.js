const eatingPizza = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Pizza Done");
        },2000);
    });
}
const servicingCar = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Car Service Done");
        },5000);
    });
}
const meetingWithFriends = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Meeting Done");
        },3000);
    });
}

async function executeTask(){
    let result1 = await eatingPizza();
    console.log(result1);
    
    let result2 = await servicingCar();
    console.log(result2);
    
    let result3 = await meetingWithFriends();
    console.log(result3);
}
executeTask();
/*
eatingPizza().then(result=>{
    console.log(result);
    servicingCar().then(result=>{
        console.log(result);
        meetingWithFriends().then(result=>{
            console.log(result);
        })
    })
})
*/