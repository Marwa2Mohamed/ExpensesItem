import classes from './Header.module.css';
import {useSelector, useDispatch } from 'react-redux';
import {logActions} from '../store/index';


const Header = () => {
  const {isAuth} =useSelector(updatedState => updatedState.loguserRed);
  const dispatch = useDispatch();
  
  const logout = (event) =>{
    dispatch(logActions.logout());
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick = {logout}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
