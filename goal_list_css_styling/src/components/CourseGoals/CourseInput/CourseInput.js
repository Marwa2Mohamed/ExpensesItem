import React, { useState } from "react";
import Button from "../../UI/Button/Button";
/* In this file, I am using the style compnent to style my file
 * with one of the private styling methods, in order not to be
 *  used be other files .
 */
import styled from "styled-components";

const FormControl = styled.div`
  margin: 0.5rem 0;
  @media (max-width: 768px) {
    width: 30%;
  }

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${(props) => (!props.invalid ? "red" : "black")};
  }
  & input {
    display: block;
    width: 70%;
    border: 1px solid ${(props) => (!props.invalid ? "red" : "#ccc")};
    background: ${(props) => (!props.invalid ? "#ffd7d7" : "transparent")};
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  // &.invalid input {
  //   border-color: red;
  //   background-color: #ffd7d7;
  // }

  // &.invalid label {
  //   color: red;
  // }
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setIsValid(true);
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      alert("Please enter a goal...");
    } else {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/**We could have used className = {!isValid? 'invalid' : ''  OR className = {!isValid && 'invalid'} */}
      <FormControl invalid={isValid}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit" name="submit">
        Add Goal
      </Button>
      <Button name="cancel">Cancel</Button>
    </form>
  );
};

export default CourseInput;
