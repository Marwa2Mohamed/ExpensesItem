import "../CSS/ExpensesCondition.css";
import ExpenseItem from "./ExpenseItem";


function ExpensesCondition(props) {
  let filteredArray = props.filtArr;
   
  if (filteredArray.length === 0) {
    /*do this when we are going to chnage the entire component jsx not when the component is a part of othe component*/
    return<h2 className = 'expenses-list__fallback'>No Expense is found</h2>
  }

  return(
    <ul className = "expenses-list">
        {filteredArray.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
        ))}
    </ul>
  );
}

export default ExpensesCondition;
