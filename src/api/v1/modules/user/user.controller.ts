import { Request, Response } from 'express';
import { errorFormater, successFormater } from '../../utils/responseFormater';
import UserRepository from './user.repository';

export const get = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const obj = req.body;

    await UserRepository.update(id, obj);
    const user = await UserRepository.get({ _id: id });

    if (!user) throw new Error('The user unexisted');

    return res.status(200).json(successFormater(user));
  } catch (err: any) {
    return res.status(401).json(errorFormater(err.message));
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const obj = req.body;

    await UserRepository.update(id, obj);
    const user = await UserRepository.get({ _id: id });

    if (!user) throw new Error('The book unexisted');

    return res.status(200).json(successFormater(user));
  } catch (err: any) {
    return res.status(401).json(errorFormater(err.message));
  }
};

export const replace = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const obj = req.body;

    await UserRepository.replace(id, obj);
    const user = await UserRepository.get({ _id: id });

    if (!user) throw new Error('The book unexisted');

    return res.status(200).json(successFormater(user));
  } catch (err: any) {
    return res.status(401).json(errorFormater(err.message));
  }
};

const UserController = { get, update, replace };

export default UserController;
