/**
 * a simple landing page of the application
 */
import React from 'react';
import { NavLink } from "react-router-dom"
import { Main } from './Styles'

const Landing = () => {
  return (
    <>
      <Main>
        <h1 className="intro">Welcome to my To do App</h1>
        
        <img className="logo" src='/to-do2.png'></img>
        
        <h5 className="subText">ToDo List App is a kind of app that generally used to <br />
       maintain our day-to-day tasks or list everything that we have to do, with the most important tasks <br />
       at the top of the list, and the least important tasks at the bottom</h5>

        <div className="container-fluid d-flex justify-content-center">

          <div className="row">
            <div className="col-md-12">
              <NavLink to="/signup">
                <button className="btn2" >SIGN UP</button>
              </NavLink>
              <NavLink to="/signin">
                <button className="btn1">SIGN IN</button>
              </NavLink>

            </div>
          </div>
        </div>
      </Main>
    </>
  )
}

export default Landing;