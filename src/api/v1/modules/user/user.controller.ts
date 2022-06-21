import { Request, Response } from 'express';
import UserRepository from './user.repository';

export const get = async (req: Request, res: Response) => {
  return res.status(200).json({ name: 'get' });
};

export const update = async (req: Request, res: Response) => {
  return res.status(200).json({ name: 'update' });
};

const UserController = { get, update };

export default UserController;
