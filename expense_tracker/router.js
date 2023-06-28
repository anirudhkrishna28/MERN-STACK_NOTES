let express = require("express")
let router = express.Router();

let Expense = require("./models/expense")

// // Add routes 
// router.get("/",(request,response)=>{
//     console.log("Router connected");
//     response.send("<h1> hello </h1>")
// })



const createExpense =  async (req,res)=> {
    let body  = req.body
    let newExpense  = new Expense({
        title:body.title,
        amount:body.amount,
        date:body.date
    })
    await newExpense.save().then(()=>console.log("success insertion")).catch(()=>console.log("failed insertion"))
    // console.log(req.body);
    res.json("Expense Created")
    // res.send("POST")
}; 





router.post("/expense/create",createExpense);

router.get("/expense/get",async (req,res)=>{
    try{
    const data = await Expense.find()
    res.send(data)
}
    catch{
        res.data("error occured in get")
    }
});





router.patch("/expense/edit/",(req,res)=>{
    console.log("PATCH");
    res.send("PATCH")
});
router.delete("/expense/detele/:id",(req,res)=>{
    console.log("DELETE");
    res.send("DELETE")
});

module.exports = router;

