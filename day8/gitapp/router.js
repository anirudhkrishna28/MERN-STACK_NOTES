let express = require('express')
let path =  require('path')

let router = express.Router()

router.get('/',(request,response) => {
    response.get('this is a get call')
})
router.get('/login',(request,response) => {
    response.sendFile(path.join(__dirname,"index.html"))
})

router.get('/biodata',(request,response) => {
    response.sendFile(path.join(__dirname,"biodata.html"))
})

module.exports  = router


