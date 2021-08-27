import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counter from "./counterReducer";
import LogUser from "./loguserReducer";

// const rootReducer = combineReducers({
//     counterRed: counter,
//     loguserRed: LogUser.reducer,
// });


//const store = createStore(rootReducer);
const store = configureStore({
    reducer:{
        counterRed: counter,
        loguserRed: LogUser.reducer,
    }
});

export const logActions = LogUser.actions;
export default store;