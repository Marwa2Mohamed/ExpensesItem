import { useState, useEffect } from "react";

//must begins the function name with use
const useCounter = (initialValue, component) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    // eslint-disable-next-line
    const interval = setInterval(() => {
      setCounter((prevCounter) => (component === "forward") ? prevCounter + 1 : prevCounter -1);
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return counter;
};
export default useCounter;
