function Message(){
    this.m1 = ()=>{
      console.log('GM.....');
    }
    this.m2 = ()=>{
        console.log('GN.....');
    }
    this.m3 = ()=>{
        console.log('GE.....');
    }
}

module.exports = new Message();