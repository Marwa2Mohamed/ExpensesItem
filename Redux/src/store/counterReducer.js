const initialState = { counter: 0, show: true };

function counter(prevState = initialState, dispatchedAction) {
  switch (dispatchedAction.type) {
    case "increment":
      return {
        counter: prevState.counter + dispatchedAction.amount,
        show: prevState.show,
      };
    case "decrement":
      return {
        counter: prevState.counter - dispatchedAction.amount,
        show: prevState.show,
      };
    case "toggle":
      return {
        counter: prevState.counter,
        show: !prevState.show,
      };
    default:
      return {
        counter: prevState.counter,
        show: prevState.show,
      };
  }
}

export default counter;
