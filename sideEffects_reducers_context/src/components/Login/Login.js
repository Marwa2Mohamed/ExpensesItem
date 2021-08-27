import React, { useEffect, useReducer, useState, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import Input from "./Input";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "USER_INPUT":
      return { value: action.val, isValid: action.val.trim().includes("@") };
    case "USER_BLUR":
      return { value: action.val, isValid: action.val.trim().includes("@") };
    case "PASS_INPUT":
      return { value: action.val, isValid: action.val.trim().length > 6 };
    case "PASS_BLUR":
      return { value: action.val, isValid: action.val.trim().length > 6 };
    default:
      return { value: "", isValid: false };
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState("");
  //const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const emailInputRef = useRef();
  const passInputRef = useRef();
  // useReducer(callbackfun, initstate, initfun) for email
  const [emailState, dispatchEmail] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });
  // useReducer(callbackfun, initstate, initfun) for password
  const [passState, dispatchPass] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  // to remove redundancy in te code by checking the logic each time a password or an email is changed
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking from Validity!");
      console.log(passState.value)
      setFormIsValid(emailState.isValid && passState.value.length > 6);
    }, 500);

    //returns a cleanup function(after I finish so and so) that is called before the identifier except for the first time
    return () => {
      console.log("CLEAN UP!");
      clearTimeout(identifier);
    };
  }, [emailState.isValid, passState.isValid, passState.value]);

  // when user enters values (per key strokes).
  const emailChangeHandler = (event) => {
    // what inside the dispatchEmail is called an action. It could be string, object, etc..
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: "PASS_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "USER_BLUR", val: emailState.value});
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: "PASS_BLUR", val: passState.value});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      props.onLogin(emailState.value, passState.value);
    } else if (!emailState.isValid) {
      emailInputRef.current.focus();
    } else {
      passInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref = {emailInputRef}
          State={emailState.isValid}
          htmlFor="email"
          label="E-Mail"
          value={emailState.value}
          ChangeHandler={emailChangeHandler}
          validateHandler={validateEmailHandler}
        />
        <Input
          ref = {passInputRef}
          State={passState.isValid}
          htmlFor="password"
          label="Password"
          value={passState.value}
          ChangeHandler={passwordChangeHandler}
          validateHandler={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default React.memo(Login);
