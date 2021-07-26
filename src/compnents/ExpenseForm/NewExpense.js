import "../CSS/NewExpense.css";
import ExpensesForm from "./ExpenseForm";

function NewExpense(props) {
  const OnSaveExpenseForm = (enteredExpenseData) => {
    const expenseData = { 
        ...enteredExpenseData, 
        id: Math.random().toString() 
    }
    props.onFinish(expenseData);
    
  }; // to send values from children to parent 1st step
  return (
    <div className="new-expense">
      <ExpensesForm onSaveForm={OnSaveExpenseForm}></ExpensesForm>

      {/* to send values from children to parent 2nd step, the attribute(onSaveForm) is not a standard*/}
    </div>
  );
}

export default NewExpense;
