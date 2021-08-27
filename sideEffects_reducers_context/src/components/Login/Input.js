import React, { useImperativeHandle, useRef } from "react";
import classes from "./Login.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  // useEffect(() => {
  //   inputRef.current.focus()
  // },[]);
  const activate = () => {
    inputRef.current.focus();
  };
  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    }; //must be object.
  });
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.htmlFor}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.htmlFor}
        id={props.htmlFor}
        value={props.value}
        onChange={props.ChangeHandler}
        onBlur={props.validateHandler}
      />
    </div>
  );
});

export default Input;
