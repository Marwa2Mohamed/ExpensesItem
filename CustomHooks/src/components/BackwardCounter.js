import useCounter from "../hooks/use-counter";

import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(0, "backward");

  // return <Card>{counter}</Card>;
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
