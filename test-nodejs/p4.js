console.log("At the start.....");

var eatingPizza = ()=>{ // 30 min
    console.log("Pizza Done....");
}

var servicingCar =()=>{ // 4 hours
    console.log("Car Service Donde....");
}

var meetingWithFriends  = ()=>{ // 3 hours
    console.log("Meeting Done....");
}
setTimeout(eatingPizza,3000);
setTimeout(servicingCar,10000);
setTimeout(meetingWithFriends,7000);
console.log("At the end....");