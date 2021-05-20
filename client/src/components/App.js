import React, { useContext } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from '../context/authContext';
import SignUp from './authenticationForm/SignUp';
import SignIn from './authenticationForm/SignIn';
import Landing from './landing/Landing';


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
      </Router>
    </div>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};
