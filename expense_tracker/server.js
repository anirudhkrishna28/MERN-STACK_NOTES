let express = require('express');
let mongoose = require("mongoose");
let router = require("./router.js");

let app = express();
const port = 5000;

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router);


const url = 'mongodb://127.0.0.1:27017/expense_tracker';
mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Connected successfully to the database');
        app.listen(port, () => {
            console.log('Server is running on port ' + port);
        });
    })
    .catch((err) => {
        console.error('Failed to connect to the database:', err);
    });