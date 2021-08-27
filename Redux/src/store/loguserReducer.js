import { createSlice } from "@reduxjs/toolkit";

const initialState = {isAuth: false, email: "", password: ""};
const LogUser = createSlice({
  name: 'loguser',
  initialState,
  reducers: {
    login(prevstate, action){
      prevstate.isAuth = true; // only acceptable to change the old state instead of returning a new object state with reduxtoolkit. 
      prevstate.email = action.payload.email //{type: SOME_UNIQUE_IDENTIFIER, payloda: emailValueDispatched}
      prevstate.password = action.payload.password
    },
    logout(prevstate){
      prevstate.isAuth = false;
      prevstate.email = "";
      prevstate.password = "";
    }
  }
});
export default LogUser;
