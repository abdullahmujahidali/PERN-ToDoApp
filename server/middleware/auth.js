import emailValidator from 'validator';
import {User} from '../models';

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