import React from 'react';
import { Main } from './Styles'
import NavBar from '../nav/NavBar';

const Landing = () => {
  return (
    <>
      <NavBar />
      <Main>
      <h1 className="intro">Welcome to the app</h1>
        <div className="container-fluid d-flex justify-content-center">
       
          <div className="row">
            <div className="col-md-12">
              <button className="btn">Get Started</button>
            </div>
          </div>
        </div>
      </Main>
    </>
  )
}

export default Landing;