/*
function Customer(id,cname,age){
    this.id = id;
    this.cname = cname;
    this.age = age;

    this.display = function(){
        console.log(this.id+" "+this.cname+" "+this.age);
    }
}
*/
class Customer{
    constructor(id,cname,age){
        this.id = id;
        this.cname = cname;
        this.age = age;
    }
    display(){
        console.log(this.id+" "+this.cname+" "+this.age);
    }
}

var obj = new Customer(100,"Rahil",30);
obj.display();