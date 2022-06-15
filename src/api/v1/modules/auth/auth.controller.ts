import { Request, Response } from 'express';
import { access } from 'fs';
import { generateAccessToken } from '../../utils/accessToken';
import {
  decodeRefreshToken,
  generateRefreshToken,
} from '../../utils/refreshToken';
import UserRepository from '../user/user.repository';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserRepository.create({ email, password });
    return res.status(200).json({ data: user });
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserRepository.get({ email, password });
    if (user) {
      const accessToken = generateAccessToken({
        userId: user._id,
      });
      const refreshToken = generateRefreshToken({ userId: user._id });

      return res
        .status(200)
        .json({ data: { token: accessToken, refreshToken } });
    }
    throw new Error('Unexisted user!');
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
};

export const refresh = async (req: Request, res: Response) => {
  try {
    const refreshToken = req.headers.ftoken?.toString() || '';
    const decoded: any = decodeRefreshToken(refreshToken);
    if (decoded) {
      const { userId, exp } = decoded;
      const now = Math.round(new Date().getTime() / 1000);
      if (exp < now) {
        throw new Error('Refresh token fail');
      }

      const accessToken = generateAccessToken({ userId });
      return res.status(200).json({ data: { token: accessToken } });
    } else {
      throw new Error('Invalid token');
    }
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
};

const UserController = { register, login, refresh };

export default UserController;
