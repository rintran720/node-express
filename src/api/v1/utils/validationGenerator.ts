import { NextFunction } from 'express';
import { ObjectSchema } from 'joi';

const validationGenerator = (schema: ObjectSchema, next: NextFunction) => {
  return (obj: object) => {
    const { error, value } = schema.validate(obj);
    if (error) {
      next({
        status: 400,
        message: error?.details[0].message,
      });
    } else {
      next();
    }
  };
};

export default validationGenerator;
