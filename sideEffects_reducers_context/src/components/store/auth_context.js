import React from "react";
/**
 * any type of parameters are acceptable (string, number, object => most common, etc...).
 * This returns an object that by wrapping and using provider it will a component
 */
const AuthContext = React.createContext({
  isLoggedIn: false, //initial value
  onLogout: () => {},
});

export default AuthContext;
