import emailValidator from 'validator';
import {User} from '../models';
/*
This file is to send back validation and verification error.
Validator.js: Used to validate emails in this case
status 409: Conflict
status 400: Bad Request
Used for authentication (Sign Up & Sign In) mostly related to email and password and check whether user already exists or not 
*/

export default async (req,res,next) =>{
    const {email,name,password}= req.body;
    if(!emailValidator.isEmail){
        return res.status(400).send({error: 'Invalid Email'});
    }
    if(!email){
        return res.status(400).send({error:'Email is required'});
    }
    if(!name){
        return res.status(400).send({error:'Name is required'});
    }
    if(!password){
        return res.status(400).send({error:'Password is required'});
    }

    const userEmail = await User.findOne({where:{email}});
    if(userEmail){
        return res.status(409).send({error: 'User already exists'});
    }
    const userName = await User.findOne({where:{name}});
    if(userName){
        return res.status(409).send({error: 'User already exists'});
    }
    next();
};