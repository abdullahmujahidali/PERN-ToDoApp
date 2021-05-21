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