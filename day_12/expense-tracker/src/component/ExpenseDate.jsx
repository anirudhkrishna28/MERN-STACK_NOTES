import './ExpenseDate.css'

const ExpenseDate = (props) => {
    const {date} = props
    const dat = date.getDate();
    const year = date.getFullYear();
    const month = date.toLocaleDateString('Us-en',{month:"long"});
    return (
        <>
        <div className='expense-date'>
            <div className='expense-date__month'>{dat}</div>
            <div className='expense-date__day'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            
        </div>
        </>
    )
}

export default ExpenseDate;