/**
 * all the actions are being handled in this file for user which consist of all cases loading, success and failure
 */
import apiHandler from '../apiHandler';

export const signUp = (dispatch) => async (user) => {
    try {
        dispatch({ type: 'SIGNUP_USER_LOADING' });
        const res = await apiHandler('/auth/signup', 'post', user);
        dispatch({ type: 'SIGNUP_USER_SUCCESS', payload: res.data })
        return res;
    }
    catch (err) {
        return dispatch({ type: 'SIGNUP_USER_FAILURE', payload: err.response.data });
    }
};

export const setCurrentUser = (dispatch) => (Cookies, jwtDecode) => {
    try {
      dispatch({ type: 'SET_CURRENT_USER_LOADING' });
      const payload = jwtDecode(Cookies.get('token'));
      dispatch({ type: 'SET_CURRENT_USER_SUCCESS', payload });
    } catch (err) {
      dispatch({ type: 'SET_CURRENT_USER_FAILURE', payload: err })
    }
}

export const signIn = (dispatch) => async (user) => {
    try {
        dispatch({ type: 'SIGNIN_USER_LOADING' });
        const res = await apiHandler('/auth/signin', 'post', user);
        dispatch({ type: 'SIGNIN_USER_SUCCESS', payload: res.data });
        return res;
    } catch (err) {
        return dispatch({ type: 'SIGNIN_USER_FAILURE', payload: err.response.data })
    }
};