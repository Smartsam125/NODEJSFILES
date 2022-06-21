const os = require('os')
const use =os.userInfo();
console.log(use);
console.log(`The sytem uptime is ${os.uptime}`);
const currentOS ={
    total:os.totalmem(),
    freememo:os.freemem(),
    name:os.type()


}
console.log(currentOS);
const path = require('path')
console.log(path.sep);