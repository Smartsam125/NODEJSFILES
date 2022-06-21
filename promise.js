//Pending Rejected Fullfilled
/*const promise =new Promise((resolve,reject)=>{
    //resolve([{name:"sam",age:15},{sex:"male",time:89}])
    reject('There was an error in the promise')

});
promise.then((data)=>{console.log(...data)}).catch((err)=>{console.log(err);})
console.log(promise);*/
const value =6

const check_promise = new Promise((resolve,reject)=>{
    const value2 = Math.floor(1 + Math.random()*6)
    console.log(value2)
    if (value2===value) { resolve('correct')} else{
        reject('failed')
    }
    check_promise.then((data)=>{console.log(`${data} is the value`)}).catch((err)=>{console.log(err);})
})