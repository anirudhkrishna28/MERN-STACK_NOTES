let express = require('express')
let app = express()
let port = 8080

// app.get('/',(request,response) => {
    
//     response.sendFile(`${__dirname}/index.html`);
// })
// const slash = 

// app.get('/biodata',(request,response) => {
//     response.sendFile(`${__dirname}/bidata.html`);
// })

// app.get("/",(request,response) =>{
//     response.send("this is get method")
// })

// app.post("/",(request,response) =>{
//     response.send("this is post method")
// })

// app.patch("/",(request,response) =>{
//     response.send("this is patch method")
// })

// app.delete("/",(request,response) =>{
//     response.send("this is delete method")
// })


let router = require("./router.js")

app.use(router)

app.listen(port,()=>{
    console.log("server connected");
})
