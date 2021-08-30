import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { items } = useSelector((state) => state.cartRed);
  const h2Content = (items.length > 0)? "Your Shopping Cart" : "No products added";
  return (
    <Card className={classes.cart}>
      <h2>{h2Content}</h2>
      <ul>
        {items.length > 0 &&
          items.map((product) => (
            <CartItem
            key = {product.id}
            item = {{ id: product.id, title: product.name, quantity: product.quantity, total: product.totalPrice, price: product.price }}
            />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
