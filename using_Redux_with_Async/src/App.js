import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { uiActions } from "./store/index";

let initialState = true;

function App() {
  const { cartIsVisible } = useSelector((state) => state.uiRed);
  const cart = useSelector((state) => state.cartRed);
  const dispatch = useDispatch();
  const notification = useSelector(state => state.uiRed.notification);

  useEffect(() => {
    if(initialState) // to avoid running in the first time
    {
      initialState = false;
      return;
    }
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );
    fetch("https://reactdatabase-155f4-default-rtdb.firebaseio.com/cart.json", {
      method: "PUT",
      body: JSON.stringify(cart),
    })
    .then((reponse) => {
      if (!reponse.ok) {
        throw new Error("Sending cart data failed.");
      }

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Completed..",
          message: "Sent cart data successfully.",
        })
      );
     
    })
    .catch(err => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
    }));
    });
  }, [cart, dispatch]); //dispatch won't be a problem as react will make sure that dispatch won't change
  return (
    <>
    {notification && <Notification status = {notification.status} title = {notification.title} message = {notification.message}/>}
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
    </>
  );
}

export default App;
