const names= require("./1app")
const sayHI=require('./5app.js')
const data = require('./2app')
require('./mindGrenade')
const value =data.items
console.log(...value);
console.log(names.benja);
console.log(data);
sayHI(names.benja)
sayHI(names.sam)