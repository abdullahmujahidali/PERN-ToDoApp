/**
 * auth context is for user authentication
 */

import CreateContext from './CreateContext';
import authReducer from '../reducers/auth';
import { signUp, signIn, setCurrentUser } from '../exertion';

export const initialState = {
  user: null,
  isAuthenticated: false,
  signUpErr: '',
  signInErr: ''
};

export const { Context, Provider } = CreateContext(
  authReducer,
  { signUp, signIn, setCurrentUser },
  initialState,
)