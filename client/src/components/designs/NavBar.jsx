/**
 * Navbar is one of the common component in each application here as our navbar contains only logout component but 
 * i have defined other case around if a user is not logged in means his/her token is not generated we will see sign in and sign
 * up button and when he/she will be logged in he/she will see logout button
Cookie: 
  Cookie is a lightweight JS Api for handling cookies, here it is used to store user infromation on web pages 
  in localstorage user token is being generated if we hit localStorage.clean() it will be removed.

  useHistory: is used to access the history prop from router we often use it to push or replace certain history from our stack.
  Replace is commonly used in react native and push is used in react js normally,

*/

import React, { useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { NavLink, useHistory } from 'react-router-dom';
import { Nav } from './Styles';
import { Context as AuthContext } from '../../context/authContext';

const NavBar = () => {
  const { state: { user }, setCurrentUser } = useContext(AuthContext);
  const history = useHistory();
  function logOut(){
    localStorage.clear();
    history.push('/')
  }
  useEffect(() => {
    if (Cookies.get('token')) {
      setCurrentUser(Cookies, jwtDecode);
    }
  }, []);

  return (
    <Nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
          <img className="logo" src='/to-do.png'></img>
          </div>
          <div className="auth-btns col-md-7">
            {user ? (
              <div className="float-right mt-4" onClick={logOut}> LOG OUT</div>
            ) : (
              <>
                <NavLink to="/signup">
                  <button className="btn sign-up">Sign Up</button>
                </NavLink>
                <NavLink to="/signin">
                  <button className="btn sign-in">Sign In</button>
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </Nav>
  )
};

export default NavBar;