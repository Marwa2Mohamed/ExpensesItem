import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { logActions } from "../store/index";
import { useRef } from "react";

const Auth = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();
    dispatch(
      logActions.login({
        email: emailRef.current.value,
        password: passRef.current.value,
      })
    );
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={login}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
