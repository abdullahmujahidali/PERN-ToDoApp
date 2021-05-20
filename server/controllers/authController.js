import models from "../models";
import { hasPass,matchPass,myToken } from "../utils";

const {User} = models;

const auth ={
    async signUp(req,res,next){
        try{
            const {name,email,password} = req.body;
            const genHash = hasPass(password);
            const newUser = await User.create({name,email,password:genHash});
            const newToken = myToken.generateToken(newUser);
            const {id} = newUser;
            return res.status(201).send({newToken,newUser:{id,name,email}});
        }
        catch(exp){
            return next(new Error(exp));
        }

    },
    async signIn(req,res,next){
        try{
            const {email,name,password} = req.body;
            const newUser = await User.findOne({where: {email}});
            if(newUser && matchPass(password,newUser.password)){
                const {email,id} = newUser;
                const token = myToken.generateToken(newUser);
                return res.status(200).send({token,newUser:{id, name, email}})
            }
            return res.status(400).send({error: 'Invalid username/password combination'});
        }
        catch(exp){
            return next(new Error(exp));
        }
    }
};

export default auth;