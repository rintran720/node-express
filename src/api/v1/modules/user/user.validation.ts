import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import validationGenerator from '../../utils/validationGenerator';

export const updateSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(8).max(256),
});

export const updateValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  validationGenerator(updateSchema, next)(req.body);
};

const UserValidation = {
  updateValidation,
};

export default UserValidation;
