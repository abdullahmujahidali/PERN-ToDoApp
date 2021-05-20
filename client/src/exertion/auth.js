import apiHandler from '../apiHandler';

export const signUp = (user) => async dispatch =>{
    const res = await apiHandler('/auth/signup','post',user);
    return dispatch({type:'SIGNUP_USER',payload:res.data})   
};

export const signIn = (user) => async dispatch =>{
    const res = await apiHandler('/auth/signin','post',user);
    return dispatch({type:'SIGNIN_USER',payload:res.data})   
};