import ExpenseItem from "./ExpenseItem";
import './ExpenseDate.css'

const Expenses = () =>{


 const EXPENSES = [
    {
        title:"Car",
        amount:400,
        date: new Date()
    },
    {
        title:"Food",
        amount:600,
        date: new Date()
    },
    {
        title:"Electricity",
        amount:300,
        date: new Date()
    }
 ]

  return (
    <>

        <div className="expenses">
     {EXPENSES.map((item,index) => <ExpenseItem key = {index} date={item.date} amount={item.amount} title={item.title}/>)}
     </div>
     
    </>
    
)
}

export default Expenses