const fs = require('fs')

function read(filepath){
    return new Promise((resolve,reject) => {
        fs.readFile(filepath,(err,data) => {
            if(err) reject("Failed during read")
            else resolve(data)
        })
    })
} 

function write(filepath){
    return new Promise((resolve,reject) => {
        fs.writeFile(filepath,(err,data) => {
            if(err) reject("Failed during read")
            else resolve(data)
        })
    })
} 

read('text.txt')
.then((data)=>{
    console.log(data.toString())
})
.catch((err)=>console.log("Some error occured"))


