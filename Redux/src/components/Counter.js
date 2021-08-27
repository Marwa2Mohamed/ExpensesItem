import classes from "./Counter.module.css";
import { useSelector, useDispatch } from 'react-redux';


const Counter = () => {
    const {counter, show} = useSelector(updatedState => updatedState.counterRed);
    const dispatch = useDispatch();

    const incrementCounterHandler = () => {
        const user_value = prompt("Enter a value");
        dispatch({type: "increment", amount : Number(user_value)})
    };
    const decrementCounterHandler = () => {
        const user_value = prompt("Enter a value");
        dispatch({type: "decrement", amount : Number(user_value)})
    };
    const toggleCounterHandler = () => {
        dispatch({type: "toggle"})
    };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show &&<div className={classes.value}>{counter}</div>}
      <div>
        {show&&<button onClick = {incrementCounterHandler}>Increment</button>}
        {show&&<button onClick = {decrementCounterHandler}>Decrement</button>}
      </div>
      <button onClick = {toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
