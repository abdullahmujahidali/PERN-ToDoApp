import models from "../models";
import { hasPass,matchPass,myToken } from "../utils";

/*
This file is responsible to fetch the data from the body (front end) and it returns status code along with the situation
status 201 : Created
status 200: Ok
status 400: Bad Request
Used for authentication (Sign Up & Sign In)
*/

const {User} = models;

const auth ={
    async signUp(req, res, next) {
        try {
          const { name, email, password } = req.body;
          const hash = hasPass(password);
          const user = await User.create({ name, email, password: hash });
          const token = myToken.generateToken(user);
          const { id } = user;
          return res.status(201).send({ token, user: { id, name, email } });
        } catch (e) {
          return next(new Error(e));
        }
      },
    async signIn(req, res, next) {
        try {
          const {email, password } = req.body;
          const user = await User.findOne({ where: { email } });
          if (user && matchPass(password, user.password)) {
            const { name, id } = user;
            const token = myToken.generateToken(user);
            return res.status(200).send({ token, user: { id, name, email } });
          }
          return res.status(400).send({ error: 'invalid email/password combination ' });
        } catch (e) {
          return next(new Error(e));
        }
      },
};

export default auth;