import classes from './CartButton.module.css';
import {uiActions} from '../../store/index';
import { useDispatch, useSelector } from 'react-redux';
const CartButton = (props) => {
  const {totalQuantity} = useSelector(state => state.cartRed);
  const dispatch = useDispatch();

  const toggleCartHandler = (event) =>{
    dispatch(uiActions.toggle());
  }
  return (
    <button className={classes.button} onClick ={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
