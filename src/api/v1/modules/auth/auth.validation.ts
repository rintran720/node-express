import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import validationGenerator from '../../utils/validationGenerator';

const strongPasswordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const passswordError =
  'Password must be strong. At least one upper case alphabet. At least one lower case alphabet. At least one digit. At least one special character. Minimum eight in length';

export const registerSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .max(256)
    .regex(strongPasswordRegex)
    .required()
    .messages({
      'string.pattern.base': passswordError,
    }),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(256).required(),
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
