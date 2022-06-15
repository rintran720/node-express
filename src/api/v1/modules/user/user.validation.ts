import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import Joi, { ValidationError } from 'joi';
import validationGenerator from '../../utils/validationGenerator';

export const createSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(256),
});

export const updateSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(8).max(256),
});

export const replaceSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(256).required(),
});

export const createValidation = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  validationGenerator(createSchema, next)(req.body);
};

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
  createValidation,
  updateValidation,
  replaceValidation,
};

export default UserValidation;
