const fs = require('fs');

function read(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject("Failed to read in text file");
      } else {
        resolve(data);
      }
    });
  });
}

function write(filePath, inputData) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, inputData, (err) => {
      if (err) {
        reject("Failed to write in text file");
      } else {
        resolve();
      }
    });
  });
}

function mapFiles(filePath, state, capital) {
  const pairs = state.map((state, index) => `${state} : ${capital[index]}`).join("\n");
  return write(filePath, pairs);
}

const state = ["TamilNadu",  "Maharatsra", "Kerala", "AndraPradesh", "Madyapradesh", "UttarPradesh", "Himachalpradesh", "JarKand", "Karnataka"];
const capital = ["Chennai",  "Mumbai", "Thiruvananthapuram", "Amaravati", "Bhopal", "Lucknow", "Shimla", "Srinagar", "Bangalore"];

write(`${__dirname}/states.txt`, state.join("\n"))
  .then(() => {
    console.log("State written");
    return write(`${__dirname}/capitals.txt`, capital.join("\n"));
  })
  .then(() => {
    console.log("Capital done");
    return read(`${__dirname}/states.txt`);
  })
  .then((data) => {
    console.log("State done");
    console.log(data.toString());
    return read(`${__dirname}/capitals.txt`);
  })
  .then((data) => {
    console.log("capital done");
    console.log(data.toString());
    return mapFiles(`${__dirname}/state-capital-pair.txt`, state, capital);
  })
  .then(() => {
    return read(`${__dirname}/state-capital-pair.txt`);
  })
  .then((data) => {
    console.log("s-c done");
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });