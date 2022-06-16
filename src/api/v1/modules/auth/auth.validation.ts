import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import validationGenerator from '../../utils/validationGenerator';

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(256),
});

export const loginSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(8).max(256),
});

export const registerValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  validationGenerator(registerSchema, next)(req.body);
};

export const loginValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  validationGenerator(loginSchema, next)(req.body);
};

const AuthValidation = {
  registerValidation,
  loginValidation,
};

export default AuthValidation;
