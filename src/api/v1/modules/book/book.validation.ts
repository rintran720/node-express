import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import Joi, { ValidationError } from 'joi';
import validationGenerator from '../../utils/validationGenerator';

export const createSchema = Joi.object({
  name: Joi.string().min(1).max(256).required(),
  desc: Joi.string().min(1).max(2000).required(),
  author: Joi.string().min(1).max(256).required(),
});

export const updateSchema = Joi.object({
  name: Joi.string().min(1).max(256),
  desc: Joi.string().min(1).max(2000),
  author: Joi.string().min(1).max(256),
});

export const replaceSchema = createSchema;

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

const BookValidation = {
  createValidation,
  updateValidation,
  replaceValidation,
};

export default BookValidation;
