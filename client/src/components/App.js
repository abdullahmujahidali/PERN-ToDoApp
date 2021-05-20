import React, { useContext } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Provider, Context } from '../context/authContext';
import Cookies from 'js-cookie';
import SignUp from './authenticationForm/SignUp';
import SignIn from './authenticationForm/SignIn';
import Landing from './landing/Landing';
import ListTodos from './taskScreens/ListTodo';

function App() {
  const { signUp, signIn } = useContext(Context)
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" render={({ history }) => (<SignUp signUp={async (user) => {
          const res = await signUp(user);
          if (res) {
            Cookies.set('token', res.data.token);
            history.push('/todos');
          }
        }} />)
        } />
        <Route path="/signin" render={({ history }) => (<SignIn signIn={async (user) => {
          const res = await signIn(user);
          if (res) {
            Cookies.set('token', res.data.token);
            history.push('/todos');
          }
        }} />)} />
        <Route path="/todos" render={() => (<ListTodos />)} />
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
