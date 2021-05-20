import React from 'react';
import { Provider } from '../context/authContext';
import Landing from './landing/Landing';

function App() {
  return (
    <div className="App">
      <Landing />
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
