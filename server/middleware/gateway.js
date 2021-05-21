import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { User } from '../models';
/*
Dotenv:
  dotenv is a no-dependency module that allows us to loads enviornment variables that we have defined for our application
  it is recommended for development side we can hide our secret infromation and from dotenv we can access it.

Config:
  Config allows us to read our .env file that we have created it is a component from our package dotenv
In this file we are creating a token that is valid for only 24hour, after that sesssion (token) will expire
the purpose of using this file is to authenticate a user for next components and make a barrier infront of 
require login components, user is search by primary key if found we return status otherwise user is redirected 

JWT:
  JSON Web Token is a compact URL safe allows us to transfer and share resources between two parties.

status 401: Unathorized
status 400: Bad Request
Used for generating jwt token to allow user to access private routes 
*/

config();

export default (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  const token = req.headers.authorization.split(' ')[1];
  return jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24h' }, (error, decode) => {
    if (error) {
      return res.status(401).send({ error });
    }
    req.decode = decode;
    return User.findByPk(decode.userId)
      .then((user) => {
        if (!user) {
          return res.status(401).send({ error: 'User does not exist' });
        }
        return next();
      });
  });
};