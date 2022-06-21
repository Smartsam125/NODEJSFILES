const http = require('http')
const server =http.createServer((req,resp)=>{
   if (req.url ==='/') {
    resp.end('heyya')
    }
    if(req.url === '/about'){
        resp.end('here is our short history')
    }
    else if(req.url==='/sam'){resp.end('<!doctype html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="./dist/output.css" rel="stylesheet"></head><body></body><h1 class="text-3xl font-bold underline"> Hello world!</h1>  <h2 ></h2> </body></html>')}

    //resp.write('Welcome to our webpage')
    resp.end();

})
server.listen(5000)