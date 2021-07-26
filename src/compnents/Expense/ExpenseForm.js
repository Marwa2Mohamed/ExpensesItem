import { useState } from 'react';
import '../CSS/ExpenseForm.css'
const ExpensesForm = () => {
    // const [enteredTitle, setenteredTitle] = useState('');
    // const [enteredAmount, setenteredTAmount] = useState('');
    // const [enteredDate, setenteredDate] = useState('mm/dd/yyyy');
    const [userInput, setUserInput] = useState({
        enteredTitle : "",
        enteredAmount : "",
        enteredDate : 'mm/dd/yyyy'
    });

    // This function is to take values from "Form" to update expenses
    const titlechangeHandler = (event) => { // event is an object
        // setenteredTitle(event.target.value); // set enteredTitle to the new value event.target.value version 1
        
        // setUserInput({ version 2
        //   ...userInput, // in order not to overwrite and lose they other property
        //   enteredTitle: event.target.value
        // });

        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        });
        console.log(userInput.enteredTitle);
    };
    
    const amountchangeHandler = (event) => { // event is an object
        setUserInput((prevState)=>{
            return{...prevState, // in order not to overwrite and lose they other property
            enteredAmount: event.target.value}
          });
          console.log(userInput.enteredAmount);
    };

    const DatechangeHandler = (event) => { // event is an object
        setUserInput((prevState)=>{
           return { ...prevState, // in order not to overwrite and lose they other property
            enteredDate: event.target.value}
          });
          console.log(userInput.enteredDate);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // to keep the single page feature and not reloading
        //console.log("Hello");
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        }
    }

    return (
    <form onSubmit = {submitHandler}>
        <div className ="new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type = "text" onChange = {titlechangeHandler}/>
            </div>

            <div className = "new-expense__control">
                <label>Amount</label>
                <input type = "number" min = "0.01" step ="0.01"  onChange = {amountchangeHandler}/>
            </div>

            <div className = "new-expense__control">
                <label>Date</label>
                <input type = "Date" min = "2019-01-01" step ="2022-12-31"  onChange = {DatechangeHandler}/>
            </div>

            <div className = "new-expense__actions">
                <button type = "submit">Add Expense</button>
            </div>

        </div>
    </form>)
} 
export default ExpensesForm;