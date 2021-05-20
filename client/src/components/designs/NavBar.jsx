import React from 'react';
import { signUp,signIn } from '../../exertion/auth';
import {Nav} from './Styles'
const Navbar = (props)=>{
    const handleSignUp = async () =>{
        await props.signUp({
        name: 'addy', 
        email:'addy@gmail.com',
        password:'abc'}); 
    }
    const handleSignIn = async () =>{
        await props.signIn({ 
        email:'addy@gmail.com',
        password:'abc'
        }); 
    }
    return (
        <Nav>
            <div class="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="logo">
                            <a href="/">To Do List</a>
                        </div>
                    </div>
                    <div className="auth-btns col-md-7">
                        <button  onClick={handleSignUp} className="btn sign-up">
                            Sign Up
                        </button>
                        <button onClick={handleSignIn} className="btn sign-in">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </Nav>
    )
};

const mapStateToProps = ({auth}) =>{
    return {...auth}
}
export default (Navbar);