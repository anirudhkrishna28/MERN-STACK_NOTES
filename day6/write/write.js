const data  = "Anirudh krishna💕👌👍 "

const fs = require('fs')

// write data
fs.writeFile('text.txt', data, (err) => {
    if (err) console.log('error');
    console.log('The file has been saved!');
  });

  // append 

  fs.appendFile('text.txt', data, (err) => {
    if (err) console.log('error');
    console.log('The file has been saved!');
  });