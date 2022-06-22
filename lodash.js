const _ =require('lodash')
const items =[1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);
const k = 6;
const promise = new Promise((reolve,reject)=>{
    const N =Math.floor(1 + Math.random()*6)
    if (N===k) {
        resolve("result")
    }else{
        reject('failed')
    }
})
promise.catch((err)=>{
    console.log(err);
})