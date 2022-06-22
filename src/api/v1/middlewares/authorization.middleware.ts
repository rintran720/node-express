import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { decodeAccessToken, verifyAccessToken } from '../utils/accessToken';

export const authorizationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const accessToken = req.headers.authorization || '';
    const decoded: any = decodeAccessToken(accessToken);
    if (decoded) {
      const { userId, exp } = decoded;
      const now = Math.round(new Date().getTime() / 1000);
      if (exp < now) {
        next({
          status: 401,
          message: 'Unauthorized',
          metadata: { auto: true },
        });
      }
    } else {
      throw new Error('Invalid token');
    }
  } catch (err: any) {
    next(new createHttpError.Unauthorized(err.message));
  }

  next();
};
