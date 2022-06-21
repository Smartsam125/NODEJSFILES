const { throws } = require('assert')
const {readFile,writeFile} = require('fs')
readFile('./index.http','utf8',(err,result)=>{
if(err){
    console.log(err);
    return;
}
console.log(result);

})