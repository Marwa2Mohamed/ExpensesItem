import "../CSS/ExpenseForm.css";

function ExpensesDisplay(props) {
  const ShowForm = (event) => {
    console.log("Worked!");
    props.onClickingButton(!props.displayAttr);
  };
  return (
    <div className="buttonContainer new-expense__controls" onClick={ShowForm}>
      <button className="newexpenseButton">Add new expense</button>
    </div>
  );
}
export default ExpensesDisplay;
