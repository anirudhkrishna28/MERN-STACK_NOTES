const http = require('http'); 
const port = 3001; 

let server  = http.createServer((request,response)=>{
    res.end("Conneted to server")
})

server.listen(port,() => console.log("listening on 3001"))

