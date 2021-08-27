/* In this file, I am using the CSS Modules to style my file
 * with one of the private styling methods, in order not to be
 *  used be other files .
 */
import styles from "./Button.module.css";
const Button = (props) => {
  return (
    //or we could use className={styles.button (the class name in css file)}
    <button
      type={props.type}
      className={`${
        props.name === "cancel" ? styles["cancel"] : styles["button"]
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
