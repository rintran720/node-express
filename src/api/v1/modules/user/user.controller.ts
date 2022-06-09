import { Request, Response } from 'express';
import UserRepository from './user.repository';

export const create = async (req: Request, res: Response) => {
  return res.status(200).json({ name: 'create' });
};
export const get = async (req: Request, res: Response) => {
  return res.status(200).json({ name: 'get' });
};
export const getlist = async (req: Request, res: Response) => {
  return res.status(200).json({ name: 'getlist' });
};
export const update = async (req: Request, res: Response) => {
  return res.status(200).json({ name: 'update' });
};
export const replace = async (req: Request, res: Response) => {
  return res.status(200).json({ name: 'replace' });
};
export const remove = async (req: Request, res: Response) => {
  return res.status(200).json({ name: 'delete' });
};

const UserController = { create, get, getlist, update, replace, remove };

export default UserController;
