/**
 * Here we have defined our single component named design in which we can set some sub componet which can be loaded 
 * everytime we passes this component alongn such as Navbar and Footer.
 */
import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

const Design = ({ children }) => {
  return (
    <Wrapper>      
    <NavBar />
      {children}
    <Footer />
    </Wrapper>
  )
}

export default Design