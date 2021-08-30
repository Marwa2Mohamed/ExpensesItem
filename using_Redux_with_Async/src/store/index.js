import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./ui_reducer";
import cartReducer from "./cart_reducer";

const store = configureStore({
    reducer:{
        uiRed: uiReducer.reducer,
        cartRed: cartReducer.reducer
    }
})

export const uiActions = uiReducer.actions;
export const cartActions = cartReducer.actions;
export default store;