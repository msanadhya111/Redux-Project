import { useDispatch, useSelector } from "react-redux";
import classes from "./Header.module.css";
import { AuthActions } from "../store/auth";

const Header = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
  };

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isLoggedIn && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
