import classes from './Header.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';
import { useSelector } from 'react-redux';
import React from 'react';

const Header = () => {
  const auth = useSelector((state)=>{
    return state.auth.isAuthenticated;
  });
  const dispatch = useDispatch();

  const logoutHandler = () =>{
    dispatch(authActions.logout());
  };

  const authHeaders =auth ?
   <React.Fragment>
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
        </ul>
      </nav>
   </React.Fragment>
   :<React.Fragment></React.Fragment>
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {authHeaders}
    </header>
  );
};

export default Header;
