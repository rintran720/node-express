import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import validationGenerator from '../../utils/validationGenerator';

export const updateSchema = Joi.object({
  email: Joi.string().email(),
  name: Joi.string().min(1).max(256),
});

export const replaceSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().min(1).max(256).required(),
});

export const updateValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  validationGenerator(updateSchema, next)(req.body);
};

export const replaceValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  validationGenerator(replaceSchema, next)(req.body);
};

const UserValidation = {
  updateValidation,
  replaceValidation,
};

export default UserValidation;
