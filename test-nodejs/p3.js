// How nodejs works
for(let request=1; request<=5; request++){
    setTimeout(function(){
        console.log("Request "+request+" processed");
        setTimeout(function(){
            console.log("Request "+request+" response send");
        },1000);
    },5000);
}