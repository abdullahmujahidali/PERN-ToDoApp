import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import { User } from '../models';

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