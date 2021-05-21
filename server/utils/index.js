/**
 * this file is a utility file which is responsible for generating jwt for a user by signing it with email and id 
 * each token is valid for 24 hour and also we are encrypting our user passsword here using bcrypt module that allows 
 * us to encrypt and decrypt data
 */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { config } from 'dotenv';

config();
export const myToken = {
  generateToken({ id, email }) {
    return jwt.sign(
      { userId:id, email },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  },
  matchToken(token) {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, { expiresIn: '24h' });
    return decoded;
  }
};

export const hasPass = (password) => bcrypt.hashSync(password, 10);
export const matchPass = (password, hash) => bcrypt.compareSync(password, hash);