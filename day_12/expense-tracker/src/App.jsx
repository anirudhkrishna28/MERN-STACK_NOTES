import './App.css'
import Expenses from './component/Expenses'
import  './component/ExpenseForm.css'

function App() {
  return (
    <>
    <div className='new-expense'>
      <form>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label for="title">title:</label><br />
            <input type="text" name="title" id="" /><br />
          </div>
          <div className='new-expense__control'>
            <label for="amount">amount:</label><br />
            <input type="text" name="amount" id="" /><br />
          </div>
          <div className='new-expense__control'>
            <label for="title">Date:</label><br />
            <input type="date" name="title" id="" /><br />
          </div>

          <div className='new-expense__control'>
          <button >Cancel</button>
          <button>Add Expense</button>
          </div>
        </div>
      </form>
      </div>
      <Expenses />
    </>
  )

}

export default App
