const { log } = require('console');
const fs = require('fs')

const read = (filename) => {

    return new Promise((resolve,reject) => {

        fs.readFile(filename, (err, data) => {
            if (err) reject('error');
            else resolve(data);
          })
    })

}
const write = (filename,data) => {
    return new Promise((resolve,reject) =>{

        fs.writeFile(filename, data, (err) => {
            if (err) reject('no data is written')
            else 
            console.log('The file has been saved!');
          })

    })
}


read('text.txt').then(write('text.txt','anirudh chandra akilan 😂👌').then(()=>console.log('file data written')).catch(()=>console.log('error'))
).catch(()=>console.log('error'))

