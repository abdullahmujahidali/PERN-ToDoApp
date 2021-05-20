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