import { useState } from 'react';
import '../CSS/ExpenseForm.css'
const ExpensesForm = (props) => {
    // const [enteredTitle, setenteredTitle] = useState('');
    // const [enteredAmount, setenteredTAmount] = useState('');
    // const [enteredDate, setenteredDate] = useState('mm/dd/yyyy');
    const [userInput, setUserInput] = useState({
        enteredTitle : "",
        enteredAmount : "",
        enteredDate : 'yyyy-MM-dd'
    });

    // This function is to take values from "Form" to update expenses
    const titlechangeHandler = (event) => 
    {  // event is an object
        // setenteredTitle(event.target.value); // set enteredTitle to the new value event.target.value version 1
        
        // setUserInput({ version 2
        //   ...userInput, // in order not to overwrite and lose they other property
        //   enteredTitle: event.target.value
        // });

        setUserInput((prevState) => {
            return {...prevState, enteredTitle: event.target.value}
        });
        // console.log(userInput.enteredTitle);
    };
    
    const amountchangeHandler = (event) => 
    { // event is an object
        setUserInput((prevState)=>{
            return{...prevState, // in order not to overwrite and lose they other property
            enteredAmount: event.target.value}
          });
        //   console.log(userInput.enteredAmount);
    };

    const DatechangeHandler = (event) => 
    { // event is an object
        setUserInput((prevState)=>{
           return { ...prevState, // in order not to overwrite and lose they other property
            enteredDate: new Date(event.target.value)}
          });
        //   console.log(userInput.enteredDate);
    };

    const submitHandler = (event) => 
    {
        event.preventDefault(); // to keep the single page feature and not reloading
        //console.log("Hello");
        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: userInput.enteredDate
        }
        props.onSaveForm(expenseData);
        /* to send values from children to parent 3rd step, the attribute(onSaveForm) is not a standard*/

        setUserInput(() => {
           return { 
               enteredTitle: '',
               enteredDate: "yyyy-MM-dd",
               enteredAmount: ''
           }
        }) // to clear the inputs again after the user submits
    }

    return (
    <form onSubmit = {submitHandler}>
        <div className ="new-expense__controls">
            <div className = "new-expense__control">
                <label>Title</label>
                <input type = "text" value = {userInput.enteredTitle} onChange = {titlechangeHandler}/>
            </div>

            <div className = "new-expense__control">
                <label>Amount</label>
                <input type = "number" min = "0.01" step ="0.01" value = {userInput.enteredAmount}  onChange = {amountchangeHandler}/>
            </div>

            <div className = "new-expense__control">
                <label>Date</label>
                <input type = "Date" min = "2019-01-01" step ="2022-12-31" value = {userInput.enteredDate} onChange = {DatechangeHandler}/>
            </div>

            <div className = "new-expense__actions">
                <button type = "submit">Add Expense</button>
            </div>

        </div>
    </form>)
} 
export default ExpensesForm;